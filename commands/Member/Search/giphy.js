exports.run = async (client, msg, args) => {

	const keys = require('../../../keys.json');
	const snekfetch = require('snekfetch');
	const { query } = args;
	const { body } = await snekfetch
		.get('http://api.giphy.com/v1/gifs/search')
		.query({
			q: query,
			api_key: keys.giphyKey,
			rating: msg.channel.nsfw ? 'r' : 'pg'
		});
	if (!body.data.length) return msg.say(':x: No results were found.');
	return msg.send(body.data[Math.floor(Math.random() * body.data.length)].images.original.url);
};

exports.conf = {
	enabled: false,
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