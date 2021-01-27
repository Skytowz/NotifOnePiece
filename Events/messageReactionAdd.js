const Discord = require("discord.js");
const message = require("./message");
const prefix = "&";
let explosion = false ;

module.exports = async (client, messageReaction, user) => {
	if (messageReaction.partial) {
		try {
			await messageReaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			return;
		}
	}

    if(messageReaction.message.embed && messageReaction.count == 8){
        if(messageReaction.emoji.name == '👍')
            messageReaction.message.react('✅');
        if(messageReaction.emoji.name == '👎')
            messageReaction.message.react('❌');

    }
}