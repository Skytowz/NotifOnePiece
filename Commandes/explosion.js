const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
    var explosion = false;
    if(message.member.roles.cache.some(r=>["Test Bot"].includes(r.name)) && explosion) message.edit("explosion");
    
    //await  message.channel.send({files : ['https://cdn.discordapp.com/attachments/683663363653238794/685450393722814490/b62beab7ce5c03f4503e54bc4923c3fc6d58b0ad_hq.gif']})

};
module.exports.help = {
    name:"explosion"
}