import { Interaction, MessageEmbed } from 'discord.js';
import { Discord } from '../discord.model';

export const STICKY_UNSTICK = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        if (!inter.isCommand()) {
            return null;
        }
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Success!')
            .setDescription('Sticky was successfully removed.');

        await inter.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};
