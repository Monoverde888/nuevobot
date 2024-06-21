/* eslint-disable */
const { ChannelType, ButtonInteraction, AttachmentBuilder, escapeCodeBlock, codeBlock, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ModalSubmitFields, ModalSubmitInteraction } = require('discord.js');
const { inspect } = require('util');

module.exports = {
	name: "interactionCreate",

	async execute(interaction, client) {
		const { customId, options } = interaction;

		const guildID = interaction.guild.id;
		const userID = interaction.user.id;

		if (!guildID) return;

		if (interaction.isModalSubmit()) {

			switch (customId) {
			case "eval_modal":
				{ const code = interaction.fields.getTextInputValue('eval_code');

				let result = '';
				let error = false;

				try {
					result = inspect(eval(code));
				} catch (err) {
					result = inspect(err);
					error = true;
				}


				await interaction.reply({
					embeds: [new EmbedBuilder().setTitle('Evaluated Code').setDescription(`\`\`\`js\n${escapeCodeBlock(result)}\`\`\``).setTimestamp()]
				});

				interaction.followUp({
					files: [new AttachmentBuilder(Buffer.from(result, 'utf-8')).setName('Evaluated Code.txt')]
				}); }
			}

		} else if (!interaction.isModalSubmit()) {
			return;
		}
	},
}