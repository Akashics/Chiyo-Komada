exports.run = (client, guild) => {
  const keys = require('../keys.json');
  client.user.setGame(`${keys.botInfo.prefix}help || ${client.guilds.size} guilds`);
  if (guild.available) {
    var guildIconURL;
    if (guild.icon) {
      guildIconURL = guild.iconURL();
    } else {
      guildIconURL = 'http://i.imgur.com/escBXVB.png';
    }
    const embed = new client.methods.Embed()
      .setTitle('Added to a New Guild!')
      .setAuthor(`${guild.name}`, `${guildIconURL}`)
      .setColor(0x0AC120)
      .setFooter('', 'http://i.imgur.com/w1vhFSR.png')
      .setThumbnail(`${guildIconURL}`)
      .setTimestamp()
      .setURL('https://chiyo.ml')
      .addField(`**Guild Name**`, `${guild.name}`, true)
      .addField(`**Guild ID**`, `${guild.id}`, true)
      .addField(`**Guild Region**`, `${guild.region}`, true)
      .addField(`**Guild Owner**`, `${guild.owner} (${guild.owner.id})`, true)
      .addField(`**Guild Count**`, `${guild.memberCount}`, true)
      .addField(`**Guild Created**`, `${guild.createdAt}`, true)
      .addField(`**Guild Settings**`, `V: ${guild.verificationLevel}; E: ${guild.explicitContentFilter}`, true);
    return client.channels.get('341768632545705986').send({ embed: embed });
  }
}