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
		message.channel.sendMessage(args);
	}
}

module.exports = Pin;