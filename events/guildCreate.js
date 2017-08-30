exports.run = (client, guild) => {
	/* eslint-disable no-console */
	if (!guild.member(client.user).hasPermission('SEND_MESSAGES')) {
		client.users.get(guild.owner.id).send('Hi, I was recently added to your guild ' + guild.name + ' and I do not have `SEND_MESSAGES` to respond to users. Please add it to avoid future charges.')
			.catch((e) => {
				return guild.leave().then((g) => {
					console.log(`✘ ${g}: Left the guild due to No SEND_MESSAGES permissions.`)
				})
					.catch(console.error);
			});
		
	}

	if (guild.available) {
		client.funcs.discordListUpdate.update(client);
		const embed = new client.methods.Embed()
			.setAuthor(`${guild.name} (${guild.id})`, (guild.iconURL() || 'http://i.imgur.com/escBXVB.png'))
			.addField('**Guild Owner**', `${guild.owner.user.tag}\n_${guild.owner.id}_`, true)
			.addField('**Guild Count**', `${guild.memberCount} users`, true)
			.setColor(0x0AC120)
			.setTimestamp()
			.setThumbnail(guild.iconURL() || 'http://i.imgur.com/escBXVB.png');
		return client.channels.get('341768632545705986').send({ embed: embed });
	}
};