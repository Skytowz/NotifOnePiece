const Discord = require("discord.js");
const prefix = "!";

module.exports = async(client, message) => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(message.content.charAt(1)!=prefix) return;

    const args = message.content.slice(prefix.length+1).trim().split(/ +/g);
    const commande = args.shift(2);

    const cmd = client.commands.get(commande);

    if(!cmd) return;

    cmd.run(client, message, args);
};
