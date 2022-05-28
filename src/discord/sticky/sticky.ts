import { Interaction, Message, TextChannel } from 'discord.js';
import { Discord } from '../discord.model';

type Test = {
    stickymessage: string;
    callback: (message: Message, discord: Discord) => Promise<void>;
};

export class StickyHandler {
    private _maxStickyMessageCount: number | null;
    private _count: number | null;
    private _StickyMessageID: string | null;
    private _lastStickyMessage: string | null;
    private _channelId: string | null;
    private _discord: Discord;
    private _eventMessage: Message;

    constructor(discord: Discord) {
        this._maxStickyMessageCount = 7;
        this._count = null;
        this._lastStickyMessage = null;
        this._StickyMessageID = null;
        this._channelId = null;
        this._discord = discord;
    }

    get StickyMessageID(): String {
        return this._StickyMessageID;
    }

    public set contentToStick(channelId_messageId: string[]) {
        this._channelId = channelId_messageId[0];
        this._StickyMessageID = channelId_messageId[1];
        this._lastStickyMessage = channelId_messageId[1];
    }

    unstickMessage(inter: Interaction) {
        if (this._StickyMessageID && this._channelId == inter.channel.id) {
            const chan = <TextChannel>this._discord.bot.channels.cache.get(this._channelId);
            const msg = chan.messages.fetch(this._StickyMessageID).then(async msg => {
                msg.delete();
            });
            this._count = null;
            this._lastStickyMessage = null;
            this._StickyMessageID = null;
            this._channelId = null;
        }
    }

    stickyUpdate(message: Message, discord: Discord) {
        if (this._StickyMessageID && this._channelId == message.channel.id) {
            this._count++;
            console.log(this._count);
            if (this._count === this._maxStickyMessageCount) {
                const chan = <TextChannel>this._discord.bot.channels.cache.get(this._channelId);
                const msg = chan.messages.fetch(this._StickyMessageID).then(async msg => {
                    console.log(msg);
                    await chan.send({ embeds: msg.embeds, components: msg.components });
                    this._StickyMessageID = chan.lastMessage.id;
                    msg.delete();
                });
                this._count = -1;
            }
        }
    }
}
