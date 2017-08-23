exports.run = (client, member) => {
	if (member.guild.id !== '324051061033926666') return;
	client.channels.get('349721695537463296').send('Bye ' + member.user.toString() + ', we\'ll miss you! :chiyoSad:');
};