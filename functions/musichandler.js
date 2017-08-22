exports.searchVideo = async (query, callback) => {
	const request = require('request');
	const keys = require('../keys.json');
	request('https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=' + encodeURIComponent(query) + '&key=' + keys.yt_API_Key, (error, response, body) => {
		if (error) return msg.reply('There was an error finding that song');
		try {
			const json = JSON.parse(body);
			callback(json.items[0].id.videoId);
		} catch (e) {
			return msg.reply('There was an error finding that song');
			callback(null);	
		}
	});

};

exports.getID = async (str, callback) => {
	const getYouTubeID = require('get-youtube-id');
	if (str.includes('youtube.com')) {
		callback(getYouTubeID(str));
	} else {
		exports.searchVideo(str, (id) => {
			callback(id);
		});
	}

};

exports.playMusic = async (guild, msg) => {
	/* eslint-disable no-console */
	const ytdl = require('ytdl-core');
	const voiceChannel = msg.member.voiceChannel;

	voiceChannel.join().then(connection => {
		guild.skippers = [];
		const stream = ytdl.downloadFromInfo(guild.queue[0].info, {
			filter: 'audioonly'
		});
		msg.channel.send(`Now playing: **${guild.queue[0].info.title}** as requested by ${guild.queue[0].requester.displayName}`);

		const dispatcher = connection.playStream(stream);
		dispatcher.on('error', console.log);
		dispatcher.on('debug', console.log);
		dispatcher.on('end', () => {
			guild.queue.shift();
			if (guild.queue.length === 0) {
				guild.isPlaying = false;
				setTimeout(() => {
					voiceChannel.leave();
					return msg.channel.send('Queue is empty. Queue up some more tunes!');
				}, 2500);
			} else {
				setTimeout(() => {
					exports.playMusic(guild, msg);
				}, 500);
			}
		});
	});
};

exports.skipSong = async (msg) => {
	msg.guild.voiceConnection.dispatcher.end();
};