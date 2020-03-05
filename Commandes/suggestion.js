const Discord = require("discord.js");
module.exports.run = async(client, message, args) =>{
    
    const sugg = new Discord.RichEmbed()
        .setColor('#fffb17')
        .setTitle('Suggestion')
        .setDescription(args)
        .setAuthor(message.auhor)



    await  message.channel.send(sugg)

};
module.exports.help = {
    name:"suggestion"
}
