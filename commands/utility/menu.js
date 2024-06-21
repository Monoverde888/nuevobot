const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('increible menu'),
	async execute(interaction) {
		const select = new StringSelectMenuBuilder()
			.setCustomId('queso')
			.setPlaceholder('QUE ES ESOOOOO')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('bop')
					.setDescription('BOP ESPONGA')
					.setValue('bop'),
				new StringSelectMenuOptionBuilder()
					.setLabel('MOLUSCO')
					.setDescription('BOB MOLUSCO')
					.setValue('molusco'),
				new StringSelectMenuOptionBuilder()
					.setLabel('🧽')
					.setDescription('BO ESPONJA')
					.setValue('esponjoso'),
			);

		const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.reply({
			content: 'QUE ES ESOOOOO',
			components: [row],
		});
	},
};