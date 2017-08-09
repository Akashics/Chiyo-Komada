exports.run = async (client, msg) => {

	const responses = ['Yes', 'No', 'Maybe', 'Okay', 'Sure', 'that you should ask me later', 'naw'];
	msg.send(`:8ball: | I think ${responses[Math.floor(Math.random() * responses.length)]}.`);
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
	name: '8ball',
	description: 'What did you expect me to say?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 