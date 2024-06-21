// at the top of your file
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('el embed mas increible de toda la historia de discord'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
    	.setColor(0x3df011)
	    .setTitle('SUPER EMBED')
	    .setURL('https://mono.monoverde.tech')
	    .setAuthor({ name: 'QUE INCREIBLE', iconURL: "https://owo.oooooooooooooo.ooo/i/k2eoj.png", url: 'https://roblox.com' })
	    .setDescription('miau')
    	.addFields({ name: 'HOLAA', value: 'AMOGUS' })
    	.setImage('https://owo.oooooooooooooo.ooo/i/3uwj1.png')
	    .setTimestamp()

		interaction.reply({ embeds: [embed] });
	},
};