exports.run = async (client, msg) => {

	if (!msg.member.hasPermission('KICK_MEMBERS')) return;
	if (!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
		return msg.reply(':x: I don\'t have the permissions (KICK_MEMBER) to do this.');
	}
	if (msg.mentions.users.size === 0) {
		return msg.send(':x: There is no user to kick!');
	}
    
	let kickMember = msg.guild.member(msg.mentions.users.first());
	if (!kickMember) {
		return msg.send(':x: You cannot kick that user!');
	}
    
	let kickReason = msg.content.slice(client.settings.guilds.get(msg.guild).prefix.length + exports.help.name.length + 1 + kickMember.length + 1);
	if (!kickReason) {
		return msg.send(':x: Please provide a reason to why you are kicking' + kickMember);
	}
    
	kickMember.kick().then(member => {
		let modLog = msg.guild.channels.get(msg.guild.settings.modLog);
		if (!modLog) {
			msg.send(':warning: A modlog channel has not been setup properly. This ban will not be logged!');
		} else {
			const embed = client.funcs.modlog.createEmbed(client, msg.author, kickMember, 'ban', kickReason);
			if (!modLog) return;
			client.funcs.modlog.post(client, msg.guild, embed);
		}
		return msg.send(`:white_check_mark: ${member.user.username} was succesfully kicked.`);
	});

};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 2,
	botPerms: ['KICK_MEMBERS'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'kick',
	description: 'Remove a user from the guild.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 