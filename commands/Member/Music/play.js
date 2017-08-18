exports.run = async (client, msg) => {
	if (!msg.member.voiceChannel) return msg.reply('Err... No voicechannel to join?');
	let song = msg.content.slice(client.settings.guilds.get(msg.guild).prefix.length + 5);
	if (!song) return msg.reply('Sorry, There was no song was provided. Please provide a song or link to play.');
	let guild = client.music[msg.guild.id];
	if (!guild) guild = client.music[msg.guild.id] = {
		queue: [],
		skippers: [],
		skipReq: 0,
		isPlaying: false
	};
	if (guild.isPlaying) {
		client.funcs.musichandler.getID(song, id => {
			if (!id) return msg.reply('I am unable to extract that video. Please try again later.');
			const ytdl = require('ytdl-core');
			ytdl.getInfo(id, (err, info) => {
				if (err) return msg.reply('Hmm... there was an error extracting that video.');
				if (info.formats.some(format => format.live)) return msg.reply('Not supporting live stream at this time.');
				msg.delete();
				guild.queue.push({
					info, requester: msg.member
				});
				msg.reply(`The song: ***${info.title}*** has been added to the queue list.`);

			});
		});
	} else {
		guild.isPlaying = true;
		client.funcs.musichandler.getID(song, id => {
			if (!id) return msg.reply('I am unable to extract that video. Please try again later.');
			const ytdl = require('ytdl-core');
			ytdl.getInfo(id, (err, info) => {
				if (err) return msg.reply('Hmm... there was an error extracting that video.');
				if (info.formats.some(format => format.live)) return msg.reply('Not supporting live stream at this time.');
				msg.delete();
				guild.queue.push({
					info, requester: msg.member
				});
				client.funcs.musichandler.playMusic(guild, msg);
			});
		});
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
	name: 'play',
	description: 'Play music in a voice channel, what else?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};