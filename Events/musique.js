const Discord = require('discord.js');
const pref = "m!";
const ytld = require('ytdl-core');
module.exports = async(client,message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const serverQueue = queue.get(message.guild.id);

    if(message.constent.startsWith(`${pref}play`)) {
        execute(message, serverQueue);
        return;
    } else if(message.constent.startsWith(`${pref}skip`)) {
        skip(message, serverQueue);
    } else if(message.constent.startsWith(`${pref}stop`)) {
        stop(message, serverQueue);
        return;
    } else {
        message.channel.send('You need to enter a valid command') 
    }
    const queue = new Map();
    async function execute(message, serverQueue) {
        const args = message.content.split(' ');
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to play music');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT') || !permissions.has('SPEAK')){
            return message.channel.sned('I need teh permissions to join and speak in your voice channel');
       } 
        switch (args[1]){
            case '1':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=107yRkr2qNo');
                break;
            case '2': 
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=2U3o7AdHcEY'); 
                break;
            case '3':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=xpl6KQVHTeM');
                break;
            case '4':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=lZylQYE6YmU');
                break;
            case '5':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=cURxThkrckQ');
                break;
            case '6':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=s5ThzR0Ii8A');
                break;
            case '7':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=9FJAfEg6o2g');
                break;
            case '8':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=U-1rNzn1w6o');
                break;
            case '9':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=o7sZWSVH37g');
                break;
            case '10':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=CFM_zypYFHM');
                break;
            case '11':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=uDgUyDZGRdI');
                break;
            case '12':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=eS0hCgXMnT4');
                break;
            case '13':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=8_92ErLH5s4');
                break;
            case '14':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=1xXNzI3STaI');
                break;
            case '15':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=QFxJofWHp1U');
                break;
            case '16':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=cZsj0dTTmy8');
                break;
            case '17':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=_igCAG8yS7g');
                break;
            case '18':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=wwCDFIuT6AY');
                break;
            case '19':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=6N5PM0iqSDA');
                break;
            case '20':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=Oo52vQyAR6w');
                break;
            case '21':
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=t7xHamn5inQ');
                break;
            default:
                var songInfo = await ytld.getInfo('https://www.youtube.com/watch?v=PwVT67T5Xt4');
                
            }
            const song = {
                title: songInfo.title,
                url: songInfo.video_url,
            };
            if(!serverQueue) {

            }else{
                serverQueue.song.push(song);
                console.log(serverQueue.songs);
                return message.channel.send(`${song.title} has been added to the queue!`);
            }
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            };
            queue.set(message.guild.id, queueConstruct);
            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(message.guild, queueConstruct.song[0]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }          
    }
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if(!song){
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    }
    const dispatcher = serverQueue.connection.playStream(ytld(song.url))
    .on('end', () =>{
        console.log('Music ended!');
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on('error', error =>{
        console.log(error);
    });
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    function skip(message, serverQueue) {
        if(!message.memeber.voiceChannel) return message.channel.send('You have to be in a voice channel to skip song!');
        if(!serverQueue) return message.channel.send('There is no song that I could skip!');
        serverQueue.connection.dispatcher.end();
    }
    function stop(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    
}
