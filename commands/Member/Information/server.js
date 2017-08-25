exports.run = async (client, msg) => {
    
	const moment = require('moment');
	const embed = new client.methods.Embed();
	const filterLevels = [
		'Off',
		'No Role',
		'Everyone'
	];
	const verificationLevels = [
		'None',
		'Low',
		'Medium',
		'(╯°□°）╯︵ ┻━┻',
		'┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
	];
	embed
		.setColor(0x00AE86)
		.setThumbnail(msg.guild.iconURL())
		.addField('❯ Name',
			msg.guild.name, true)
		.addField('❯ ID',
			msg.guild.id, true)
		.addField('❯ Creation Date',
			moment(msg.guild.createdAt).format('MMMM Do YYYY'), true)
		.addField('❯ Region',
			msg.guild.region, true)
		.addField('❯ Explicit Filter',
			filterLevels[msg.guild.explicitContentFilter], true)
		.addField('❯ Verification Level',
			verificationLevels[msg.guild.verificationLevel], true)
		.addField('❯ Owner',
			msg.guild.owner ? msg.guild.owner.user.username : 'None', true)
		.addField('❯ Members',
			msg.guild.memberCount, true);
	return msg.send(embed);
        
        
};
        
exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['server-info'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};
        
exports.help = {
	name: 'server',
	description: 'Responds with detailed information on the server.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 