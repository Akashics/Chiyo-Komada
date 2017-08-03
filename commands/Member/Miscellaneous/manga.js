exports.run = async (client, msg, [...args]) => {
    const keys = require('../../keys.json');
    const axios = require('axios');
    let searchQuery = msg.content.substring(client.settingGateway.get(msg.guild).prefix.length + exports.help.name.length + 1);
    if (!searchQuery) return msg.channel.send(':cloud: | I need a manga to search up.');
    try {
        let authRequest = await axios.post(`https://anilist.co/api/auth/access_token`, {
            grant_type: 'client_credentials',
            client_id: keys.anilist_client,
            client_secret: keys.anilist_secret
        });
        let accessToken = authRequest.data.access_token;
        let mangaRequest = await axios({
            url: `https://anilist.co/api/manga/search/${encodeURI(searchQuery)}`,
            params: { access_token: accessToken }
        });
        if (mangaRequest.data.error) {
            if (mangaRequest.data.error.messages[0] === 'No Results.') {
                return msg.channel.send(':cloud: | I searched for ' + searchQuery + ' and could not find anything.');
            }
        }
        if (mangaRequest.data.length === 1) {
            let characters = await loadCharacters(mangaRequest.data[0].id, accessToken);
            let embed = buildResponse(msg, mangaRequest.data[0], characters);
            return msg.channel.send(embed);
        } else if (mangaRequest.data.length > 1) {
            let characters = await loadCharacters(mangaRequest.data[0].id, accessToken);
            let embed = buildResponse(msg, mangaRequest.data[0], characters);
            return msg.channel.send(embed);
        } else {
            return msg.channel.send(':cloud: | I searched for ' + searchQuery + ' and could not find anything.');
        }
    } catch (e) {
        console.error(e);
        await msg.channel.send(':cloud: | An error has occured! ' + e);
    }


    async function loadCharacters(id, token) {
        let characterRequest = await axios({
            url: `https://anilist.co/api/manga/${id}/characters`,
            params: { access_token: token }
        });
        return characterRequest.data.characters;
    }

    function buildResponse(msg, data, characters) {
        let description = data.description.replace(/<br>/g, '');
        description = description.replace(/\n|\\n/g, '');
        description = description.replace(/&mdash;/g, '');
        description = description.replace(/&#039;/g, '');
        description = description.split('.').join('.\n');
        if (description.length > 1024) {
            description = description.substring(0, 1020);
            description += '...';
        }
        let mainCharacters = characters.filter((c) => {
            return c.role === 'Main';
        });
        let characterString = mainCharacters.map(c => {
            return `[${c.name_first}${c.name_last ? ` ${c.name_last}` : ''}](https://anilist.co/character/${c.id})`
        });
        characterString = characterString.join(', ');
        let titleString = data.title_english !== data.title_romaji ? `${data.title_romaji} | ${data.title_english}` : data.title_romaji;
        return {
            embed: {
                "title": titleString,
                "description": description,
                "url": `https://anilist.co/manga/${data.id}/`,
                "color": 0x00ADFF,
                "footer": {
                    "text": `⭐ Manga Rating: ${data.average_score}/100`
                },
                "image": {
                    "url": data.image_url_lge
                },
                "fields": [
                    {
                        "name": `:movie_camera: Genre`,
                        "value": `**${data.genres.join(', ')}**`,
                        "inline": 'true'
                    },
                    {
                        "name": `:1234: # of Characters`,
                        "value": `**${data.total_chapters > 0 ? data.total_chapters : `Unknown`}**`,
                        "inline": 'true'
                    },
                    {
                        "name": `:man_dancing: Characters`,
                        "value": `**${characterString}**`
                    }
                ]
            }
        };
    }
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
    name: "manga",
    description: "Lookup manga things.",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
}; 