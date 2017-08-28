exports.run = async (client, msg) => {
	let prefix = await msg.guild.settings.prefix;
	return msg.sendMessage('_' + msg.guild.name + '_' + ' has set their prefix to `' + prefix + '` or you can mention ' + client.user.toString() + ' with a command after it.');
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'prefix',
	description: 'Don\'t know the current guilds prefix?',
	usage: '',
	usageDelim: '',
};
