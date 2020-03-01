const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const url = 'http://scantrad.net/one-piece';
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




    if(args.length > 0) chap= `/mangas/one-piece/${args}`;
    await  message.channel.send("Lien").then(async(m) => await m.edit(`https://scantrad.net${chap}`))

};
module.exports.help = {
    name:"chapitre"
}
