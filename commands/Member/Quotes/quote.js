exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get('https://talaikis.com/api/quotes/random/');
	const embed = new client.methods.Embed()
		.setTitle('Random Quote')
		.setColor(msg.guild.member(client.user.id).highestRole.color || 0)
		.setTimestamp()
		.setDescription('_Requested by ' + msg.author.tag + '_')
		.setThumbnail('http://www.freeiconspng.com/uploads/quotes-png-11.png')
		.addField('\u200b', `${req.data.quote} – _${req.data.author}_`);
	return msg.channel.send({ embed: embed });
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'quote',
	description: 'Finds a random quote.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 