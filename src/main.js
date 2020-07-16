require("dotenv").config();

let Discord = require("discord.js"),
    client = new Discord.Client({disableMentions : "everyone"}),
    permissionConfig = require("./permissionConfig"),
    config = require("./config.json"),
    ytdl = require("ytdl-core"),
    fs = require("fs"),
    glob = require("glob"),

/*
Register All Collection
*/

commandList = new Discord.Collection(),
queue = new Discord.Collection();

/*
Start Of Register Functions
*/

class Function {

    checkPerms(member) {
        if (!member instanceof Discord.GuildMember) return;
        if (config.ownerList.length === 1 && config.ownerList[0] === member.user.id || config.ownerList.length > 1 && config.ownerList.includes(member.user.id)) {
            return permissionConfig["4"];
        } else if (Object.keys(permissionConfig).length <= 1) {
            return permissionConfig["0"];
        } else if (member.permissions.has("ADMINISTRATOR")) {
            return permissionConfig["2"];
        } else {
            let perms;
            for (perms in permissionConfig) {
                let allowedPermissionCount = 0;
                let deniedPermissionCount = 0;
                if (perms.permission) {
                    perms.permission.forEach(p => {
                        if (member.permissions.has(p.toUpperCase())) allowedPermissionCount++;
                        else deniedPermissionCount--;
                    });
                    if (allowedPermissionCount > deniedPermissionCount) return perms;
                }
            }
            return permissionConfig["0"];
        }
    }

    playMusic(guild) {
        if (!queue.get(guild.id) || queue.get(guild.id).size === 0) return;
        let data = queue.get(guild.id);
        let dispatcher = data.voiceConnection.play(
            ytdl(data.musics[0].url, {
                quality: "highestaudio"
            })
        );

        dispatcher.setVolume(0.3)

        let playEmbed = new Discord.MessageEmbed()
            .setColor(9472474)
            .setTimestamp(Date.now())
            .setAuthor(`Now playing`, data.musics[0].message.author.avatarURL())
            .setThumbnail(data.musics[0].image)
            .addField("Music Name", data.musics[0].title, true)
            .addField("Author", data.musics[0].author.name, true)
            .addField(
                "Duration",
                data.musics[0].duration.timestamp === "0"
                    ? "LIVE"
                    : data.musics[0].duration.timestamp,
                true
            )
            .addField(`Link`, `[Here!](${data.musics[0].url})`, true)
            .setFooter(`Requested by ${data.musics[0].message.author.tag}!`);
        data.channel.send(playEmbed);

        data.dispatcher = dispatcher;

        dispatcher.on("finish", (reason) => {
            if (queue.get(guild.id) !== undefined && queue.get(guild.id).loop) {
                queue.get(guild.id).musics[queue.get(guild.id).musics.length] = queue.get(guild.id).musics[0];
                queue.get(guild.id).musics.shift();
                this.playMusic(guild);
            } else if (queue.get(guild.id) !== undefined && queue.get(guild).musics.length > 1) {
                queue.get(guild.id).musics.shift();
                this.playMusic(guild);
            } else {
                queue.delete(guild.id);
                dispatcher.player.voiceConnection.disconnect();
            }
        });
    }
}

/*
End Of Registering Function
*/

/*
Register Options And Makers
*/

let makers = {
    embedMaker: require("./Maker/pageEmbed.js")
};

let options = {
    commandList: commandList,
    queue: queue,
    config: config,
    maker: makers,
    functions: new Function
};

/*
Start Of Event Manager
*/

if (!fs.existsSync("./Events")) fs.mkdirSync("./Events");
else glob("./Events/*.js", (err, res) => {
    if (err) return console.error(err);
    let eventAmount = res.length,
        x = 0;
    if (eventAmount === 0) return;
    console.log(`[EventManager] Found ${eventAmount} events!`);
    res.forEach(e => {
        let event = require(e);
        let eventName = e.replace("./Events/", "").replace(".js", "");
        if (!event.run) return console.log(`[EventManager] Event "${eventName}" doesn't have main function, Unloading it.`);
        client.on(eventName, (...args) => {
            event.run(client, options, args)
        });
        x++;
        console.log(`[EventManager] Event "${eventName}" has been loaded. (${x}/${eventAmount})`);
    })
});

/*
End Of Event Manager
*/

/*
Start Of Command Manager
*/

if (!fs.existsSync("./Commands")) fs.mkdirSync("./Commands");
else glob("./Commands/*.js", (err, res) => {
    if (err) return console.error(err);
    let commandAmount = res.length,
        x = 0;
    if (commandAmount === 0) return;
    console.log(`[CommandManager] Found ${commandAmount} commands!`);
    res.forEach(c => {
        let command = require(c);
        let commandName = c.replace("./Commands/", "").replace(".js", "");
        if (!command.run) return console.log(`[CommandManager] Command "${commandName}" doesn't have main function, Unloading it.`);
        x++;
        let commandData = {
            commandName: commandName,
            commandInstance: command,
            commandPath: "." + c
        };
        if (command.config) {
            if (command.config.aliases) commandData.aliases = command.config.aliases;
            commandData.config = command.config;
        }
        commandList.set(commandName.toLowerCase(), commandData);
        console.log(`[CommandManager] Command "${commandName}" has been loaded. (${x}/${commandAmount})`);
    })
});

/*
End Of Command Manager
*/

//require("./Util/keepAlive.js");

/*
Login
*/

client.login(process.env.bot_token);