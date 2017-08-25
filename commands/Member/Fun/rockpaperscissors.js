exports.run = async (client, msg, args) => {
	const choices = ['paper', 'rock', 'scissors'];
	if (args.toLowerCase() != choices) {
		return msg.send('You can only choose: `Rock, Paper or Scissors`.');
	}
	const { choice } = args[0];
	const response = choices[Math.floor(Math.random() * choices.length)];
	if (choice === 'rock') {
		if (response === 'rock') return msg.say('Rock! Aw... A tie...');
		else if (response === 'paper') return msg.say('Paper! Yes! I win!');
		else if (response === 'scissors') return msg.say('Scissors! Aw... I lose...');
	} else if (choice === 'paper') {
		if (response === 'rock') return msg.say('Rock! Aw... I lose...');
		else if (response === 'paper') return msg.say('Paper! Aw... A tie...');
		else if (response === 'scissors') return msg.say('Scissors! Yes! I win!');
	} else if (choice === 'scissors') {
		if (response === 'rock') return msg.say('Rock! Yes! I win!');
		else if (response === 'paper') return msg.say('Paper! Aw... I lose...');
		else if (response === 'scissors') return msg.say('Scissors! Aw... A tie...');
	} else {
		return msg.say('I win by default, you little cheater.');
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