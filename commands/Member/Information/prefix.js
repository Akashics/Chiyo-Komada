exports.run = async (client, msg) => {

	return msg.sendMessage(msg.guild.name + '\'s has set their prefix to ' + msg.guild.settings.modLog + ' or you can mention ' + client.user.toString());
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'whatsmyprefix',
	description: 'Don\'t know the current guilds prefix?',
	usage: '',
	usageDelim: '',
};
