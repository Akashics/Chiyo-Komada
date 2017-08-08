exports.run = async (client, msg, [...args]) => {
    var total = 0;
    var final_level;
    for (let lvl = 10; lvl > 0; lvl--) {
        if (client.funcs.checkPerms(client, msg, lvl)) {
            total = lvl;
            break;
        }
    }

    switch (total) {
        case 2:
            final_level = "2 | **Guild Moderator**";
            break;
        case 3:
            final_level = "3 | **Guild Administrators**";
            break;
        case 4:
            final_level = "4 | **Guild Owner**";
            break;
        case 7:
            final_level = "7 | **Chiyo Support**";
            break;
        case 10:
            final_level = "10 | **Bot Owner**";
            break;
        default:
            final_level = "0 | **Guild Member**";
            break;
    }
    return msg.channel.send(`${msg.author.tag}'s current permission level is ${final_level}.`);

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
    name: "permlevel",
    description: "Show off your snazzy permission level!",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};