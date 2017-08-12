const keys = require('./keys.json');
const Raven = require('raven');
const { Client, version: komadaVersion } = require('komada');

Raven.config('https://8d8ad27176784fba9f8ad42e58f22e1b:db9053e0c2944602bdca9b00abc8bd9f@sentry.io/196284', {
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