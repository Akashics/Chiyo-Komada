exports.run = async (client, msg) => {
	return msg.send(`<:rip:350433174423207936> _${msg.author.username} has paid their respects..._`);
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
	name: 'rip',
	description: 'Have you paid your respects?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 