exports.run = async (client, msg, [user, count]) => {
	let messages = await msg.channel.fetchMessages({ limit: 100 });
	if (user && user !== 'everyone') {
		messages = messages.filter(m => m.author.id === user.id);
	} else if (!user) {
		messages = messages.filter(m => m.author.id === client.user.id);
	}
	msg.channel.send(`Sucessfully removed: ${messages.array().slice(0, count).filter(m => m.deletable).map(m => m.delete()).length} message(s) from ${user || client.user.username}`);
};

exports.help = {
	name: 'prune',
	description: 'Prunes a mentioned user, the bot, or everyone.',
	usage: '[user:user|everyone:literal] <count:integer>',
	usageDelim: ' ',
};

exports.conf = {
	enabled: true,
	runIn: ['text', 'dm', 'group'],
	selfbot: false,
	aliases: [],
	permLevel: 2,
	botPerms: ['MANAGE_MESSAGES'],
	requiredFuncs: [],
	requiredModules: [],
};
