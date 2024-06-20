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
		const gus = new ButtonBuilder()
			.setCustomId('gus')
			.setLabel('GUS????')
			.setStyle(ButtonStyle.Primary)
			.setEmoji("835153246150066287")
			.setDisabled(true);
		const row = new ActionRowBuilder()
			.addComponents(sigus, nogus, gus);

		const response = await interaction.reply({
			content: `ESTAS SEGURO???`,
			components: [row],
		});
		const collectorFilter = i => i.user.id === interaction.user.id;
		try {
			const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });

			if (confirmation.customId === 'sigus') {
				await confirmation.update({ content: `AMONGAAAAAAAAAAAAAAAS`, components: [] });
			} else if (confirmation.customId === 'nogus') {
				await confirmation.update({ content: 'que onda', components: [] });
			}
		} catch (error) {
			await interaction.editReply({ content: 'chao', components: [] });
		}
	}	};