import { Interaction } from 'discord.js';
import { Discord, TSlashCommand } from '../discord.model';

export const SLASH_COMMAND: TSlashCommand = {
    command: 'Test',
    desc: [['/Test', 'Slash Befehl Test']],
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        const client = discord.bot;
        const guildId = '977588876614967306';
        const guild = client.guilds.cache.get(guildId);
        let commands;
        if (guild) {
            commands = guild.commands;
        } else {
            commands = client.application?.commands;
        }
        commands?.create({
            name: 'ping',
            description: 'Replies with Pong'
        });

        if (!inter.isCommand()) {
            return;
        }
        const { commandName, options } = inter;
        if (commandName === 'ping') {
            await inter.reply('pong');
            //await inter.channel.send('pong');
        }
    }
};
