exports.run = (client, guild) => {
	if (guild.available) {
		client.funcs.discordListUpdate.update(client);
		const embed = new client.methods.Embed()
			.setAuthor(`${guild.name} (${guild.id})`, (guild.iconURL() || 'http://i.imgur.com/escBXVB.png'))
			.addField('**Guild Owner**', `${guild.owner.user.tag}\n_${guild.owner.id}_`, true)
			.addField('**Guild Count**', `${guild.memberCount} users`, true)
			.setColor(0xCC0000)
			.setTimestamp()
			.setThumbnail(guild.iconURL() || 'http://i.imgur.com/escBXVB.png');
		return client.channels.get('341768632545705986').send({ embed: embed });
	}
};