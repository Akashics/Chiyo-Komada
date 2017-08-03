exports.run = async (client, msg, [...args]) => {
    return msg.send(`Hi @${message.author.id}, if you need support with anything Discord related or with Chiyo, you can ask in Chiyo's Academy. https://discord.gg/wQhqGyx`);
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
    name: "support",
    description: "So you need some help.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 