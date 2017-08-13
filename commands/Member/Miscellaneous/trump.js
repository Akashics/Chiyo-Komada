exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
	const embed = new client.methods.Embed()
		.setTitle('Quotes Trump Once Said.')
		.setColor(msg.guild.member(client.user.id).highestRole.color || 0)
		.setTimestamp()
		.setDescription('From the Big Man himself!')
		.setThumbnail('http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/presidential_reading_level/img/trump.png')
		.addField('Trump:', `${req.data.message}`);
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