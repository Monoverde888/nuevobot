const Keyv = require('keyv');
const { SlashCommandBuilder } = require('discord.js');
const keyv = new Keyv("sqlite:///home/mono/bot/db.sqlite");
keyv.on('error', err => console.error('Keyv connection error:', err));
module.exports = {
	data: new SlashCommandBuilder()
		.setName('db')
		.setDescription('USA LA INCREIBLE BASE DE DATOS SQLITE GRACIAS A A KEYV')
		.addStringOption(option =>
			option.setName('añadir')
				.setDescription('QUE COSA AÑADIR A LA DB SUPER INCREIBLE')
				.setRequired(true)),
	async execute(interaction) {
		const dbAdd = interaction.options.getString('añadir', true)
		await interaction.reply("OK VOY A AÑADIR" + dbAdd + "A LA BASE DE DATOS").then(() => {
			keyv.set("gente", dbAdd).then(() => {
				interaction.editReply("AÑADIDO A LA BASE DE DATOS COMO" + keyv.get("gente", dbAdd))
			});
		});
	},
}

