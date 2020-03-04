const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const opChap = [];
var url = 'https://www.lirescan.me/boruto-lecture-en-ligne/';
let chap;
module.exports.run = async(client, message, args) =>{
    rp(url)
      .then(function(html){
        //success!
        for(let i = 0; i < 4 ; i++){
            opChap.push($(' meta ',html)[i].attribs.content);          }  
        var j=0;
        while(opChap[j] == undefined || opChap[j].substr(0,7) != "/boruto"){
            if(opChap[j] == undefined){
                j++;
            }else{
                j++;
                console.log( opChap[j].substr(0,7));
                if(opChap[j].length > 10){
                    if(opChap[j].substr(0,7) == "/boruto"){
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
    await  message.channel.send("Lien").then(async(m) => await m.edit(`https://www.japscan.co/lecture-en-ligne/boruto/${chap}/`))

};
module.exports.help = {
    name:"bor"
}