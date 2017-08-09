exports.run = async (client, msg, [...args]) => {
    const beautify = require('js-beautify').js_beautify;
    const msgs = msg.channel.msgs.array().reverse().filter(msgContent => msgContent.author.id !== msg.client.user.id);

    let code;
    const codeRegex = /```(?:js|json|javascript)?\n?((?:\n|.)+?)\n?```/ig;
    for (let m = 0; m < msgs.length; m++) {
        const msgContent = msgs[m];
        const groups = codeRegex.exec(msgContent.content);
        if (groups && groups[1] && groups[1].length) {
            code = groups[1];
            break;
        }
    }
    if (!code) {
        return msg.channel.sendmsg(`:x: No JS code blocks found.`);
    }
    let beautifiedCode = beautify(code, {
        indent_size: 2,
        brace_style: 'preserve-inline'
    });
    beautifiedCode = this.reduceIndentation(beautifiedCode);
    msg.channel.sendmsg(`${'```js'}\n${beautifiedCode}\n${'```'}`);
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    cooldown: 3,
};

exports.help = {
    name: "beautify",
    description: "Cleanup some of that js trash.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 