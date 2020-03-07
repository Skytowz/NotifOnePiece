const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
    if(!message.member.roles.cache.some(r=>["Dev"].includes(r.name))) return;
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

    message.guild.roles.create({
        data: {
            name: roleName,
            color:'#546e7a',
        }
    })
    message.channel.send("&add2 ["+name+"]["+roleName+"]");
    
}
module.exports.help = {
    name:"add"
}


