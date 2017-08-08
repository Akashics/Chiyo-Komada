exports.run = async (client, msg, [...args]) => {
    let rand = 1 + Math.floor(Math.random() * 100);
        let result;
        if (rand > 50) {
            result = "Heads";
        } else {
            result = "Tails";
        }
        return msg.send("<:coin:338772726712107008>" + ` | Your result is ${result}.`);
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
    name: "coinflip",
    description: "50/50 Chance, unless it stands on the side.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 