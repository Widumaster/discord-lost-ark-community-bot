import { Message } from 'discord.js';
import { Discord } from '../discord.model';

type Test = {
    stickymessage: string;
    callback: (message: Message, discord: Discord) => Promise<void>;
};

export const STICKY_MESSAGE_HANDLER: Test = {
    stickymessage: null,
    callback: async (message: Message, discord: Discord): Promise<void> => {
        let maxStickyMessageCount = 10;
        let count = 0;
        let channel = '';
        let stickyContent = '';
        let lastStickyMessage: Message;

        if (stickyContent && channel == message.channel.id) {
            count++;
            if (count === maxStickyMessageCount) {
                await lastStickyMessage.delete();
                lastStickyMessage = await message.channel.send(stickyContent);
            }
        }
    }
};
