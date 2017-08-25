exports.run = async (client, msg) => {
	const lottery = Math.floor(Math.random() * 100) + 1;
	if (lottery === 1) return msg.reply('Wow! You actually won! Great job!');
	return msg.reply('Nope, sorry, you lost.');
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
	name: 'lottery',
	description: 'Attempt to win the lottery, with a 1 in 100 chance of winning.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};