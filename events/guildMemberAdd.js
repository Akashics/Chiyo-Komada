exports.run = (client, member) => {
	if (member.guild.id !== '324051061033926666') return;
	client.channels.get('349721695537463296').send('Hello ' + member.user.toString() + ', welcome to my support guild! :chiyoHappy2:');
};