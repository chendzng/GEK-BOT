const commando = require('discord.js-commando');

class Random extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'intro',
			group: 'random',
			memberName: 'roll',
			description: 'Intoducing the bot'
		});
	}

	async run(message, args) {
		message.reply('Anak Gua Richard dan nama gua Agek!');
	}
}

module.exports = Random;