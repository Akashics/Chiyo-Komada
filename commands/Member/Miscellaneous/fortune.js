exports.run = async (client, msg, [...args]) => {
    const snekfetch = require('snekfetch');
    let req = await snekfetch.get('http://www.yerkee.com/api/fortune');
    const embed = new client.methods.Embed()
        .setTitle(`Random Fortune Generator`)
        .setColor(msg.guild.member(client.user.id).highestRole.color || 0)
        .setTimestamp()
        .setDescription(``)
        .setThumbnail('https://vignette4.wikia.nocookie.net/clubpenguin/images/b/bc/Emoticons_Fortune_Cookie_Card_Jitsu_Party_2013.png/revision/latest?cb=20130524131112')
  .addField('\u200b', '\u200b')
        .addField(`Fortune:`, `${req.body.fortune}`)
    return msg.channel.send({ embed: embed });

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
    name: "fortune",
    description: "Get your fortunes here!",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 