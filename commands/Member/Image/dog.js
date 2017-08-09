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
	description: 'Must not be a cat person, huh?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 