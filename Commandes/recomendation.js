const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');

module.exports.run = async(client, message, args) =>{
    var name;
    var image;
    var text = "";
    var url =args[0];
   await rp(url)
    .then(function(html){
        //success!
        name= $('h1[class=h1titre] span[itemprop=name]',html).html();
        var des = $('.description',html).text().split(" 1) ")[0];
        text="**Description:**\n";
        if(des.length>1500){
            des=des.substr(0,1500).trim()+"..........(see more on Nautiljon)";
        }
        text+=des+"\n===================================";
        image ="https://www.nautiljon.com/"+$(`img[alt=\"${name}\"][itemprop=image]`,html)[0].attribs.src;
        var info=$('.mb10',html).html();
        if(info.includes("Licencié en France : ")){
            var i = -1;
            var data = $('span',info);
            do {
                i++;
            } while (data[i].children[0].data  != "Licencié en France : ");
            if(data[i].parent.children[1].data ==" Oui"){
                i++;
                text+="\n**Disponible légalement sur:** ";
                var where = data[i];
                while(where.next != null){
                    where = where.next.next;
                    text+=where.children[0].data;
                    if(where.next!=null) text+=", ";
                }  
            }else text+="\n**Pas disponible légalement en France**";
        }else text+="\n**Pas disponible légalement en France**";

        var nbEp = $("span[itemprop=numberOfEpisodes]",html).text();
        if(nbEp != "?" && nbEp!="") text+="\n\n**Il y a actuellement** "+nbEp+" **épisodes**";

        var note = $("span[itemprop=ratingValue]",html).text();
        if(note!="")text+="\n\n**Il possède une note de** "+note+"**/10**";
        
        var prodBy = $("span[itemprop=legalName]",info).text();
        if(prodBy!="") text+="\n\n**Studio: **"+prodBy;

        text+="\n\n**Nautiljon: **"+url;

        const sugg = new Discord.MessageEmbed()
        .setColor('#fffff')
        .setTitle(name)
        .setThumbnail(image)
        .setDescription(text)
        .setFooter("Recommended by: "+  message.author.username )
        .setTimestamp()
        .setURL(url);

        message.channel.send(sugg);

    }).catch(function(err){
        console.log(err);
        message.channel.send("Page not found");
  });


    
};
module.exports.help = {
    name:"reco"
}
