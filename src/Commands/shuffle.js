let Discord = require('discord.js-light');

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

exports.run = (client, msg, args, options) => {

    let error1 = new Discord.MessageEmbed()
        .setDescription("I am not currently playing any song.")
        .setColor(16711681)
        .setTimestamp(Date.now())
        .setAuthor(`Error!`, msg.author.avatarURL());

    let error2 = new Discord.MessageEmbed()
        .setDescription("You're not on the same channel as me!")
        .setColor(16711681)
        .setTimestamp(Date.now())
        .setAuthor(`Error!`, msg.author.avatarURL());

    if (!options.queue.get(msg.guild.id)) { return msg.channel.send(error1); }

    if(msg.member.voice.channel.id == null || options.queue.get(msg.guild.id).voiceConnection.channel.id == null || options.queue.get(msg.guild.id).voiceConnection.channel.id !== msg.member.voice.channel.id) { return msg.channel.send(error2); }

    let success1 = new Discord.MessageEmbed()
        .setDescription("Shuffled the queue!")
        .setColor(9472474)
        .setTimestamp(Date.now())
        .setAuthor(`Success!`, msg.author.avatarURL());

    msg.channel.send(success1);

    let tempData = options.queue.get(msg.guild.id).musics[0];
    options.queue.get(msg.guild.id).musics.shift();
    options.queue.get(msg.guild.id).musics = shuffle(options.queue.get(msg.guild.id).musics);
    options.queue.get(msg.guild.id).musics.unshift(tempData);
};

exports.config = {
    category: "music",
    powerLevel: 0,
    aliases: ["shuf"]
};