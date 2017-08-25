exports.run = async (client, msg) => {
	return msg.send('¯\\_(ツ)_/¯');
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
	name: 'shrug',
	description: '¯\\_(ツ)_/¯',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};