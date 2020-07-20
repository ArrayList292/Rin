let Discord = require('discord.js-light');

exports.run = async (client, msg, args, options) => {
    let result = "";
    try {
        result = eval(args.join(" "));
        if (typeof (result) !== "string") result = require("util").inspect(result);
        result = result.replace(new RegExp(client.token, "g"), "*".repeat(client.token.length));
    } catch (e) {
        console.error(e);
        result = e.toString();
    }
    if (result.length > 1024) {
        let maxPage = Math.ceil(result.length / 1000),
            currentPage = 1
        result = result.match(/.{1,1000}/gms);

        let filter = (reaction, user) => {
            return ['⬅', '🚪', '➡'].includes(reaction.emoji.name) && !user.bot && user.id === msg.author.id;
        };

        let evalEmbed = new Discord.MessageEmbed()
            .setTitle("Eval")
            .setColor(9472474)
            .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
            .addField("Output", `\`\`\`js\n${result[0]}\n\`\`\``)
            .setFooter(`[1/${maxPage}]`);

        let message = await msg.channel.send(evalEmbed);
        message.react("⬅").then(() => {message.react("🚪").then(async () => { await message.react("➡").then(() => {
            function awaitReaction() {
                message.awaitReactions(filter, {max: 1, time: 60000, errors: ['time']})
                    .then(collected => {
                        let reaction = collected.first();
                        switch (reaction.emoji.name) {
                            case '⬅':
                                if (currentPage > 1) {
                                    currentPage--;
                                    let newEmbed = new Discord.MessageEmbed()
                                        .setTitle("Eval")
                                        .setColor(9472474)
                                        .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
                                        .addField("Output", `\`\`\`js\n${result[currentPage-1]}\n\`\`\``)
                                        .setFooter(`[${currentPage}/${maxPage}]`);
                                    message.edit(newEmbed);
                                }
                                awaitReaction();
                                break;
                            case '🚪':
                                return message.delete();
                            case '➡':
                                if (maxPage > currentPage) {
                                    currentPage++;
                                    let newEmbed = new Discord.MessageEmbed()
                                        .setTitle("Eval")
                                        .setColor(9472474)
                                        .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
                                        .addField("Output", `\`\`\`js\n${result[currentPage-1]}\n\`\`\``)
                                        .setFooter(`[${currentPage}/${maxPage}]`);
                                    message.edit(newEmbed);
                                }
                                awaitReaction();
                                break;
                        }
                    })
            }

            awaitReaction()
        })})})
    } else {
        let evalEmbed = new Discord.MessageEmbed()
            .setTitle("Eval")
            .setColor(9472474)
            .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
            .addField("Output", `\`\`\`js\n${result}\n\`\`\``);
        msg.channel.send(evalEmbed);
    }
};

exports.config = {
    category: "botOwner",
    powerLevel: 4,
    aliases: []
};