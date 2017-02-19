const Discord = require('discord.js'); // discord js
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.commandPrefix = '-';

var token = 'MjgyODQwMTE4MDY5NTU5Mjk2.C4tEWw.PC77EkbRxFgQC3EIHY0Y7x4ibHs';

bot.registry.registerGroups([
		['random', 'random'],
		['pin', 'pin']
	]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')


bot.on('message', (message) => {

	if(message.content == 'hi') {
		// message.reply('pong');
		message.channel.sendMessage('Mamak mu hi');
	}

	if(message.content == 'anjeng' || message.content == 'ANJENG' || message.content == 'MEMEK' || message.content == 'memek') {
		message.reply('ISH ! kok kamu kasar');
	}

	if (message.content.username != 'GEK-BOT' && message.author.username === 'ormalano') {
		message.reply('NIH INI ANAK GUA!');
	}

	if (message.content.username != 'GEK-BOT' && message.author.username === 'Liansan') {
		message.reply('NIH INI SUAMI GUA!');
	}

});

bot.login(token);