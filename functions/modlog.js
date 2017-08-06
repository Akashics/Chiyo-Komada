const embedTypes = {
    ban: 0x8e0000,
    unban: 0x00a0bc,
    kick: 0xbc4b00,
    warn: 0xdbdb00,
    mute: 0xdb0050
};


exports.createEmbed = (client, author, target, action, reason) => {
    const embed = new client.methods.Embed();
    const color = embedTypes.hasOwnProperty(action) ? embedTypes[action] : 0x222222;

    embed
        .setColor(color)
        .setTitle("Case #{x}")
        .setAuthor(`${author.username}#${author.discriminator} (${author.id})`, author.avatarURL)
        .setTimestamp()
        .addField('\u200b', '\u200b', true)
        .addField("Action:", client.funcs.toTitleCase(action), true)
        .addField("Target:", `${target.username}#${target.discriminator}`, true)
        .setFooter(target.id, target.avatarURL)
        .setThumbnail(client.user.avatarURL);
    if (!!reason && reason.length > 0) {
        embed.addField("Reason:", reason, true);
    }
    return embed;
};

exports.post = async (client, guild, content) => {
    let modLog = guild.channels.get(client.settings.guilds.get(guild.id).modLog);
    if (!modLog) throw `:x: A modlog channel has not been setup. This action will not be logged!`;
    if (!content.constructor.name === "MessageEmbed") throw `:x: Settings do not permit embed messages. Please send a normal message instead.`;

    // Get Latest Case$
    let lastMessageID = 0, chkContent = "";
    try {
        const log = await modLog.fetchMessages({ limit: 1 });
        const lastMessage = log.first();
        chkContent = (lastMessage.embeds && lastMessage.embeds.length > 0) ? lastMessage.embeds[0].title : lastMessage.content;
        lastMessageID = chkContent.match(/Case \#(\d+)/i)[1];
    } catch (e) { console.log('Something broke with modlogs') }

    if (content.constructor.name === "MessageEmbed") {
        content.setTitle(content.title.replace("{x}", ++lastMessageID));
        return modLog.sendEmbed(content);
    }
    return modLog.send(content.replace("{x}", lastMessageID++));
};