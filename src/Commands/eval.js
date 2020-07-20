let Discord = require('discord.js-light');

exports.run = async (client, msg, args, options) => {
    let result = "";
    try {
        result = (await eval(args.join(" "))).toString().replace(new RegExp(client.token, "g"), "*".repeat(client.token.length));
    } catch (e) {
        result = e.toString();
    }

    let evalEmbed = new Discord.MessageEmbed()
        .setTitle("Eval")
        .setColor(9472474)
        .addField("Input", `\`${args.join(" ")}\``)
        .addField("Output", `\`${result}\``);
    msg.channel.send(evalEmbed);
};

exports.config = {
    category: "botOwner",
    powerLevel: 4,
    aliases: []
};