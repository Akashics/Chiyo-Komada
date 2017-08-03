exports.run = async (client, msg, [...args]) => {
    try {
        const snekfetch = require('snekfetch');
        let url = 'http://random.dog/woof';
        let req = await snekfetch.get(url);
        return msg.channel.send({ files: [`http://random.dog/${req.body}`] });
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
    name: "dog",
    description: "Must not be a cat person, huh?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 