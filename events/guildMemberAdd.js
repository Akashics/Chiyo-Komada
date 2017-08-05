exports.run = async (client, member) => {
    //if (!client.settingGateway.get(member.guild.id).joinMessage) return;
    console.log("This is guildMemberAdd event   - " + client.settingGateway.get(member.guild).joinMessage)
    console.log(member.user)
    console.log('Avatar URL = ' + member.user.defaultAvatarURL)
    /*return member.channel.send('', {embed: {
    color: 3447003,
    author: {
      name: member.user.username,
      icon_url: member.user.avatarURL
    },
    title: 'This is an embed',
    description: 'This is a test embed to showcase what they look like and what they can do.',
    fields: [{
        name: 'Fields',
        value: 'They can have different fields with small headlines.'
      },
      {
        name: 'Masked links',
        value: 'You can put [masked links](http://google.com) inside of rich embeds.'
      },
      {
        name: 'Markdown',
        value: 'You can put all the *usual* **__Markdown__** inside of them.'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: member.user.avatarURL,
      text: '© Example'
    }
  }
});
*/
}