exports.run = (client, guild) => {
	const keys = require('../keys.json');
	client.user.setGame(`${keys.botInfo.prefix}help || ${client.guilds.size} guilds`);
	if (guild.available) {

		const embed = new client.methods.Embed()
			.setTitle('Added to a New Guild!')
			.setAuthor(`${guild.name} -`, (guild.iconURL() || 'http://i.imgur.com/escBXVB.png'))
			.setColor(0xCC0000)
			.setFooter('', 'http://i.imgur.com/w1vhFSR.png')
			.setThumbnail(guild.iconURL() || 'http://i.imgur.com/escBXVB.png')
			.setTimestamp()
			.setURL('https://chiyo.ml')
			.addField('**Guild Name**', `${guild.name}`, true)
			.addField('**Guild ID**', `${guild.id}`, true)
			.addField('**Guild Region**', `${guild.region}`, true)
			.addField('**Guild Owner**', `${guild.owner.user.tag} (${guild.owner.id})`, true)
			.addField('**Guild Count**', `${guild.memberCount}`, true)
			.addField('**Guild Created**', `${guild.createdAt}`, true);
		return client.channels.get('341768632545705986').send({ embed: embed });
	}
};