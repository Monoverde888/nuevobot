const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('quieneres')
		.setDescription('¿¿¿¿QUIEN SOY????'),
	async execute(interaction) {
		await interaction.reply({ content: 'ES UN SECRETO!! SOY NACHIIII12 REALMENTE', ephemeral: true });
	},
};
