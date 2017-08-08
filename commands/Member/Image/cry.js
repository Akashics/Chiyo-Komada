exports.run = async (client, msg, [...args]) => {
    try {
        const snekfetch = require("snekfetch");
        let url = `https://rra.ram.moe/i/r?type=${exports.help.name}`;
        let req = await snekfetch.get(url);
        let path = req.body.path.replace("/i/", "");
        return msg.channel.send({ files: [`https://cdn.ram.moe/${path}`] });
    } catch (e) {
        Raven.captureException(e);
    }

}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    cooldown: 3,
};

exports.help = {
    name: "cry",
    description: "Seems like rem is mad.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 