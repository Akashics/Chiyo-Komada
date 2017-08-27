exports.conf = {
	enabled: false,
	ignoreBots: false,
	ignoreSelf: false,
};
  
exports.run = (client, msg) => {
	if (msg.channel.type !== 'text' || msg.guild.settings.inviteFilter !== true) return null;
	if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return null;
	return msg.delete()
		.catch((err) => {
			this.client.emit('log', err, 'error'));
		});
};