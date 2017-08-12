exports.run = async (client, msg) => {

	if (!msg.member.hasPermission('BAN_MEMBERS')) return;
	if (!msg.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
		return msg.reply(':x: I don\'t have the permissions (BAN_MEMBERS) to do this.');
	}
	if (msg.mentions.users.size === 0) {
		return msg.send(':x: There is no user to ban!');
	}
	let banMember = msg.guild.member(msg.mentions.users.first());
	if (!banMember) {
		return msg.send(':x: You cannot ban that user!');
	}
	let banReason = msg.content.slice(client.settings.guilds.get(msg.guild).prefix.length + exports.help.name.length + 1 + banMember.length + 1);
	if (!banReason) {
		return msg.send(':x: Please provide a reason to why you are banning ' + banMember);
	}
	banMember.ban().then(member => {
		let modLog = msg.guild.channels.get(client.settings.guilds.get(msg.guild.id).modLog);
		if (!modLog) {
			msg.send(':warning: A modlog channel has not been setup. This ban will not be logged!');
		} else {
			const embed = client.funcs.modlog.createEmbed(client, msg.author, banMember, 'ban', banReason);
			client.funcs.modlog.post(client, msg.guild, embed);
		}
		return msg.send(`:white_check_mark: ${member.user.username} was succesfully banned.`);
	});

};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 2,
	botPerms: ['BAN_MEMBERS'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'ban',
	description: 'Remove a user permanently from the guild.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 