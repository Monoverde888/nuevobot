const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quieneres')
		.setDescription('¿¿¿¿QUIEN SOY????'),
	async execute(interaction) {
		await interaction.reply('ES UN SECRETO!!');
		await wait(2_500)
		await interaction.editReply("SOY NACHIIII12 REALMENTE")
	},
};