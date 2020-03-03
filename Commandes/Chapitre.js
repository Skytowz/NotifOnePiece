const Discord = require("discord.js");
const $ = require('cheerio');
const rp = require('request-promise');
const opChap = [];
var c;
let chap;
module.exports.run = async(client, message, args) =>{
    console.log(message.content.charAt(0));
    switch(message.content.charAt(0)){
        case 'o':
            console.log("in o");
            a('http://scantrad.net/one-piece/');
            c='one-piece/';
            break;
        case 'm':
            console.log("in m");
            a('http://scantrad.net/my-hero-academia/');
            c='my-hero-academia/';
            break;
        default:
            return; 
    }
    



    switch(args.length){
        case 1:
            chap=args;
            break;
        default:
            break;
    }
    
     await  message.channel.send("Lien").then(async(m) => await m.edit(`https://scantrad.net/mangas/${c}${chap}`))

};
module.exports.help = {
    name:"chapitre"
}
function a(url){
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
    })
        .catch(function(err){
        console.log("error");
    });   
}
