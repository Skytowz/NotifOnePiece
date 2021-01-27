const Discord = require("discord.js");
let {PythonShell} = require("python-shell");
const chan = "suggestions";
module.exports.run = async(client, message, args) =>{        
    let code = message.content.split("```")[1];
    code = code.slice(code.split(/\n/)[0].length);
    PythonShell.runString(code,null,function(err,res){
        if(err) throw err;
       message.channel.send("=================="+code).then(
            res.forEach(element => {
                message.channel.send("=> "+element);
            })
        );
    });
};
module.exports.help = {
    name:"py"   
}
