exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get(`https://rra.ram.moe/i/r?type=${exports.help.name}`);
	let path = req.data.path.replace('/i/', '');
	return msg.channel.send({ files: [`https://cdn.ram.moe/${path}`] });
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
	name: 'hug',
	description: 'Does someone need a hug?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 