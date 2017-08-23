exports.run = async (client, msg) => {
	const axios = require('axios');
	let req = await axios.get('http://random.dog/woof');
	return msg.channel.send({ files: [`http://random.dog/${req.data}`] });
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['puppy', 'doggies'],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'dog',
	description: 'Grabs a random dog image from the interwebs.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 