const keys = require('./keys.json');
const Raven = require('raven');
const { Client, version: komadaVersion } = require('komada');

Raven.config(keys.ravenURL, {
	release: komadaVersion,
	environment: 'production'
}).install();

class KashallisStoopid extends Client {
	constructor(options) {
		super(options);
		this.music = {};
	}
}

const client = new KashallisStoopid({
	ownerID: keys.ownerID,
	prefix: keys.botInfo.prefix,
	cmdPrompt: true,
	cmdEditing: true
});

client.login(keys.botInfo.token);