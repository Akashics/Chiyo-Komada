exports.run = async (client, msg) => {
	const keys = require('../../../keys.json');
	const axios = require('axios');

	let searchQuery = msg.content.substring(client.settings.guilds.get(msg.guild).prefix.length + exports.help.name.length + 1);
	if (!searchQuery) return msg.send(':cloud: I need a manga to search up.');

	let authRequest = await axios.post('https://anilist.co/api/auth/access_token', {
		grant_type: 'client_credentials',
		client_id: keys.anilistClient,
		client_secret: keys.anilistSecret
	});
	let accessToken = authRequest.data.access_token;
	let animeRequest = await axios({
		url: `https://anilist.co/api/anime/search/${encodeURI(searchQuery)}`,
		params: { access_token: accessToken }
	});
	if (animeRequest.data.error) {
		if (animeRequest.data.error.messages[0] === 'No Results.') {
			return msg.send(':cloud: I could not find a result for "' + searchQuery + '".');
		}
	}
	if (animeRequest.data.length >= 1) {
		let characters = await client.funcs.anilistSearch.loadCharacters(animeRequest.data[0].id, accessToken, 'anime');
		let embed = await client.funcs.anilistSearch.buildResponse(msg, animeRequest.data[0], characters, 'Anime');
		return msg.send(embed);
	} else {
		return msg.send(':cloud: I could not find a result for "' + searchQuery + '".');
	}

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
	name: 'anime',
	description: 'Lookup anime things.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 