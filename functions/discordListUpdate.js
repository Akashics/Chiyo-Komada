exports.update = (client) => {
	const keys = require('../keys.json');

	/* eslint-disable no-console */
	if (keys.discordListings.enabled) {
		const snekfetch = require('snekfetch');
		snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
			.set('Authorization', `${keys.discordListings.discordBotsOrg}`)
			.send({ server_count: client.guilds.size })
			.then(console.log(`✔ Updated discordbots.org listing to ${client.guilds.size}...`))
			.catch(e => console.warn('✘ DiscordBots.org responded with: ' + e));

		snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
			.set('Authorization', `${keys.discordListings.discordBotsPW}`)
			.send({ server_count: client.guilds.size })
			.then(console.log(`✔ Updated discord.pw listing to ${client.guilds.size}...`))
			.catch(e => console.warn('✘ Discord.pw responded with: ' + e));
	}
};