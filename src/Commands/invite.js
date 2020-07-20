let Discord = require('discord.js-light'),
    parse = require('yargs-parser');

exports.run = async (client, msg, args, options) => {
    let inviteEmbed = new Discord.MessageEmbed()
        .setTitle("Hey there!")
        .setColor(9472474)
        .setDescription("[Thanks for inviting me!](https://discordapp.com/oauth2/authorize?client_id=732807386414317658&scope=bot&permissions=70643009)");
    msg.channel.send(inviteEmbed);
}

exports.config = {
    category: "advertisement",
    powerLevel: 0,
    aliases: ["i"]
};