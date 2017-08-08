exports.run = async (client, msg, [...args]) => {
        const snekfetch = require('snekfetch');
        let url = `https://rra.ram.moe/i/r?type=${exports.help.name}`;
        let req = await snekfetch.get(url);
        let path = req.body.path.replace('/i/', '');
        return msg.channel.send({ files: [`https://cdn.ram.moe/${path}`] });
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
    name: "kiss",
    description: "Does someone need a kiss?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 