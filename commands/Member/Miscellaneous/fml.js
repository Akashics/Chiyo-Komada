exports.run = async (client, msg, [...args]) => {
  const request = require('snekfetch');
const HTMLParser = require('fast-html-parser');
  const res = await request.get('http://www.fmylife.com/random');
  const root = HTMLParser.parse(res.text);
  const article = root.querySelector('.block a');
  const downdoot = root.querySelector('.vote-down');
  const updoot = root.querySelector('.vote-up');
  const embed = new client.methods.Embed()
    .setTitle(`Requested by: ${msg.author.username}`)
    .setAuthor('FML Stories')
    .setColor(msg.guild.member(client.user.id).highestRole.color || 0)
    .setTimestamp()
    .setDescription(`_${article.childNodes[0].text}\n\n_`)
    .addField('I agree, your life sucks', updoot.childNodes[0].text, true)
    .addField('You deserved it:', downdoot.childNodes[0].text, true);
  if (article.childNodes[0].text.length < 5 ) {
    return msg.channel.send('Today, something went wrong, so you will have to try again in a few moments. FML again.');
  }
  return msg.channel.send({embed});

}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["fuckmylife", "fuckme"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    cooldown: 3,
};

exports.help = {
    name: "fml",
    description: "Get your stories here!",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 