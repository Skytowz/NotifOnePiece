const Discord = require("discord.js");
const prefix = "&";

module.exports = async(client, message) => {
    
    if(message.channel.type === "dm") return;

    if(message.channel.name == "suggestions"  && ((message.content.startsWith(prefix) && message.content.slice(prefix.length).trim().split(/ +/g)[0] != "suggestion" ) || !message.member.roles.some(r=>["Dev", "Rainbow Kazekage","Scan Bot"].includes(r.name)))){
        message.delete(); 
        return;
    }
    if(!message.content.startsWith(prefix)) return;
    message.delete();
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd) return;

    cmd.run(client, message, args);
};
