exports.update = (client) => {
    const keys = require('../keys.json');
    if (keys.discordBotsORGAPIKey) {
        const snekfetch = require('snekfetch')
        snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
          .set('Authorization', `${keys.discordBotsORGAPIKey}`)
          .send({ server_count: client.guilds.size })
          .then(console.debug('Updating discordbots.org Server Listing (' + client.guilds.size + ')'))
          .catch(e => console.warn('discordbots.org went offline, please mention Oliy.'));

    }
    if (keys.discordBotsPWAPIKey) {
        const snekfetch = require('snekfetch')
        snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
          .set('Authorization', `${keys.discordBotsPWAPIKey}`)
          .send({ server_count: client.guilds.size })
          .then(console.debug('Updated bots.discord.pw Server Listing (' + client.guilds.size + ')'))
          .catch(e => console.warn('bots.discord.pw went offline, /shrug.'));

    }
}