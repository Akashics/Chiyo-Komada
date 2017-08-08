exports.run = async (client, msg, [...args]) => {
    const keys = require('../../../keys.json');
    let request = require('request');
    let msgSplit = msg.content.split(' ');
    let msgSearch = '';
    let searchOrig = '';
    for (let i = 1; i < msgSplit.length; i++) {
        if (i === 1) {
            searchOrig = msgSplit[1];
        } else {
            searchOrig = searchOrig + ' ' + msgSplit[i];
        }
    }
    msgSearch = 'random: ' + searchOrig;
    request.get('https://ibsear.ch/api/v1/images.json', {
        qs: {
            limit: 100,
            q: msgSearch
        }, headers: { 'X-lbSearch-Key': keys.ibsearch_sfw_key }
    }, (error, response, body) => {
        if (error) {
            return msg.send(':cloud: | An error has occured: ' + error);
        }
        if (!error && response.statusCode == 200) {
            try {
                body = JSON.parse(body);
            } catch (e) {
                console.log(e.getMessage());
            }
            if (typeof (body) !== 'undefined' && body.length > 0) {
                let random = Math.floor(Math.random() * body.length);
                let img = body[random];
                return msg.send(`https://${img.server}.ibsear.ch/${img.path}`);
            } else {
                return msg.send(':cloud: | Nothing was found for the request: ' + searchOrig);
            }
        }
    });
}

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
    name: "iboard",
    description: "Lookup SFW Images on ImageBoard",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 