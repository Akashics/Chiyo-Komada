exports.run = async (client, msg, args) => {
    
	const user = args[0] || msg.author;
	if (!user.avatar) return msg.send('This user has no avatar.');
	const avatar = user.avatarURL({
		format: user.avatar.startsWith('a_') ? 'gif' : 'png',
		size: 2048
	});
	return msg.send(avatar);
};
    
exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'avatar',
	description: 'Responds with a link to a user\'s avatar',
	usage: '[mention:user]',
	usageDelim: '',
	extendedHelp: '',
}; 