const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
    if(!message.member.roles.cache.find(role => role.name === 'Bot')) return;
    let j=0;
    var msg = message.content;
    var name="";
    var roleName="";
    for (let i = 0; i < msg.length; i++) {
        if(msg.charAt(i) == '['){
            j++;
        }else if(j==1){
            if(msg.charAt(i) == ']'){
                j++;
            }else{
                name+=msg.charAt(i);
            }
        } else if(j==3){
            if(msg.charAt(i) == ']'){
                j++;
            }else{
                roleName+=msg.charAt(i);
            }
        }      
    }

    message.guild.channels.create(name, {
        type: 'category',
        permissionOverwrites: [
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: message.guild.roles.cache.find(role => role.name === roleName).id,

            },
        ]
    })

    message.channel.send("&add3 ["+roleName+"]");     
   
}
module.exports.help = {
    name:"add2"
}


