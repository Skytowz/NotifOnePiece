const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const opChap = [];
var url = 'http://scantrad.net/one-piece';
var site = 'https://scantrad.net/mangas/one-piece/';
let chap;
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
                    var tab = chap.split("/");
                    chap=tab[3];
                    console.log(chap);
                }
            }           
        }
        switch(args.length){
            case 1:
                chap=args+'/';
                site='https://www.japscan.co/lecture-en-ligne/one-piece/'
                break;
            default:
                break;
        }
           
    })
        .catch(function(err){
        console.log("error");
    });
    
    console.log(args.length);
     await  message.channel.send("Lien").then(async(m) => await m.edit(`${site}${chap}`))

};
module.exports.help = {
    name:"op"
}
