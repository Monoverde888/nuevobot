const Keyv = require('keyv');
const { SlashCommandBuilder } = require('discord.js');
const keyv = new Keyv('sqlite://./db.sqlite');
keyv.on('error', err => console.error('Keyv connection error:', err));
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
