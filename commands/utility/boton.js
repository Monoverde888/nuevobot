const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("boton")
		.setDescription("BOTON EPICO"),
	async execute(interaction) {
		const sigus = new ButtonBuilder()
			.setCustomId('sigus')
			.setLabel('AMOGUS??')
			.setStyle(ButtonStyle.Success)
			.setEmoji('837145070813446204');
		const nogus = new ButtonBuilder()
			.setCustomId('nogus')
			.setLabel('NOGUS?????')
			.setStyle(ButtonStyle.Danger)
			.setEmoji("839636351468830841");

		const row = new ActionRowBuilder()
			.addComponents(sigus, nogus);

		await interaction.reply({
			content: `ESTAS SEGURO???`,
			components: [row],
		});
	},
};