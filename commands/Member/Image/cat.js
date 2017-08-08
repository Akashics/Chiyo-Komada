exports.run = async (client, msg, [...args]) => {
    const snekfetch = require("snekfetch");
    let req = await snekfetch.get("http://random.cat/meow");
    return msg.channel.send({ files: [`${req.body.file}`] });
};

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
    name: "cat",
    description: "You wanted a cat, right?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 