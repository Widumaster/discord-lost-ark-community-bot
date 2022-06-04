import { ButtonInteraction, EmbedFieldData, MessageEmbed } from 'discord.js';
import { Discord, TGroup } from '../discord.model';
import { LinkedList } from './LinkedList';

export class GroupBuilder {
    private _groupMember: LinkedList<TGroup>;
    private _membercache: TGroup[] = [];

    constructor() {
        this._groupMember = new LinkedList<TGroup>();
    }

    groupBuildSign_IN(
        embed: MessageEmbed,
        Buttoninter: ButtonInteraction,
        discord: Discord
    ): MessageEmbed | null {
        let newMember: TGroup = {
            partyMember: [Buttoninter.user.id],
            memberclass: ['zerker'],
            memberiLevel: ['1340+']
        };
        this._groupMember.addMember(newMember);

        let embed2 = this.groupBuildEmbed(embed, Buttoninter, discord);

        return embed2;
    }

    groupBuildEmbed(
        embed: MessageEmbed,
        Buttoninter: ButtonInteraction,
        discord: Discord
    ): MessageEmbed | null {
        this._membercache = this._groupMember.getAllMember();

        let counter = 0;
        while (counter % 8 != 0 || this._membercache[counter] != null) {
            if (this._membercache[counter] != null) {
            } else {
                this._membercache[counter] = {
                    partyMember: [' '],
                    memberclass: [' '],
                    memberiLevel: [' ']
                };
            }
            counter++;
        }

        console.log(this._membercache.length);

        console.log(this._membercache);

        let newembed = embed;
        let helpembed1: EmbedFieldData[] = [];
        let helpembed2: EmbedFieldData[] = [];
        let helpembed3: EmbedFieldData[] = [];
        let helpembed4: EmbedFieldData[] = [];
        newembed.setFields();
        counter = 0;
        do {
            /*(helpembed1 = {
                name: 'Group ' + this._membercache.length / 8,
                value: '\u200B',
                inline: true
            }),
                {
                    name: 'Group ' + this._membercache.length / 8,
                    value: '\u200B',
                    inline: true
                };*/

            helpembed1 = [
                {
                    name: 'Group ' + this._membercache.length / 8,
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Party 1',
                    value:
                        '#1 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 8].partyMember +
                        '>\n#2 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 7].partyMember +
                        '> ',
                    inline: true
                },
                {
                    name: '\u200B',
                    value:
                        '#3 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 6].partyMember +
                        '>\n#4 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 5].partyMember +
                        '> ',
                    inline: true
                },
                { name: '\u200B', value: '\u200B', inline: false },
                { name: '\u200B', value: '\u200B', inline: true },
                {
                    name: 'Party 2',
                    value:
                        '#5 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 4].partyMember +
                        '>\n#6 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 3].partyMember +
                        '>',
                    inline: true
                },
                {
                    name: '\u200B',
                    value:
                        '#7 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 2].partyMember +
                        '>\n#8 <@' +
                        this._membercache[(this._membercache.length / 8) * 8 - 1].partyMember +
                        '>',
                    inline: true
                },
                { name: '\u200B', value: '\u200B', inline: false }
            ];

            counter++;

            if (counter == 2) {
                helpembed3 = helpembed1;
                for (let i = 0; i < 8; i++) {
                    helpembed1.push(helpembed3[i]);
                }
            }
            if (counter == 3) {
                helpembed4 = helpembed1;
                for (let i = 0; i < 8; i++) {
                    helpembed1.push(helpembed4[i]);
                }
            }

            newembed.setFields(helpembed1);
        } while (this._membercache.length / 8 < counter);

        return newembed;
    }
}

/*private groupBuild_order(groupmember: TGroup, groupsize: Number) {
        /* let tempGroup = this._groupMember;
        let counter = 0;
        let counter2 = 0;

        for (var partymember in this._groupMember) {
            tempGroup[counter].partyMember[counter2] = partymember;
            counter2++;
            if (counter2 == 8) counter++;
        }

        /*let returnembed = {
            name: 'Party 1',
            value: '#1 <@' + this._groupMember[0].partyMember[0] + '>\n#2 Widumaster',
            inline: true
        };
    }*/

/*groupBuildSign_OUT(embed: MessageEmbed, discord: Discord): MessageEmbed | null {
        embed = embed.setFields();
        return embed;
    }*/

/*callback: async (embed: MessageEmbed, discord: Discord): Promise<MessageEmbed | null> => {
        this.groupMember = '';
        return null;
    }
};

export const GROUP_BUILD_SIGNOUT = {
    callback: async (embed: MessageEmbed, discord: Discord): Promise<MessageEmbed | null> => {
        return null;
    }
};*/

/*{ name: 'Group 1', value: '\u200B', inline: true },
        { name: 'Party 1', value: '#1 @Felix_#7853\n#2 Widumaster', inline: true },
        { name: '\u200B', value: '#3 Widumaster\n#4 Widumaster', inline: true },
        { name: '\u200B', value: '\u200B', inline: false },
        { name: '\u200B', value: '\u200B', inline: true },
        { name: 'Party 2', value: '#5 Widumaster\n#6 Widumaster', inline: true },
        { name: '\u200B', value: '#7 Widumaster\n#8 Widumaster', inline: true },
        { name: '\u200B', value: '\u200B', inline: false }*/
