const keys = require('./keys.json');
const Raven = require('raven');

Raven.config('https://8d8ad27176784fba9f8ad42e58f22e1b:db9053e0c2944602bdca9b00abc8bd9f@sentry.io/196284', {
  release: '0.1.35',
  logger: 'default',
  environment: 'production'
}).install();
Raven.context(() => {

  const Komada = require("komada");

  const client = new Komada.Client({
    ownerID: keys.ownerID,
    prefix: keys.botInfo.prefix,
    clientOptions: {
      fetchAllMembers: true,
    },
  });

  client.login(keys.botInfo.token);

});
