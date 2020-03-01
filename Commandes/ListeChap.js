const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const url = 'http://scantrad.net/one-piece';
const opChap = [];
var chap = [];
module.exports.run = async(client, message, args) =>{

    rp(url)
      .then(function(html){
        //success!
        for(let i = 0; i < 25 ; i++){
            opChap.push($(' a ',html)[i].attribs.href);
            
        }  
        var i=0;
        for(let j=0;j<25;j++){
            if(opChap[j].length > 10){
                if(opChap[j].substr(0,6) == "/manga"){
                   chap[i]=j;
                   i++;
                }
            }
        }  
    
    })
        .catch(function(err){
        console.log("error");
    });
    


    

    for(let i = 0; i<chap.length;i++){
        await  message.channel.send("Chapitre").then(async(m) => await m.edit(`https://scantrad.net/${opChap[chap[i]]}`))
        console.log(opChap[chap[i]]);
    }
}
module.exports.help = {
    name:"lchapitre"
}
