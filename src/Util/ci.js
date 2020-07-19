/*
THIS FILE WAS BUILT FOR CI TO TEST IF THE SOURCE IS FUNCTION CORRECTLY.
*/

require("dotenv").config();

let Discord = require("discord.js-light"),
    main = require("../main.js"),
    client = new Discord.Client({disableMentions : "everyone"});

client.on("debug", (debug) => {
    let censoredToken = debug.split(" ")[2].replace(/\*/g, "");
    if (process.env.BOT_TOKEN.startsWith(censoredToken)) debug = debug.replace(censoredToken+"*".repeat(process.env.BOT_TOKEN.length-censoredToken.length), "*".repeat(process.env.BOT_TOKEN.length));
    console.log("[DEBUG] " + debug);
});

client.on("ready", () => {
    main = null;
    console.log("[CI] Sending a test webhook.")
    let webhook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);
    webhook.send("CI's Webhook Test", {
            username: client.user.username,
            avatarURL: client.user.avatarURL({dynamic: true, size: 4096})
        }).then(() => {
            client = null;
            console.log("[CI] Test successfully, Exiting with status code: 0")
            process.exit(0);
        }).catch((e) => {
        console.error(e);
        client = null;
        console.log("[CI] Test unsuccessfully, Exiting with status code: 1")
        return process.exit(1);
    });
});

client.on("error", () => {
    console.log("[CI] Test unsuccessfully, Exiting with status code: 1")
    process.exit(1);
})


client.login(process.env.BOT_TOKEN);