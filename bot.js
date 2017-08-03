
if (process.version.slice(1).split('.')[0] < 8) console.log('Node 8.0.0 or higher is required. Update Node on your system.');
const Komada = require("komada");
const keys = require('./keys.json');
const Raven = require('raven');

const client = new Komada.Client({
  ownerID: keys.ownerID,
  prefix: keys.botInfo.prefix,
  clientOptions: {
    fetchAllMembers: true,
  },
});

Raven.config(keys.ravenString).install();
Raven.context(() => {
  client.login(keys.botInfo.token);
});
