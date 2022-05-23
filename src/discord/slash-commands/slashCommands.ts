import { Constants } from 'discord.js';
import { Discord, TSlashCommands } from '../discord.model';

export const SLASH_COMMANDS: TSlashCommands = {
    callback: async (
        constant: typeof Constants.ApplicationCommandOptionTypes,
        discord: Discord
    ): Promise<void> => {
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
            description: 'Replies with pong'
        });

        commands?.create({
            name: 'pong',
            description: 'Replies with ping.'
        });

        commands?.create({
            name: 'add',
            description: 'Adds two numbers together.',
            options: [
                {
                    name: 'num1',
                    description: 'The first Number!',
                    required: true,
                    type: constant.NUMBER
                },
                {
                    name: 'num2',
                    description: 'The second Number!',
                    required: true,
                    type: constant.NUMBER
                }
            ]
        });
    }
};
