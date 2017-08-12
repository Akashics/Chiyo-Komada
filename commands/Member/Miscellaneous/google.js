exports.run = async (client, msg) => {
	const cheerio = require('cheerio');
	const snekfetch = require('snekfetch');
	const querystring = require('querystring');

	let searchQuery = msg.content.substring(client.settings.guilds.get(msg.guild).prefix.length + exports.help.name.length + 1);
	if (!searchQuery) return msg.channel.send(':cloud: I need something to Google.');

	let searchMessage = await msg.reply(':cloud: Searching...');
	let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
	return snekfetch.get(searchUrl).then((result) => {
		let $ = cheerio.load(result.text);
		let googleData = $('.r').first().find('a').first().attr('href');
		googleData = querystring.parse(googleData.replace('/url?', ''));
		searchMessage.edit(`Result found!\n${googleData.q}`);

	}).catch((err) => {
		searchMessage.edit(':cloud: An error has occured: ' + err);
	});

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
	name: 'google',
	description: 'Google: No Results Found?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 