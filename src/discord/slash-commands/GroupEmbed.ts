import { Interaction, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { Discord } from '../discord.model';

export const GROUP_EMBED = {
    callback: async (inter: Interaction, discord: Discord): Promise<string[] | null> => {
        if (!inter.isCommand()) {
            return null;
        }

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
            .setColor('#00ffff')
            .setTitle('Valtan NM - Samstag 19:15')
            .setURL(
                'https://www.youtube.com/watch?v=I5_KTLYe99A&list=PLY6pU7ymh6majrEWPYd-BNG0HO52mlnYJ'
            )
            /*.setAuthor({
                name: 'Some name',
                iconURL: 'https://i.imgur.com/AfFp7pu.png',
                url: 'https://discord.js.org'
            })*/
            .setDescription('Click Title for a quick Guide (14:05 minutes)')
            .setThumbnail(
                'https://itemlevel.b-cdn.net/wp-content/uploads/2022/05/lost-ark-how-to-efficiently-prepare-for-valtan-release-758x426.jpg'
            )
            .addFields(
                { name: 'Group 1', value: '\u200B', inline: true },
                { name: 'Party 1', value: '#1 <@226748073496281088>\n#2 Widumaster', inline: true },
                { name: '\u200B', value: '#3 Widumaster\n#4 Widumaster', inline: true },
                { name: '\u200B', value: '\u200B', inline: false },
                { name: '\u200B', value: '\u200B', inline: true },
                { name: 'Party 2', value: '#5 Widumaster\n#6 Widumaster', inline: true },
                { name: '\u200B', value: '#7 Widumaster\n#8 Widumaster', inline: true },
                { name: '\u200B', value: '\u200B', inline: false }
            )
            .addFields(
                { name: 'Group 2', value: '\u200B', inline: true },
                { name: 'Party 1', value: '#1 Widumaster\n#2 Widumaster', inline: true },
                { name: '\u200B', value: '#3 Widumaster\n#4 Widumaster', inline: true },
                { name: '\u200B', value: '\u200B', inline: false },
                { name: '\u200B', value: '\u200B', inline: true },
                { name: 'Party 2', value: '#5 Widumaster\n#6 Widumaster', inline: true },
                { name: '\u200B', value: '#7 Widumaster\n#8 Widumaster', inline: true }
            );

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton().setCustomId('SignUp').setLabel('Sign Up').setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('SignOut')
                    .setLabel('Cancel Participation')
                    .setStyle('DANGER')
            );

        //.setImage('https://i.imgur.com/AfFp7pu.png')
        //.setTimestamp()
        /*.setFooter({
                text: 'Some footer text here',
                iconURL: 'https://i.imgur.com/AfFp7pu.png'
            })*/ const msg = { embeds: [groupEmbeded], components: [row] };
        await inter.channel.send(msg);

        const channelId_messageId = [inter.channelId, inter.channel.lastMessage.id];
        return channelId_messageId;

        //let contenToStick = { embeds: [groupEmbeded], components: [row] };

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
