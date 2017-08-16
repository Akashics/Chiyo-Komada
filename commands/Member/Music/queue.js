exports.run = async (client, msg) => {
	let guild = client.music[msg.guild.id];
	if (!guild) return msg.reply('No songs in queue.');
	msg.channel.send(`\`\`\`Queue:\n${guild.queue.map(a => `**${a.info.title}** as requested by **${a.requester.user.username}**`).join('\n\n') || 'No songs currently, welp.'}\`\`\``);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['CONNECT', 'SPEAK', 'USE_VAD'],
	requiredFuncs: ['musichandler'],
	cooldown: 6,
};

exports.help = {
	name: 'queue',
	description: 'View the music queue.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};