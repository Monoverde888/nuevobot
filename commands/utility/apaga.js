const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('apaga')
		.setDescription('APAGATEEEEEEEEE'),
	async execute(interaction) {
		await interaction.reply('ok chao').then(() => {
			console.log("APAGANDO POR ORDEN DE " + interaction.user.tag)
			interaction.client.destroy();
		});
	},
}
