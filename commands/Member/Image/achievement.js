exports.run = async (client, msg, args) => {
	if (args.length > 25) return msg.send('Please limit the text to under 25 characters.');
	const snekfetch = require('snekfetch');
	const { text } = args;
	const { body } = await snekfetch
		.get('https://www.minecraftskinstealer.com/achievement/a.php')
		.query({
			i: 1,
			h: 'Achievement Get!',
			t: text
		});
	return msg.send({ files: [{ attachment: body, name: 'achievement.png' }] });
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
	name: 'achievement',
	description: 'Sends a Minecraft achievement with the text of your choice.',
	usage: '<text:string>',
	usageDelim: '',
	extendedHelp: '',
};