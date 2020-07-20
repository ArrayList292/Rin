let Discord = require('discord.js-light'),
    parse = require('yargs-parser');

exports.run = async (client, msg, args, options) => {
    let supportEmbed = new Discord.MessageEmbed()
        .setTitle("Hey there!")
        .setColor(9472474)
        .addField("You can support me", "[here](https://www.patreon.com/hayper)", true)
        .addField("You can join the support server", "[here](https://discord.gg/kpMyn55)", true)
    msg.channel.send(supportEmbed);
}

exports.config = {
    category: "advertisement",
    powerLevel: 0,
    aliases: []
};