let Discord = require("discord.js-light");

exports.run = (client, msg, args, options) => {

    let helpEmbed = new Discord.MessageEmbed()
        .setColor(9472474)
        .setTimestamp(Date.now())
        .setAuthor("Help menu!", msg.author.avatarURL())
        .addField("**Advertisement**", `${options.commandList.filter(c => c.config && c.config.category.toLowerCase() === "advertisement").map(c => `**${options.config.prefix}${c.commandName}**`).join("\n")}`, true)
        .addField("**Music**", `${options.commandList.filter(c => c.config && c.config.category.toLowerCase() === "music").map(c => `**${options.config.prefix}${c.commandName}**`).join("\n")}`, true)
        .addField("**Information**", `${options.commandList.filter(c => c.config && c.config.category.toLowerCase() === "information").map(c => `**${options.config.prefix}${c.commandName}**`).join("\n")}`, true);

    msg.channel.send(helpEmbed);
};

exports.config = {
    category: "information",
    powerLevel: 0,
    aliases: ["h"]
};