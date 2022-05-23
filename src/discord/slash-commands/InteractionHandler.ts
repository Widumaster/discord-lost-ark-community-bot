import { Interaction } from 'discord.js';
import { Discord, TInteractionHandler } from '../discord.model';
import { PINGPONG_TEST } from './PingPongTest';

export const INTERACTION_HANDLER: TInteractionHandler = {
    callback: async (inter: Interaction, discord: Discord): Promise<void> => {
        await PINGPONG_TEST.callback(inter, discord);
    }
};
