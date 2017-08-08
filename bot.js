const keys = require("./keys.json");
const Raven = require("raven");
const Komada = require("komada");

Raven.config("https://8d8ad27176784fba9f8ad42e58f22e1b:db9053e0c2944602bdca9b00abc8bd9f@sentry.io/196284", {
  release: "0.1.35",
  logger: "default",
  environment: "production"
}).install();

const client = new Komada.Client({
  ownerID: keys.ownerID,
  prefix: keys.botInfo.prefix,
  clientOptions: {
    fetchAllMembers: true,
    cmdPrompt: true,
    cmdEditing: true
  },
});

client.login(keys.botInfo.token);


