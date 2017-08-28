exports.run = async (client, msg) => {
	const slots = [':grapes:', ':tangerine:', ':pear:', ':cherries:', ':lemon:'];
	const { stripIndents } = require('common-tags');

	const slotOne = slots[Math.floor(Math.random() * slots.length)];
	const slotTwo = slots[Math.floor(Math.random() * slots.length)];
	const slotThree = slots[Math.floor(Math.random() * slots.length)];
	if (slotOne === slotTwo && slotOne === slotThree) {
		return msg.send(stripIndents`
            ${slotOne}|${slotTwo}|${slotThree}
            Wow! You won! Great job... er... luck!
        `);
	} else {
		return msg.send(stripIndents`
            ${slotOne}|${slotTwo}|${slotThree}
            Aww... You lost... Guess it's just bad luck, huh?
        `);
	}
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
	name: 'slots',
	description: 'Play a game of slots.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};