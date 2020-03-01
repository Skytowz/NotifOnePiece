module.exports.run = async(client, message, args) =>{

    await  message.channel.send("help").then(async(m) => await m.edit("!chapitre : Affiche le dernier chapitre sorti, ou le chapitre mis en argument\n!lchapitre : Affiche les 3 derniers chapitres disponible sur Scantrad"))

};
module.exports.help = {
    name:"help"
}