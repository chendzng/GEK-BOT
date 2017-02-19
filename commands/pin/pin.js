const commando = require('discord.js-commando');


class Pin extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'pin',
			group: 'pin',
			memberName: 'pin',
			description: 'Pin a message'
		});
	}

	async run(message, args) {

		if (message.patternMatches('-pin A')){
			return true;
		}

		message.reply(message.message);
	}
}

module.exports = Pin;