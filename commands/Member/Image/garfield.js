exports.run = async (client, msg, [...args]) => {
    const moment = require('moment');

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let year = random(1990, 2016);
    let day = random(0, 366);
    let date = moment().year(year).dayOfYear(day);
    let dateFormat = date.format('YYYY-MM-DD');
    let dateYear = date.year();
    return msg.channel.send({ files: [`https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${dateYear}/${dateFormat}.gif`] });

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
    name: "garfield",
    description: "Grabs a Garfield Comic. What else?",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 