let moment = require("moment");

exports.run = (client, options, cmdArgs) => {
    client.startDate = moment();
    console.log(`[Client] Ready! Logged in as ${client.user.tag}`);
    let status = [`music | ${options.config.prefix}`, `${client.users.cache.array().length - 2} users! | ${options.config.prefix}`];
    function changeStatus() {
        let statusType = Math.floor(Math.random() * 2) + 1;
        if (statusType === 2) {
            client.user.setPresence({
                status: "idle",
                activity: {
                    name: status[Math.floor(Math.random() * status.length)],
                    type: "LISTENING",
                }
            });
        } else {
            client.user.setPresence({
                status: "idle",
                activity: {
                    name: `music on ${options.queue.size ? options.queue.size : 0} ${options.queue.size <= 1 || !options.queue.size ? "guild" : "guilds"}. | ${options.config.prefix}`,
                    type: "PLAYING"
                }
            });
        }
    }
    changeStatus();
    setInterval(() => changeStatus(), 2500);
};