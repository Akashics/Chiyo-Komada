exports.run = (client) => {
  const keys = require('../keys.json');
  client.user.setGame(`${keys.botInfo.prefix}help || ${client.guilds.size} guilds`);
}