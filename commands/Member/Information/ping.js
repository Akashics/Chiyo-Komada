exports.run = async (client, msg) => {
  const snekfetch = require('snekfetch');
  const message = await msg.sendMessage('Waiting for all responses...');
  let beforeRam = Date.now();
  let req = await snekfetch.get(`http://rra.ram.moe/i/r`);
  let afterRam = Date.now()
  let ramResponseTime = afterRam - beforeRam;
  let roundTrip = message.createdTimestamp - msg.createdTimestamp;
  return msg.channel.send(`
     Calculated Response Times:

Bot              : ${Math.round(client.ping)}ms
Roundtrip        : ${roundTrip}ms
Ram.Moe API      : ${ramResponseTime}ms
Anilist API      : [ERROR] ms
Neko API         : [ERROR] ms
Chiyo Dashboard  : 1ms`, {code: 'js'});
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "ping",
  description: "Ping/Pong. I wonder what this does? /sarcasm",
  usage: "",
  usageDelim: "",
};
