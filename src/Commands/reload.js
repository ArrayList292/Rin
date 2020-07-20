let Discord = require('discord.js-light'),
    parse = require('yargs-parser');

exports.run = async (client, msg, args, options) => {
    if (args.length === 0) return msg.reply("Please specify flags.");
    let flags = parse(args);
    if (flags.c || flags.command) {
        msg.channel.send("Reloading commands.");
        try {
            options.functions.reloadCommand();
            msg.channel.send("Reloaded commands.");
        } catch (e) {
            console.error(e);
            msg.channel.send("Error while reloading commands.");
        }
    }
    if (flags.e || flags.event) {
        msg.channel.send("Reloading events.");
        try {
            options.functions.reloadEvent();
            msg.channel.send("Reloaded events.");
        } catch (e) {
            console.error(e);
            msg.channel.send("Error while reloading events.");
        }
    }
    if (flags.q || flags.queue) {
        msg.channel.send("Reloading queue.");
        try {
            options.queue.clear();
            msg.channel.send("Reloaded queue");
        } catch (e) {
            console.error(e);
            msg.channel.send("Error while reloading queue");
        }
    }
}

exports.config = {
    category: "botOwner",
    powerLevel: 4,
    aliases: []
};