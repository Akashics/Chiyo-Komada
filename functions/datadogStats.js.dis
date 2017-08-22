exports.run = (client) => {
    setInterval(function() {
        const dd = client.datadog;

        dd.gauge('Latency', client.ping);
        dd.gauge('Guilds', client.guilds.size.toLocaleString());
        dd.gauge('Users', client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString());
        dd.gauge('Channels'. client.channels.size);
        dd.gauge('node_memory', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2));
        dd.gauge('Voice', client.voiceConnections.size);

        console.log('-= Updating Stats =-')
    }, 300000);
}