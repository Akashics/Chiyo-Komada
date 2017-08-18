exports.run = async (client, msg) => {
	/* eslint-disable no-console */
	let guild = client.music[msg.guild.id];
	if (!guild || !guild.isPlaying || !msg.guild.voiceConnection) return msg.reply('No songs are in the queue. Welp.');
	if (!msg.member.voiceChannel || msg.member.voiceChannel.id !== msg.guild.voiceConnection.channel.id) return msg.reply('Eh, you need to be in the bot\'s voiceChannel to skip.');
	try {
		msg.guild.voiceConnection.dispatcher.pause();
		return msg.reply('Successfully paused to current song.');
	} catch (err) {
		console.error(err);
		return msg.reply('Sorry, there was an error pausing that song.');
	}
};

exports.conf = {
	enabled: false,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['CONNECT', 'SPEAK', 'USE_VAD'],
	requiredFuncs: ['musichandler'],
	cooldown: 5,
};

exports.help = {
	name: 'pause',
	description: 'Pause that song.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};