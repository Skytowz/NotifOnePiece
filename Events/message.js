const Discord = require("discord.js");
const prefix = "&";
let explosion = false ;

module.exports = async(client, message) => {
    
    if(message.channel.type === "dm") return;

    
    if(message.channel.name == "suggestions"  && ((message.content.startsWith(prefix) && message.content.slice(prefix.length).trim().split(/ +/g)[0] != "suggestion" ) || !message.member.roles.cache.some(r=>["Dev", "Rainbow Kazekage","Bot"].includes(r.name)))){
        message.delete(); 
        return;
    }

    if (explosion && !message.content.startsWith(prefix) && message.member.roles.cache.some(r=>["Bot Testeur"].includes(r.name) )){
        message.delete();
        message.channel.send('EXPLOOOOOSION');
    }
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/(\s|\n)+/g); // .slice = enleve prefix ; .trim = enleve espace ; .split args[] chaque espace nv mot args
    const commande = args.shift(); // mets nom commande dans commande et enleve première case args;
    if(commande == "exploosion" ){
        if(message.member.roles.cache.some(r=>["Bot Testeur"].includes(r.name) )){
            explosion = !explosion;
        }   
        message.delete();   
    }
    const cmd = client.commands.get(commande);
    
    if(!cmd) return;

    message.delete();
    cmd.run(client, message, args);
};




