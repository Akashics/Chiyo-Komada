exports.conf = {
	enabled: false,
	ignoreBots: false,
	ignoreSelf: false,
};
  
exports.run = (client, msg) => {
	if (!msg.guild.settings.inviteFilter) return;
	if (msg.guild.member(msg.author).has('MANAGE_MESSAGES')) return;
	//Guild has inviteFilter enabled and does not have permission to MANAGE_MESSAGES
	// RUN THE REGEX
	let sentMessage = msg.content;
	var discordFound = sentMessage.match('https?://)?discord.gg');
	// if no link was found, lets return;
	if (!discordFound) return;
	console.log(discordFound);
	//we found a discord link lets check to see if has an ending that exists in the guild.
  
	msg.guild.fetchInvites().then(invites => {
		invites.forEach(invite => {
			console.log(invite.code);
		});
	});

	if (!serverLink) {
		msg.delete();
		return msg.author.send(':x: Sorry  ' +  msg.author.username + ', but ' + msg.guild.name + ' does not allow posting invite links in our Discord unless given permission.');
	}
  


};