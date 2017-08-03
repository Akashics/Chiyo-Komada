exports.run = async (client, msg, [...args]) => {
  return msg.send(`All of my source code is stored in a private repository until I am ready to move everything to a production server. Link: https://github.com/Kashalls/Chiyo`);
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
    name: "git",
    description: "Sum1 wants srccode heh.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 