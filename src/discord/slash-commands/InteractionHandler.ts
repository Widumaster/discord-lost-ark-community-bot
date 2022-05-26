import { Interaction } from 'discord.js';
import { Discord, TInteractionHandler } from '../discord.model';
import { GROUP_EMBED } from './PingPongTest';

export const INTERACTION_HANDLER: TInteractionHandler = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        if (!inter.isCommand()) {
            return;
        }

        const { commandName, options } = inter;

        if (commandName === 'test') {
            await GROUP_EMBED.callback(inter, discord);
        } //else if(commandName === 'sticky')
    }
};

/*
 if (commandName === 'ping') {
            await inter.reply('pong');
        } else if (commandName === 'pong') {
            await inter.reply('ping');
        } else if (commandName === 'add') {
            const num1 = options.getNumber('num1')!;
            const num2 = options.getNumber('num2')!;
            console.log('Test');
            inter.reply({
                content: 'The Sum is ' + (num1 + num2),
                ephemeral: true
            });
*/
