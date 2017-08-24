exports.run = async (client, msg) => {
	const fs = require('fs');
	var rip = require('../../../rip.json');

	let total = rip.respectsPaid + 1;

	var respects = {
		'respectsPaid': total
	}

	fs.writeFile('../../../rip.json', JSON.stringify(respects), (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});

	msg.send(`_${msg.author.username} has paid their respects..._ \n\n ${total}`);
};
    
exports.conf = {
	enabled: false,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	cooldown: 3,
};
    
exports.help = {
	name: 'rip',
	description: 'Have you paid your respects?',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
}; 