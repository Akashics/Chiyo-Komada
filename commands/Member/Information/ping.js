exports.run = async (client, msg) => {
	const now = require('performance-now');
	const req = require('snekfetch');
	const x = now();

	const ram = async () => {
		const first = await now();
		await req.get('http://rra.ram.moe/i/r');
		return (now() - first);
	};

	const ani = async () => {
		const first = await now();
		await req.get('https://anilist.co/');
		return (now() - first);
	};

	const neko = async () => {
		const first = await now();
		await req.get('http://catgirls.brussell98.tk/api/random');
		return (now() - first);
	};

	const check = async () => {
		const a = await ram();
		const b = await ani();
		const c = await neko();

		return msg.channel.send(`
= Calculated Response Times =

Heart Beat       :: ${Math.round(client.ping)}ms

Ram.Moe API      :: ${Math.round(a)}ms
Anilist API      :: ${Math.round(b)}ms
Neko API         :: ${Math.round(c)}ms
Chiyo Dashboard  :: N/A

Total Calc Time  :: ${Math.round(now() - x)}ms`, { code: 'asciidoc' });

	};
	check();
};

exports.conf = {
	enabled: true,
	runIn: ['text'],
	aliases: [],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'ping',
	description: 'Ping/Pong. I wonder what this does? /sarcasm',
	usage: '',
	usageDelim: '',
};
