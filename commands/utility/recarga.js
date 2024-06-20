/* const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('recarga')
		.setDescription('RECARGA UN COMANDOOOOOOOO')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('Q COMANDO.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		if (!command) {
			return interaction.reply(`[QUE ONDA] NO EXISTE \`${commandName}\`!`);
		}

		delete require.cache[require.resolve(`../${command.category}/${command.data.name}.js`)];

		try {
	        interaction.client.commands.delete(command.data.name);
	        const newCommand = require(`../${command.category}/${command.data.name}.js`);
	        interaction.client.commands.set(newCommand.data.name, newCommand);
	        await interaction.reply(` \`${newCommand.data.name}\` FUE RECARGADO! YAHOOOOOOOOO! <:ojo:854622067680084009> `);
		} catch (error) {
	        console.error(error);
	        await interaction.reply(`[QUE ONDA] NO PUDE RECARGAR \`${command.data.name}\`:\n\`${error.message}\``);
		}
	},
};
*/
/* eslint-disable indent */
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
    .setName('recarga')
    .setDescription('RECARGA UN COMANDOOOOOOOO'),
	async execute(interaction) {
		await interaction.reply('NO FUNCIONOOOOOOOO <:ojo:854622067680084009> ');
	},
};
