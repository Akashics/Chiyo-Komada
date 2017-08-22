const keys = require('./keys.json');
const Raven = require('raven');
const { Client, version: komadaVersion } = require('komada');
const StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();

dogstatsd.increment('Startups', 1);

Raven.config(keys.ravenURL, {
	release: komadaVersion,
	environment: 'production'
}).install();

class KashallisStoopid extends Client {
	constructor(options) {
		super(options);
		this.music = {};
		this.datadog = dogstatsd;
	}
}

const client = new KashallisStoopid({
	ownerID: keys.botInfo.botOwnerID,
	prefix: keys.botInfo.prefix,
	cmdEditing: true,
	cmdLogging: true
});

client.login(keys.botInfo.botToken);