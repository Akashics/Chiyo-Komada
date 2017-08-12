exports.run = (client, guild) => {
	const keys = require('../keys.json');
	client.user.setGame(`${keys.botInfo.prefix}help || ${client.guilds.size} guilds`);
	if (guild.available) {
		var guildVerification;
		switch (guild.verificationLevel) {
		case 0:
			guildVerification = 'Unrestricted';
			break;
		case 1:
			guildVerification = 'Low, Verified Email';
			break;
		case 2:
			guildVerification = 'Medium, Registered 5+ Minutes';
			break;
		case 3:
			guildVerification = '(╯°□°）╯︵ ┻━┻, Member for 10+ Minutes';
			break;
		case 4:
			guildVerification = '┻━┻︵ヽ(`Д´)ﾉ︵┻━┻, Needs Verified Phone';
			break;
		default:
			guildVerification = 'Unknown?';
			break;

		}
		var guildFilter;
		switch (guild.explicitContentFilter) {
		case 0:
			guildFilter = 'Don\'t scan anything';
			break;
		case 1:
			guildFilter = 'Roles bypass';
			break;
		case 2:
			guildFilter = 'Scan everyone';
			break;
		default:
			guildFilter = 'Unknown';
			break;
		}

		var guildIconURL;
		if (guild.icon) {
			guildIconURL = guild.iconURL();
		} else {
			guildIconURL = 'http://i.imgur.com/escBXVB.png';
		}

		const embed = new client.methods.Embed()
			.setTitle('Added to a New Guild!')
			.setAuthor(`${guild.name} -`, `${guildIconURL}`)
			.setColor(0x0AC120)
			.setFooter('', 'http://i.imgur.com/w1vhFSR.png')
			.setThumbnail(`${guildIconURL}`)
			.setTimestamp()
			.setURL('https://chiyo.ml')
			.addField('**Guild Name**', `${guild.name}`, true)
			.addField('**Guild ID**', `${guild.id}`, true)
			.addField('**Guild Region**', `${guild.region}`, true)
			.addField('**Guild Owner**', `${guild.owner.user.tag} (${guild.owner.id})`, true)
			.addField('**Guild Count**', `${guild.memberCount}`, true)
			.addField('**Guild Created**', `${guild.createdAt}`, true)
			.addField('**Guild Settings**', `Ver: ${guildVerification}; Filter: ${guildFilter}`, true);
		return client.channels.get('341768632545705986').send({ embed: embed });
	}
};