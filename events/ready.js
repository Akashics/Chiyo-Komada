exports.run = (client) => {
    const keys = require('../keys.json');
    if (keys.discordBotsAPIKey) {
        const axios = require('axios');
        axios.post('https://discordbots.org/api/bots/' + client.user.id + '/stats', { 
            headers: { Authorization: keys.discordBotsAPIKey },
            data: {
                serverCount: client.guilds.size
            } 
        });
    }
};