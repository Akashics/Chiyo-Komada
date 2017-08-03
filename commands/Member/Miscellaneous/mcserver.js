exports.run = async (client, msg, [...args]) => {
    let searchQuery = msg.content.substring(client.settingGateway.get(msg.guild).prefix.length + exports.help.name.length + 1);
    if (!searchQuery) return msg.channel.send(':cloud: I need a server to query up.');
    let res = searchQuery.split(' ');
    console.log(res)
    if (res[2]) return msg.send(':x: You sent too many values. Please only send the IP and Port Number!')
    const snekfetch = require('snekfetch');
    if (!res[1]) {
        let req = await snekfetch.get('https://use.gameapis.net/mc/query/info/' + res[0] + ':25565/');
        console.log(req.body)

    } else {
        let req = await snekfetch.get('https://use.gameapis.net/mc/query/info/' + res[0] + ':' + res[1]);
        console.log(req)
    }


    /*let req = await snekfetch.get('https://use.gameapis.net/mc/query/status/');
    const embed = new client.methods.Embed()
        .setTitle(`Random Trump Quotes`)
        .setColor(msg.guild.member(client.user.id).highestRole.color || 0)
        .setTimestamp()
        .setDescription(``)
        .setThumbnail('http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/presidential_reading_level/img/trump.png')
        .addField('\u200b', '\u200b')
        .addField(`Trump:`, `${req.body.message}`)
    return msg.channel.send({ embed: embed });*/

}

exports.conf = {
    enabled: false,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    cooldown: 3,
};

exports.help = {
    name: "mcserver",
    description: "Get status on your favorite Minecraft Server!",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 