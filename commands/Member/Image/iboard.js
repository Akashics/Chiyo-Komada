exports.run = async (client, msg) => {
	const keys = require('../../../keys.json');
	const axios = require('axios');
	let msgSplit = msg.content.split(' ');
	let msgSearch = '';
	let searchOrig = '';
	for (let i = 1; i < msgSplit.length; i++) {
		if (i === 1) {
			searchOrig = msgSplit[1];
		} else {
			searchOrig = searchOrig + ' ' + msgSplit[i];
		}
	}
	msgSearch = 'random: ' + searchOrig;
	let result = await axios.get(`https://ibsear.ch/api/v1/images.json?q=${msgSearch}`, {
		params: { 'X-lbSearch-Key': keys.ibsearch_sfw_key }
	});
	let body = result.data;
	if (typeof (body) !== 'undefined' && result.status === 200) {
		let random = Math.floor(Math.random() * body.length);
		let img = body[random];
		return msg.send(`https://${img.server}.ibsear.ch/${img.path}`);
	} else {
		return msg.send(':cloud: Nothing was found for the request: ' + searchOrig);
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
	name: 'iboard',
	description: 'Lookup SFW Images on ImageBoard',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 