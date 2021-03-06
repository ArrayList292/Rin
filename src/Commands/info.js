let Discord = require('discord.js-light'),
    os = require("os");

exports.run = (client, msg, args, options) => {

    let osType = {
        "Linux": "Linux",
        "Darwin": "macOS",
        "Windows_NT": "Windows"
    };

    let informationEmbed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username}'s Information!`, client.user.avatarURL())
        .setColor(9472474)
        .addField(`Numbers!`,`Guilds : ${client.guilds.cache.array().length}\nCommands : ${options.commandList.size} commands\nPlaying music on : ${options.queue.size ? options.queue.size : 0} guilds`, true)
        .addField(`System!`, `OS : ${osType[os.type()]}\nRAM : ${Math.round((process.memoryUsage().heapTotal/1000000))}mb/${Math.round((os.totalmem-((os.totalmem()-process.memoryUsage().heapTotal)-os.freemem()))/1000000)}mb`, true);
    msg.channel.send(informationEmbed);
};

exports.config = {
    category: "information",
    powerLevel: 0
};