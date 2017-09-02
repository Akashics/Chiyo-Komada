exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
	const embed = new client.methods.Embed()
		.setTitle('Random Trump Quote')
		.setColor(msg.guild.member(client.user.id).highestRole.color || 0)
		.setTimestamp()
		.setDescription('_Requested by ' + msg.author.tag + '_')
		.setThumbnail('https://www.bloomberg.com/graphics/2017-comey-vs-trump/img/trump.png')
		.addField('\u200b', `${req.data.message}`);
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
	name: 'trump',
	description: 'He said something about missing emails?..',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 