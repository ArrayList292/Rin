let Discord = require('discord.js-light');

exports.run = (client, msg, args, options) => {

    let error1 = new Discord.MessageEmbed()
        .setAuthor("Error!", msg.author.avatarURL())
        .setDescription("I am not currently playing any song.")
        .setTimestamp(Date.now())
        .setColor(16711681);

    if (!options.queue.get(msg.guild.id)) return msg.channel.send(error1);

    let data = [];
    let number = 0;

    options.queue.get(msg.guild.id).musics.forEach(d => {
        number++;
       data.push(`${number}. ${d.title} [${d.duration.seconds === 0 ? "LIVE" : d.duration.timestamp}]`);
    });

    let embedPage = new (options.maker.embedMaker)(data);
    embedPage.setTitle("Current Queue");
    embedPage.setFooter(msg.author.tag);
    embedPage.setColor(9472474);
    embedPage.setAuthor(msg.author);

    embedPage.start(msg.channel);

};

exports.config = {
    category: "music",
    powerLevel: 0,
    aliases: ["q"]
};