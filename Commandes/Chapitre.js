const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
var url;
if(message.content.startWith('o')){
    url='http://scantrad.net/one-piece';
}else if(message.content.startWith('m')){
    url='http://scantrad.net/my-hero-academia';
}
const opChap = [];
module.exports.run = async(client, message, args) =>{

    rp(url)
      .then(function(html){
        //success!
        for(let i = 0; i < 25 ; i++){
            opChap.push($(' a ',html)[i].attribs.href);          
        }  
        var j=0;
        while(opChap[j].substr(0,6) != "/manga"){
            j++;
            if(opChap[j].length > 10){
                if(opChap[j].substr(0,6) == "/manga"){
                    chap = opChap[j];
                }
            }           
        }    
    })
        .catch(function(err){
        console.log("error");
    });    



    
    switch(args.length){
        case 1:
            chap= `/mangas/one-piece/${args}`;
            break;
        default:
            break;
    }
     await  message.channel.send("Lien").then(async(m) => await m.edit(`https://scantrad.net${chap}`))

};
module.exports.help = {
    name:"chapitre"
}
