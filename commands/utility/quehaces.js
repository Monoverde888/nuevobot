const { AttachmentBuilder, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const mee6 = new AttachmentBuilder("./assets/ASCO.jpg")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quehaces')
		.setDescription('¿¿¿¿QUE HAGO????'),
	async execute(interaction) {
		await interaction.reply('HOLA!!!!!!!');
		await wait(2_000)
		await interaction.editReply({ content: "HAGO TODO PORQUE SOY EL MEJOR BOT DE DISCORD MEJOR QUE MEE6 ES UN ASCO", files: [mee6] })
	},
};