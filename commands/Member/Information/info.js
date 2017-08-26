const moment = require('moment');
require('moment-duration-format');
const { version: komadaVersion } = require('komada');
var os = require('os');

exports.run = async (client, msg) => {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const hostTime = moment.duration(os.uptime() * 1000).format(' D [days], H [hrs], m [mins], s [secs]');
	return msg.sendCode('asciidoc', [
		'= STATISTICS =',
		`• Users        :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
		`• Servers      :: ${client.guilds.size.toLocaleString()}`,
		`• Channels     :: ${client.channels.size.toLocaleString()}`,
		`• Komada       :: v${komadaVersion}`,
		'• Discord.js   :: v12.0.0-dev',
		`• Node.js      :: ${process.version}`,
		'',
		'= UPTIME =',
		`• Client       :: ${duration}`,
		`• Host         :: ${hostTime}`,
		'',
		'= HOST USAGE =',
		`• CPU Load     :: ${os.cpus()}`,
		`• RAM +Node    :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
		`• RAM Usage    :: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
	]);
};

exports.conf = {
	enabled: true,
	runIn: ['text', 'dm', 'group'],
	aliases: ['details', 'what', 'stats'],
	permLevel: 0,
	botPerms: [],
	requiredFuncs: [],
	requiredSettings: [],
};

exports.help = {
	name: 'info',
	description: 'Provides some details about the bot and stats.',
	usage: '',
	usageDelim: '',
};
