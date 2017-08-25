exports.run = async (client, msg, args) => {
	const snekfetch = require('snekfetch');
	function shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}

	const { query } = args;
	const { body } = await snekfetch
		.get('http://bulbapedia.bulbagarden.net/w/api.php')
		.query({
			action: 'query',
			prop: 'extracts',
			format: 'json',
			titles: query,
			exintro: '',
			explaintext: '',
			redirects: '',
			formatversion: 2
		});
	if (body.query.pages[0].missing) return msg.say('No Results.');
	const embed = new client.methods.Embed();
	embed
		.setColor(0x3E7614)
		.setTitle(body.query.pages[0].title)
		.setAuthor('Bulbapedia', 'https://i.imgur.com/09eYo5T.png')
		.setDescription(shorten(body.query.pages[0].extract.replace(/\n/g, '\n\n')));
	return msg.sebd(embed);
};
    
exports.conf = {
	enabled: false,
	runIn: ['text'],
	aliases: ['bulbagarden'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'bulbapedia',
	description: 'Searches Bulbapedia for your query.',
	usage: '<query:string>',
	usageDelim: '',
	extendedHelp: '',
}; 