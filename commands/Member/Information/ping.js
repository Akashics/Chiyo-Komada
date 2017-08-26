exports.run = async (client, msg) => {
	const check = async () => {

		return msg.channel.send(`
Heart Beat       :: ${Math.round(client.ping)}ms
`, { code: 'asciidoc' });

	};
	check();
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'ping',
	description: 'Ping/Pong. I wonder what this does? /sarcasm',
	usage: '',
	usageDelim: '',
};
