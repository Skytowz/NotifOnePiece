const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
    var OnePiece = "\n> One Piece : op";
    var Mha = "\n> My Hero Academia : mha";
    var BlackButler="\n> Black Butler : bb";
    var DrStone="\n> Dr Stone : ds";
    var DemonSlayer="\n> Demon Slayer/Kimetsu No Yaiba : kny";
    var SNK="\n> Snk : snk";
    var Boruto="\n> Boruto : bor";
    var text = "&<manga> [num_chap]"+OnePiece+Mha+BlackButler+DrStone+DemonSlayer+SNK;
    const help = new Discord.RichEmbed()
        .setColor('#8e238e')
        .setTitle('Help')
        .addField('Pour voir le dernier chapitre ou un chapitre donné:',text)
        .addField('Pour faire une suggestion (dans le channel suggestions)','&suggestion [text]')
        .addField('Pour afficher la page d\'aide','&help')
        .setThumbnail("https://cdn.discordapp.com/attachments/683663363653238794/685227026617073719/cry.gif");

    
    
    await  message.channel.send(help)

};
module.exports.help = {
    name:"help"
}
