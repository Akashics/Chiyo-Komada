exports.run = async (client, member) => {
    try {
        if (!client.settingGateway.get(member.guild).joinMessage) return;
        console.log(client.settingGateway.get(member.guild).joinMessage)
        if (client.settingGateway.get(member.guild).joinMessage) {
            let user = member.user.username;
            console.log(user)
            let guild = member.guild.name;
            console.log(guild)
            return member.guild.defaultChannel.send(joinclient.settingGateway.get(member.guild).joinMessageMSG);
        }
    } catch (e) {
        Raven.captureException(e);
    }
}