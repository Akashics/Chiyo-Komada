exports.loadCharacters = async (id, token, type) => {
	const axios = require('axios');
	let characterRequest = await axios({
		url: `https://anilist.co/api/${type}/${id}/characters`,
		params: { access_token: token }
	});
	return characterRequest.data.characters;
};

exports.buildResponse = async (msg, data, characters, type) => {
	let description = data.description.replace(/<br>/g, '');
	description = description.replace(/\n|\\n/g, '');
	description = description.replace(/&mdash;/g, '');
	description = description.replace(/&#039;/g, '');
	description = description.split('.').join('.\n\n');
	if (description.length > 720) {
		description = description.substring(0, 716);
		description += '...';
	}
	let mainCharacters = characters.filter((c) => {
		return c.role === 'Main';
	});
	let characterString = mainCharacters.map(c => {
		return `[${c.name_first}${c.name_last ? ` ${c.name_last}` : ''}](https://anilist.co/character/${c.id})`;
	});
	characterString = characterString.join(', ');
	let titleString = data.title_english !== data.title_romaji ? `${data.title_romaji} | ${data.title_english}` : data.title_romaji;
	let dataTotal;
	let mediaType;
	switch(type) {
	case 'Manga':
		dataTotal = data.total_chapters;
		mediaType = 'Chapters';
		break;
	case 'Anime':
		dataTotal = data.total_episodes;
		mediaType = 'Episodes';
		break;
	}
	return {
		embed: {
			'title': titleString,
			'description': description,
			'url': `https://anilist.co/${type}/${data.id}/`,
			'color': 0x00ADFF,
			'footer': {
				'text': `⭐ ${type} Rating: ${data.average_score}/100`
			},
			'image': {
				'url': data.image_url_lge
			},
			'fields': [
				{
					'name': ':movie_camera: Genre',
					'value': `**${data.genres.join(', ')}**`,
					'inline': 'true'
				},
				{
					'name': `:1234: # of ${mediaType}`,
					'value': `**${dataTotal > 0 ? dataTotal : 'Unknown'}**`,
					'inline': 'true'
				},
				{
					'name': ':man_dancing: Characters',
					'value': `**${characterString}**`
				}
			]
		}
	};
};