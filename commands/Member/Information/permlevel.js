exports.run = async (client, msg) => {
	var total = 0;
	var permLevel;
	for (let lvl = 10; lvl > 0; lvl--) {
		if (client.funcs.checkPerms(client, msg, lvl)) {
			total = lvl;
			break;
		}
	}

	switch (total) {
	case 2:
		permLevel = '2 | **Guild Moderator**';
		break;
	case 3:
		permLevel = '3 | **Guild Administrators**';
		break;
	case 4:
		permLevel = '4 | **Guild Owner**';
		break;
	case 7:
		permLevel = '7 | **Chiyo Support**';
		break;
	case 10:
		permLevel = '10 | **Chiyo Developer**';
		break;
	default:
		permLevel = '0 | **Guild Member**';
		break;
	}
	return msg.channel.send(`${msg.author.tag}'s current permission level is ${permLevel}.`);

};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: ['checkPerms'],
	cooldown: 3,
};

exports.help = {
	name: 'permlevel',
	description: 'Show off your snazzy permission level!',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};