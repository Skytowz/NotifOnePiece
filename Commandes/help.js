module.exports.run = async(client, message, args) =>{
    var OnePiece = "\n> One Piece : op";
    var Mha = "\n> My Hero Academia : mha";
    var BlackButler="\n> Black Butler : bb";
    var DrStone="\n> Dr Stone : ds";
    var DemonSlayer="\n> Demon Slayer/Kimetsu No Yaiba : kny";
    var SNK="\n> Snk : snk";
    var Boruto="\n> Boruto : bor";
    var text = "Pour voir le dernier chapitre ou un chapitre donné:```\n.<manga> [num_chap]"+OnePiece+Mha+BlackButler+DrStone+DemonSlayer+SNK+Boruto+"```";
    var help = "Pour voir la liste des commandes:```\n?h```";
    
    await  message.channel.send("help").then(async(m) => await m.edit(text+help))

};
module.exports.help = {
    name:"h"
}
