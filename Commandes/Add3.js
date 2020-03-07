const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
    if(!message.member.roles.cache.find(role => role.name === 'Bot')) return;
    let j=0;
    var msg = message.content;
    var roleName="";
    for (let i = 0; i < msg.length; i++) {
        if(msg.charAt(i) == '['){
            j++;
        }else if(j==1){
            if(msg.charAt(i) == ']'){
                j++;
            }else{
                roleName+=msg.charAt(i);
            }
        }     
    }
    idCat = message.guild.channels.cache.last().id;
    message.guild.channels.create('chapitre-actuel',{
        type: 'text',
        parent : idCat,
    })
    message.guild.channels.create('images',{
        type: 'text',
        parent : idCat,
    })
    message.guild.channels.create('theories',{
        type: 'text',
        parent : idCat,
    })
    message.guild.channels.create('test-bot',{
        type: 'text',
        parent : idCat,
        permissionOverwrites: [
            {
                id: message.guild.roles.cache.find(role => role.name === roleName ).id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: message.guild.roles.cache.find(role => role.name === 'Dev' ).id,
                
            },
        ]
    })
    
    message.guild.channels.create('spoiler',{
        type: 'text',
        parent : idCat,
    })
    message.guild.channels.create('notif-chapitre',{
        type: 'text',
        parent : idCat,
    })
    message.guild.channels.create('discussion-lambda',{
        type: 'text',
        parent : idCat,
    })
    
    message.guild.channels.create('debats',{
        type: 'voice',
        parent : idCat,
    })
}
module.exports.help = {
    name:"add3"
}
