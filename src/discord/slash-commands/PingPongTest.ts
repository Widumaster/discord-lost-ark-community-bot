import { Interaction, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
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
            console.log('Test');
            inter.reply({
                content: 'The Sum is ' + (num1 + num2),
                ephemeral: true
            });
        } else if (commandName === 'testbutton') {
            const row = new MessageActionRow().addComponents(
                new MessageButton().setCustomId('primary').setLabel('Primary').setStyle('PRIMARY')
            );

            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://discord.js.org')
                .setDescription('Some description here');

            await inter.reply({
                content: 'TestButton!',
                ephemeral: true,
                embeds: [embed],
                components: [row]
            });
        }
    }
};
