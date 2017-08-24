exports.run = async (client, msg) => {
	return msg.send(`Blah to you too, ${msg.author.toString()}.`);
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
	name: 'blah',
	description: 'Blah to you too :3',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 