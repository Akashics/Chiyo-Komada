module.exports = (client, msg, error) => {
  const Raven = require('raven');
  Raven.captureException(error.stack || error.message, {
    level: 'error',
    user: { name: msg.author.username + '#' + msg.author.discriminator, id: msg.author.id, bot: msg.author.bot},
    tags: { command: msg.content || 'Unknown',  }
  });

  if (error.stack) {
    client.emit("error", error.stack);
  } else if (error.message) {
    msg.sendCode("JSON", error.message).catch(err => client.emit("error", err));
  } else {
    msg.sendMessage(error).catch(err => client.emit("error", err));
  }
};
