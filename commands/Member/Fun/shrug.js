exports.run = async (client, msg, [...args]) => {
    return msg.send("¯\\_(ツ)_/¯")

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
    name: "shrug",
    description: "¯\\_(ツ)_/¯",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};