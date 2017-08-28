exports.run = async (client, msg) => {

	return msg.sendMessage(`Hi ${msg.author.toString()}, \n\nYou can invite Chiyo to your guild using: <https://chiyo.ml/invite>\nYou can also join our Support Guild by going to <https://chiyo.ml/support>\nThank you for supporting Chiyo's community growth.`);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['support'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'invite',
	description: 'Invite Chiyo to or join the Support Guild',
	usage: '',
	usageDelim: '',
};
