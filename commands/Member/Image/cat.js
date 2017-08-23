exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get('http://random.cat/meow');
	return msg.channel.send({ files: [`${req.data.file}`] });
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['cats', 'gimmecats'],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'cat',
	description: 'You wanted a cat, right? This command is for you.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 