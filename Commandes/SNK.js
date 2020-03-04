const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const opChap = [];
var url = 'https://www.lirescan.me/shingeki-no-kyojin-lecture-en-ligne/';
let chap;
module.exports.run = async(client, message, args) =>{
    rp(url)
      .then(function(html){
        //success!
        for(let i = 0; i < 4 ; i++){
            opChap.push($(' meta ',html)[i].attribs.content);  
        }  
        var j=0;
        while(opChap[j] == undefined || opChap[j].substr(0,9) != "/shingeki"){
            if(opChap[j] == undefined){
                j++;
            }else{
                j++;
                console.log(opChap[j].substr(0,9));
                if(opChap[j].length > 10){
                    if(opChap[j].substr(0,9) == "/shingeki"){
                        chap = opChap[j];
                        var tab = chap.split("/");
                        chap=tab[2];
                        console.log(chap);
                    }
                }
            }           
        } 
        switch(args.length){
            case 1:
                chap=args;
                break;
            default:
                break;
        }
           
    })
        .catch(function(err){
        console.log(err);
    });

    await  message.channel.send("Lien").then(async(m) => await m.edit(`https://www.japscan.co/lecture-en-ligne/shingeki-no-kyojin/${chap}/`))

};
module.exports.help = {
    name:"snk"
}