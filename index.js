const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config()


const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//HANDLER SLASH COMMANDS
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[QUE ONDA] EL COMANDO EN ${filePath} NO TIENE PROPIEDAD DATA O EXECUTE.`);
		}
	}
}

client.on(Events.InteractionCreate, async interaction => {
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
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Listo! Soy ${readyClient.user.tag}`);
});


client.login(process.env.token);