const Discord = require("discord.js");
module.exports.run = async(client, message, args) =>{
    if(!message.member.roles.some(r=>["Dev", "Rainbow Kazekage"].includes(r.name))) return;
    var text=""; 
    for(i of args){
        text+=i+" ";
    }
    const msg = new Discord.RichEmbed()
        .setColor('#0000ff')
        .setTitle('Info')
        .setDescription(text)
        .setFooter("Le staff : "+ message.author.username)
        .setThumbnail("https://cdn.ter.sncf.com/medias/Images/centre_val_de_loire/Picto%20info%20bleu_tcm56-120300_tcm56-120299_272x194.png");
        
    message.channel.send("@everyone");
    await message.channel.send(msg)

};
module.exports.help = {
    name:"info"
}
