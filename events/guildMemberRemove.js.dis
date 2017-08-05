exports.run = (client, member) => {
    try {
        if (client.settingGateway.get(member.guild).leaveMessage === 'null') return;
        console.log(client.settingGateway.get(member.guild).joinMessage)
        if (client.settingGateway.get(member.guild).leaveMessage) {
            let user = member.user.username;
            console.log(user)
            let guild = member.guild.name;
            console.log(guild)
            return member.guild.defaultChannel.send(`${client.settingGateway.get(member.guild).leaveMessage}`);
        }
    } catch (e) {
        Raven.captureException(e);
    }
}