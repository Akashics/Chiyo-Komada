exports.run = async (client, msg, args) => {

	const { stripIndents } = require('common-tags');
	const { type } = args;
	if (type === 'start') {
		await msg.channel.overwritePermissions(msg.guild.defaultRole, { SEND_MESSAGES: false });
		return msg.send(stripIndents`
            Lockdown Started, users without Administrator can no longer post messages.
            Please use \`lockdown stop\` to end the lockdown.
        `);
	} 
	if (type === 'stop') {
		await msg.channel.overwritePermissions(msg.guild.defaultRole, { SEND_MESSAGES: null });
		return msg.send('Lockdown Ended.');
	}
	else {
		return msg.send('Unknown status. Please provide `lockdown start` or `lockdown stop`');
	}
    
};
    
exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 3,
	botPerms: ['ADMINISTRATOR'],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'lockdown',
	description: 'Prevents users from posting in the current channel, or removes a lockdown.',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 