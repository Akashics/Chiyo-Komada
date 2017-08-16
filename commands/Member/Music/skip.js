exports.run = async (client, msg) => {
	let guild = client.music[msg.guild.id];
	if (!guild || !guild.isPlaying || !msg.guild.voiceConnection) return msg.reply('No songs are in the queue. Welp.');
	if (!msg.member.voiceChannel || msg.member.voiceChannel.id !== msg.guild.voiceConnection.channel.id) return msg.reply('Eh, you need to be in the bot\'s voiceChannel to skip.');
	if (guild.skippers.includes(msg.author.id)) return msg.reply(' You\'ve already voted to skip!');
	guild.skippers.push(msg.author.id);

	if (guild.skippers.length >= Math.floor(msg.member.voiceChannel.members.size - 1) / 2) {
		client.funcs.musichandler.skipSong(msg);
		msg.reply('Skipped');
	} else {
		msg.reply(` Your skip has been added. You need ${Math.ceil((msg.member.voiceChannel.members.size - 1) / 2) - guild_config.skippers.length} more votes to skip.`);
	}
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['CONNECT', 'SPEAK', 'USE_VAD'],
	requiredFuncs: ['musichandler'],
	cooldown: 5,
};

exports.help = {
	name: 'skip',
	description: 'Skip a song that is playing.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};