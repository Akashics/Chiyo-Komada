exports.run = async (client, msg, [...args]) => {
    const snekfetch = require('snekfetch');
    let url = `http://catgirls.brussell98.tk/api/random`;
    let req = await snekfetch.get(url);
    return msg.channel.send({ files: [`${req.body.url}`] });
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
    name: "neko",
    description: "Nekos, what else?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 