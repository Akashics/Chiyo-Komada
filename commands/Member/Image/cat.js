exports.run = async (client, msg, [...args]) => {
    try {
        const snekfetch = require('snekfetch');
        let url = 'http://random.cat/meow';
        let req = await snekfetch.get(url);
        return msg.channel.send({ files: [`${req.body.file}`] });
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
    name: "cat",
    description: "You wanted a cat, right?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 