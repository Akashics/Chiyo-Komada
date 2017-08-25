exports.run = async (client, msg) => {
    
	const snekfetch = require('snekfetch');
	function filterPkmn(arr) {
		const filtered = arr.filter(entry => entry.language.name === 'en');
		return filtered[Math.floor(Math.random() * filtered.length)];
	}
    
	const pokemon = Math.floor(Math.random() * 721) + 1;
	const { body } = await snekfetch
		.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
	const name = filterPkmn(body.names).name.toLowerCase();
	const id = `${'000'.slice(body.id.toString().length)}${body.id}`;
	const embed = new client.methods.Embed();
	embed
		.setTitle('You have 15 seconds.\nWhat\'s the name of this Pokémon?')
		.setColor(0xED1C24)
		.setImage(`https://www.serebii.net/sunmoon/pokemon/${id}.png`);
	await msg.send(embed);
	const msgs = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
		max: 1,
		time: 15000
	});
	if (!msgs.size) return msg.channel.send(`You ran out of time. :/ \nIt was ${name}, sorry!`);
	if (msgs.first().content.toLowerCase() !== name) return msg.channel.send(`:x: Nope, sorry, it's name was ${name}.`);
	return msg.channel.send(`Nice text work ${msg.author.toString()}. You have earned a point!`);

};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: ['wtp', 'whatpokemon'],
	permLevel: 0,
	botPerms: ['SEND_MESSAGES'],
	requiredFuncs: [],
	cooldown: 3,
};

exports.help = {
	name: 'whosthatpokemon',
	description: 'Its Pikachu!',
	usage: '',
	usageDelim: '',
	extendedHelp: '',
};