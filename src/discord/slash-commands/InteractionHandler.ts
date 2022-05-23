import { Interaction } from 'discord.js';
import { Discord, TInteractionHandler } from '../discord.model';
import { PINGPONG_TEST } from './PingPongTest';

export const INTERACTION_HANDLER: TInteractionHandler = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        await PINGPONG_TEST.callback(inter, discord);
    }
};

/*const client = discord.bot;
        const guildId = '977588876614967306';
        const guild = client.guilds.cache.get(guildId);
        let commands;
        if (guild) {
            commands = guild.commands;
        } else {
            commands = client.application?.commands;
        }*/
