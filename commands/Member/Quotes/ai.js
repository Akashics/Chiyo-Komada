exports.run = async (client, msg) => {
	let searchQuery = msg.content.substring(client.settings.guilds.get(msg.guild).prefix.length + 3);
	if (!searchQuery) return;

	var m = require('mitsuku-api')();
	m.send(searchQuery)
		.then(function(response){
			msg.send(response);
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
	name: 'ai',
	description: 'Talk with Cleverbot!',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 