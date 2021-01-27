const Discord = require("discord.js");
const chan = "suggestions";
module.exports.run = async(client, message, args) =>{
    if(message.channel.name != chan && message.channel.name != "dev-bot-discord") return;
    var text=""; 
    for(i of args){
        text+=i+" ";
    }
    const sugg = new Discord.MessageEmbed()
        .setColor('#fffb17')
        .setTitle('Suggestion')
        .setDescription("@everyone \n"+text)
        .setFooter("Suggestion by : "+  message.author.username )
        .setTimestamp()
        .addField('Votez avec :', ':thumbsup:&:thumbsdown:')
        .setThumbnail("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.icone-png.com%2Fpng%2F54%2F53887.png&f=1&nofb=1");
        
     
    await message.channel.send(sugg).then(async(m) => m.react('👍').then(m.react('👎')))

};
module.exports.help = {
    name:"suggestion"
}
