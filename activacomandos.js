const { REST, Routes } = require('discord.js');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		}
		 else {
			console.log(`[QUE ONDA] EL COMANDO EN ${filePath} NO TIENE PROPIEDAD DATA O EXECUTE.`);
		}
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.token);

// and deploy your commands!
(async () => {
	try {
		console.log(`EMPEZE A REFRESCAR ${commands.length} SLASH COMANDOS`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.yoid, process.env.serverid),
			{ body: commands },
		);

		console.log(`REFRESQUE ${data.length} SLASH COMANDOS.`);
	}
	 catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();