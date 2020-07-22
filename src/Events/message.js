let Discord = require("discord.js-light");

exports.run = async (client, options, cmdArgs) => {
    let checkCanUse = (cI) => {
        let canUse = false;
        if (!cI.config || cI.config && cI.config.powerLevel === 0) canUse = true;
        else if (cI.config && cI.config.powerLevel <= options.functions.checkPerms(msg.member).permissionLevel || options.functions.checkPerms(msg.member).permissionLevel === 4) canUse = true;
        return canUse;
    }

    let msg = cmdArgs[0];
    if (msg.channel.type !== "text" || msg.author.bot || !msg.content.startsWith(options.config.prefix)) return;
    msg.guild = await client.guilds.fetch(msg.guild.id);
    msg.channel = await client.channels.fetch(msg.channel.id);
    msg.member = await msg.guild.members.fetch(msg.member.id);
    msg.author = await client.users.fetch(msg.member.id);
    let error1 = new Discord.MessageEmbed()
        .setDescription("You can't use that command!")
        .setColor(16711681)
        .setTimestamp(Date.now())
        .setAuthor(`Error`, msg.author.displayAvatarURL);

    let commandName = msg.content.split(" ")[0].replace(options.config.prefix, "");
    let args = msg.content.split(" ");
    args.shift();
    if (options.commandList.get(commandName)) {
        let c = options.commandList.get(commandName);
        let cI = c.commandInstance;
        let canUse = checkCanUse(cI);
        if (c.commandName.toLowerCase() === commandName.toLowerCase() && canUse) return c.commandInstance.run(client, msg, args, options);
    } else {
        options.commandList.forEach(c => {
            let cI = c.commandInstance;
            let canUse = checkCanUse(cI);
            if (cI.config && cI.config.aliases) {
                cI.config.aliases.forEach(a => {
                    if (a.toLowerCase() === commandName.toLowerCase()) {
                        if (!canUse) return args[0].channel.send(error1);
                        c.commandInstance.run(client, msg, args, options);
                    }
                })
            }
        });
    }
};
