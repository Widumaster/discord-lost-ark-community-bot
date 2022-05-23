import { Interaction } from 'discord.js';
import { Discord } from '../discord.model';

export const PINGPONG_TEST = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        if (!inter.isCommand()) {
            return;
        }

        const { commandName, options } = inter;
        if (commandName === 'ping') {
            await inter.reply('pong');
        } else if (commandName === 'pong') {
            await inter.reply('ping');
        } else if (commandName === 'add') {
            const num1 = options.getNumber('num1')!;
            const num2 = options.getNumber('num2')!;
            inter.reply({
                content: 'The Sum is ' + (num1 + num2),
                ephemeral: true
            });
        }
    }
};
