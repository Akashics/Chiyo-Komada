exports.run = (client) => {
	/* eslint-disable no-console */
	client.funcs.discordListUpdate.update(client);
	

	setInterval(function() {
		const dd = client.datadog;

		dd.gauge('client.ping', client.ping);
		dd.gauge('client.guilds', client.guilds.size);
		dd.gauge('client.users', client.guilds.reduce((a, b) => a + b.memberCount, 0));
		dd.gauge('client.channels', client.channels.size);
		dd.gauge('node.memory', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2));
		dd.gauge('client.voice', client.voiceConnections.size);

		console.log('✔ Updating stats for DataDog');
	}, 180000);
};