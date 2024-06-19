const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quehaces')
		.setDescription('¿¿¿¿QUE HAGO????'),
	async execute(interaction) {
		await interaction.reply('HOLA!!!!!!!');
	},
};