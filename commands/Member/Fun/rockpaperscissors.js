exports.run = async (client, msg, args) => {
	const choices = ['paper', 'rock', 'scissors'];
	if (!choices.includes(args[0])) {
		return msg.send('You can only choose: `rock, paper or scissors`.');
	}
	const choice = args[0];
	const response = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'rock') {
		if (response === 'rock') return msg.send('Rock! Aw... A tie...');
		else if (response === 'paper') return msg.send('Paper! Yes! I win!');
		else if (response === 'scissors') return msg.send('Scissors! Aw... I lose...');
	} else if (choice === 'paper') {
		if (response === 'rock') return msg.send('Rock! Aw... I lose...');
		else if (response === 'paper') return msg.send('Paper! Aw... A tie...');
		else if (response === 'scissors') return msg.send('Scissors! Yes! I win!');
	} else if (choice === 'scissors') {
		if (response === 'rock') return msg.send('Rock! Yes! I win!');
		else if (response === 'paper') return msg.send('Paper! Aw... I lose...');
		else if (response === 'scissors') return msg.send('Scissors! Aw... A tie...');
	} else {
		return msg.send('I win by default, you little cheater.');
	}
    
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['rps'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'rockpaperscissors',
	description: 'Play Rock-Paper-Scissors.',
	usage: '[choice:string]',
	usageDelim: '',
	extendedHelp: '',
};