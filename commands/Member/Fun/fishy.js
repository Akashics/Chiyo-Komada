exports.run = async (client, msg) => {
	const fishes = [':fish:', ':tropical_fish:', ':blowfish:', ':wrench:'];
	const fish = fishes[Math.floor(Math.random() * fishes.length)];
	return msg.send(`:fishing_pole_and_fish: You caught a ${fish}`);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'fishy',
	description: 'Seems fishy :/',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};