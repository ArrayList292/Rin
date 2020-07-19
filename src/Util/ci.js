/*
THIS FILE WAS BUILT FOR CI TO TEST IF THE SOURCE IS FUNCTION CORRECTLY.
*/

require("dotenv").config();

let Discord = require("discord.js-light"),
    main = require("../main.js"),
    client = new Discord.Client({disableMentions : "everyone"});

client.on("debug", (debug) => {
    let censoredToken = debug.split(" ")[2].replace(/\*/g, "");
    if (process.env.bot_token.startsWith(censoredToken)) debug = debug.replace(censoredToken+"*".repeat(process.env.bot_token.length-censoredToken.length), "*".repeat(process.env.bot_token.length));
    console.log("[DEBUG] " + debug);
});

client.on("ready", async () => {
    main = null;
    try {
        let webhook = new Discord.WebhookClient(process.env.webhookID, process.env.webhookToken);
        await webhook.send("This is for CI testing purpose.", {
            username: client.user.username,
            avatarURL: client.user.avatarURL({dynamic: true, size: 4096})
        });
        client = null;
        process.exit(0);
    } catch (e) {
        console.error(e);
        client = null;
        return process.exit(1);
    }
});

client.on("error", (err) => {
    throw new Error(err);
})


client.login(process.env.bot_token);