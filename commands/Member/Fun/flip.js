exports.run = async (client, msg) => {
	var flip = require('flipacoin');
	let result = flip();
	return msg.send('<:coin:338772726712107008>' + ` We flipped a coin and got ${result}s.`);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['coinflip', 'coin'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'flip',
	description: 'Heads or Tails?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 