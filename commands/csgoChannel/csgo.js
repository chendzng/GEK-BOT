const commando = require('discord.js-commando');


class Csgo extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'csgo',
			group: 'csgo',
			memberName: 'csgo',
			description: 'Add user into csgo channel'
		});
	}

	async run(message, args) {
		console.log(message.guild.setOwner(message));
	}
}

module.exports = Csgo;