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
	let mangaRequest = await axios({
		url: `https://anilist.co/api/manga/search/${encodeURI(searchQuery)}`,
		params: { access_token: accessToken }
	});
	if (mangaRequest.data.error) {
		if (mangaRequest.data.error.messages[0] === 'No Results.') {
			return msg.send(':cloud: I could not find a result for "' + searchQuery + '".');
		}
	}
	if (mangaRequest.data.length >= 1) {
		let characters = await client.funcs.anilistSearch.loadCharacters(mangaRequest.data[0].id, accessToken, 'manga');
		let embed = await client.funcs.anilistSearch.buildResponse(msg, mangaRequest.data[0], characters, 'Manga');
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
	name: 'manga',
	description: 'Lookup manga things.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 