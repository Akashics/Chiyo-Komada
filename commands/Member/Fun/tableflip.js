exports.run = async (client, msg) => {
	return msg.send('(╯°□°）╯︵ ┻━┻');

};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'tableflip',
	description: 'The table didn\'t do anything to you!',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};