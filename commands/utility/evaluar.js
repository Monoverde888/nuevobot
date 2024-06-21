const { ModalBuilder, TextInputBuilder, TextInputStyle, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('evaluar')
		.setDescription('EVALUA CODIGO'),

	async execute(interaction) {

		if (interaction.user.id !== process.env.mono) return;

		const modal = new ModalBuilder()
			.setCustomId('eval_modal')
			.setTitle('(Dev) Evaluate JS');

		const text = new TextInputBuilder()
			.setCustomId('eval_code')
			.setLabel("CODIGO??")
			.setStyle(TextInputStyle.Paragraph);

		const secondActionRow = new ActionRowBuilder().addComponents(text);

		modal.addComponents(secondActionRow);
		interaction.showModal(modal);

	},
}