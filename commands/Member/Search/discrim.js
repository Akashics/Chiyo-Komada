exports.run = async (client, msg, args) => {
	const discrim = args[0].discrim || msg.author.discriminator;
	const users = this.client.users.filter(user => user.discriminator === discrim).map(user => user.username);
	const embed = new client.methods.Embed();
	embed
		.setTitle(`${users.length} Users with the discriminator: ${discrim}`)
		.setColor(0x9797FF)
		.setDescription(users.join(', '));
	return msg.embed(embed);
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['discriminator'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'discrim',
	description: 'Searches for other users with a certain discriminator.',
	usage: '[discrim:num]',
	usageDelim: '',
	extendedHelp: '',
};