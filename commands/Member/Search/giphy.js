exports.run = async (client, msg, args) => {

	const keys = require('../../../keys.json');
	const snekfetch = require('snekfetch');
	const query = args;
	const request = await snekfetch
		.get('http://api.giphy.com/v1/gifs/search')
		.query({
			q: query,
			api_key: keys.giphyKey,
			rating: msg.channel.nsfw ? 'r' : 'pg',
			limit: 5
		});
	if (!request.body.data.length) return msg.send(':x: No results were found.');
	return msg.send(request.body.data[Math.floor(Math.random() * request.body.data.length)].images.original.url);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'giphy',
	description: 'Searches Giphy for your query.',
	usage: '<search:string>',
	usageDelim: '',
	extendedHelp: '',
};