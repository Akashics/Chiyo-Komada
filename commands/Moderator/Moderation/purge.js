exports.run = async (client, msg, args) => {
	if (count > 100 && count < 0) return msg.send('You need to provide a value between 1 and 99.')
	const { count } = args;
	try {
		const messages = await msg.channel.fetchMessages({ limit: count + 1 });
		await msg.channel.bulkDelete(messages, true);
		return null;
	} catch (err) {
		return msg.send('There are no messages younger than two weeks that can be deleted.');
	}
};

exports.help = {
	name: 'prune',
	description: 'Deletes up to 99 messages from the current channel.',
	usage: '<count:integer>',
	usageDelim: ' ',
};

exports.conf = {
	enabled: true,
	runIn: ['text', 'dm', 'group'],
	selfbot: false,
	aliases: [],
	permLevel: 2,
	botPerms: ['MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY'],
	requiredFuncs: [],
	requiredModules: [],
};
