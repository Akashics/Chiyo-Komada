exports.run = async (client, msg, [...args]) => {
    const snekfetch = require("snekfetch");
    let req = await snekfetch.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    const embed = new client.methods.Embed()
        .setTitle(`Random Trump Quotes`)
        .setColor(msg.guild.member(client.user.id).highestRole.color || 0)
        .setTimestamp()
        .setDescription(``)
        .setThumbnail("http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/presidential_reading_level/img/trump.png")
  .addField("\u200b", "\u200b")
        .addField(`Trump:`, `${req.body.message}`)
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
    name: "trumpquote",
    description: "He said something about missing emails?..",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 