exports.run = async (client, msg) => {
	const snekfetch = require('snekfetch');
	let req = await snekfetch.get('http://nekos.life/api/neko');
	return msg.channel.send({ files: [`${req.body.neko}`] });
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
	name: 'neko',
	description: 'Nekos, what else?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 