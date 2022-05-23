import { Interaction } from 'discord.js';
import { Discord } from '../discord.model';

export const PINGPONG_TEST = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        if (!inter.isCommand()) {
            return;
        }
        console.log('Test');
        const { commandName, options } = inter;
        if (commandName === 'ping') {
            await inter.reply('pong');
        } else if (commandName === 'pong') {
            await inter.reply('ping');
        }
    }
};
