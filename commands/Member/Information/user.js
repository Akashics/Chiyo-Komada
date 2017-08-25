exports.run = async (client, msg, args) => {

	const moment = require('moment');
	const member = args.member || msg.member;
	const embed = new client.methods.Embed();
	const statuses = {
		'online': '<:online:313956277808005120> Online',
		'idle': '<:away:313956277220802560> Idle',
		'dnd': '<:dnd:313956276893646850> Do Not Disturb',
		'offline': '<:offline:313956277237710868> Offline'
	};
	embed
		.setColor(member.displayHexColor)
		.setThumbnail(member.user.displayAvatarURL())
		.addField('❯ Name',
			member.user.tag, true)
		.addField('❯ ID',
			member.id, true)
		.addField('❯ Discord Join Date',
			moment(member.user.createdAt).format('MMMM Do YYYY'), true)
		.addField('❯ Server Join Date',
			moment(member.joinedTimestamp).format('MMMM Do YYYY'), true)
		.addField('❯ Status',
			statuses[member.user.presence.status], true)
		.addField('❯ Playing',
			member.user.presence.game ? member.user.presence.game.name : 'N/A', true)
		.addField('❯ Highest Role',
			member.highestRole.name !== '@everyone' ? member.highestRole.name : 'None', true)
		.addField('❯ Hoist Role',
			member.hoistRole ? member.hoistRole.name : 'None', true);
	return msg.send(embed);
    
    
};
    
exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'user',
	description: 'Responds with detailed information on a user.',
	usage: '[mention:user]',
	usageDelim: '',
	extendedHelp: '',
}; 