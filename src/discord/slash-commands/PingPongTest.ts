import { Interaction, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { Discord } from '../discord.model';

export const GROUP_EMBED = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        if (!inter.isCommand()) {
            return;
        }

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton().setCustomId('Yes').setLabel('Confirm').setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton().setCustomId('No').setLabel('Cancel').setStyle('DANGER')
            );

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('GroupBuilder initialized successfully!')
            .setDescription(
                'Group was successfully initialized\nOnly you can see this Message so please ignore :)'
            );

        await inter.reply({
            embeds: [embed],
            ephemeral: true
        });

        const groupEmbeded = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Group Test Message')
            .setDescription('Paste your Group here digga!');

        const msg = { embeds: [groupEmbeded], components: [row] };
        await inter.channel.send(msg);

        let contenToStick = { embeds: [groupEmbeded], components: [row] };

        /*const filter = (btnInter: Interaction) => {
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
                components: [],
                embeds: [embed]
            });
        });*/
    }
};
