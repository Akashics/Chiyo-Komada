exports.run = async (client, msg) => {
	return msg.send(`Hi @${msg.author.toString()}, if you need support with anything Discord related or with Chiyo, you can ask in Chiyo's Academy. https://discord.gg/V7whPwb`);
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
	name: 'support',
	description: 'So you need some help.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 