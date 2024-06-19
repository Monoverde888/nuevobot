const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
            console.error(`NO EXISTE NINGUN COMANDO QUE SE LLAME ${interaction.commandName} IDIOTITA.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'NO PUEDOOOOOOO!', ephemeral: true });
			} else {
                await interaction.reply({ content: 'AAAAA NO PUEDO!!!!!!!', ephemeral: true });
			}
		}
	},
};