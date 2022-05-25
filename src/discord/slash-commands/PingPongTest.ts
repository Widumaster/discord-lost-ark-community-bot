import {
    ButtonInteraction,
    Interaction,
    MessageActionRow,
    MessageButton,
    MessageEmbed
} from 'discord.js';
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
        } else if (commandName === 'test') {
            console.log('Test2');
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton().setCustomId('Yes').setLabel('Confirm').setStyle('SUCCESS')
                )
                .addComponents(
                    new MessageButton().setCustomId('No').setLabel('Cancel').setStyle('DANGER')
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

            const filter = (btnInter: Interaction) => {
                //btnInter.deferUpdate();
                return inter.user.id === btnInter.user.id;
            };

            const collector = inter.channel.createMessageComponentCollector({
                filter,
                max: 1,
                time: 1000 * 15
            });

            collector.on('collect', (Buttoninter: ButtonInteraction) => {
                Buttoninter.reply({
                    content: 'You clicked yes',
                    ephemeral: true
                });
            });

            collector.on('end', async collection => {
                collection.forEach(click => console.log(click.user.id, click.customId));

                if (collection.first()?.customId === 'Yes') {
                    console.log('He clicked yes indeed');
                }

                await inter.editReply({
                    content: 'Button has been clicked',
                    components: []
                });
            });
        }
    }
};
