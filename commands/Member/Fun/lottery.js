exports.run = async (client, msg) => {
	const lottery = Math.floor(Math.random() * 100) + 1;
	if (lottery === 1) return msg.reply('Wow! You had a 1 in 100 chance! Great job!');
	return msg.send(`Sorry ${msg.author.toString()}, you didn't win.`);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 10,
};

exports.help = {
	name: 'lottery',
	description: 'Attempt to win the lottery, with a 1 in 100 chance of winning.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};