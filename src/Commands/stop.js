let Discord = require('discord.js');

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
        .setDescription("I have stopped the music.")
        .setColor(9472474)
        .setTimestamp(Date.now())
        .setAuthor(`Success!`, msg.author.avatarURL());

    msg.channel.send(success1);
    let dispatcher = options.queue.get(msg.guild.id).dispatcher;
    options.queue.delete(msg.guild.id);
    dispatcher.end();
};

exports.config = {
    category: "music",
    powerLevel: 0
};