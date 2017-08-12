exports.run = async (client, msg, args) => {
	if (args[0]) {
		let image = args[0];
		if (image == 'types') {
			return msg.send(':comet: **Valid Image Types:** \n\n`awoo, bang, blush, clagwimoth, cry, cuddle, dance, hug, insult, jojo, kiss, lewd, lick, megumin, neko, nom, owo, pat, poke, pout, rem, shrug, slap, sleepy, smile, teehee, smug, stare, thumbsup, triggered, wag, waifu_insult, wasted`');
		} else {
			const types = ['awoo','bang','blush','clagwimoth','cry','cuddle','dance','hug','insult','jojo','kiss','lewd','lick','megumin','neko','nom','owo','pat','poke','pout','rem','shrug','slap','sleepy','smile','teehee','smug','stare','thumbsup','triggered','wag','waifu_insult','wasted'];
			if (!types.includes(image)) return msg.send(':x: Use `' + client.settings.guilds.get(msg.guild).prefix + 'moe types` to see the correct image types.');
			const axios = require('axios');
			const keys = require('../../../keys.json');
			const AuthStr = 'Bearer ' + keys.weebAPIKey;
			let imageRequest = await axios.get(`https://staging.weeb.sh/images/random?type=${image}`, { headers: { Authorization: AuthStr } });
			return msg.channel.send({ files: [{ attachment: imageRequest.data.url, name: `${imageRequest.data.id}.${imageRequest.data.fileType}` }] });
		}
	} else return msg.send(':x: Please check ' + `\`${client.settings.guilds.get(msg.guild).prefix}help moe \`` + 'to see possible image genre\'s.');
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
	name: 'moe',
	description: 'Get many image types from the popular image service site, WeebServices.',
	usage: '[type:string]',
	usageDelim: '',
	extendedHelp: '',
}; 