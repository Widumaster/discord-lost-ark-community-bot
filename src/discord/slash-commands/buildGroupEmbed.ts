import { ButtonInteraction, MessageEmbed } from 'discord.js';
import { Discord, TGroup } from '../discord.model';

export class GroupBuilder {
    private _groupMember: TGroup[] | null;
    private _membercache: TGroup;

    constructor() {
        this._groupMember = null;
        //this._groupMember[0].partyMember[0] = '';
    }

    groupBuildSign_IN(
        embed: MessageEmbed,
        Buttoninter: ButtonInteraction,
        discord: Discord
    ): MessageEmbed | null {
        if (this._groupMember === null) {
            const group: TGroup[] = [
                {
                    partyMember: ['', '', '', '', '', '', '', ''],
                    memberclass: ['', '', '', '', '', '', '', ''],
                    memberiLevel: ['', '', '', '', '', '', '', '']
                }
            ];
            this._groupMember = group;
            this._groupMember[0].partyMember[0] = Buttoninter.user.id;
        } else {
            for (let i = 0; i < 8; i++) {
                if (this._groupMember[this._groupMember.length - 1].partyMember[i] == '') {
                    this._groupMember[this._groupMember.length - 1].partyMember[i] =
                        Buttoninter.user.id;
                    break;
                }
            }

            this._groupMember.forEach(element =>
                this.groupBuild_update(element, this._groupMember.length)
            );

            let newembed = embed;
            newembed.setFields(
                { name: 'Group 1', value: '\u200B', inline: true },
                {
                    name: 'Party 1',
                    value:
                        '#1 <@' +
                        this._groupMember[0].partyMember[0] +
                        '>\n#2 <@' +
                        this._groupMember[0].partyMember[1] +
                        '> ',
                    inline: true
                },
                {
                    name: '\u200B',
                    value:
                        '#3 <@' +
                        this._groupMember[0].partyMember[2] +
                        '>\n#4 <@' +
                        this._groupMember[0].partyMember[3] +
                        '> ',
                    inline: true
                },
                { name: '\u200B', value: '\u200B', inline: false },
                { name: '\u200B', value: '\u200B', inline: true },
                {
                    name: 'Party 2',
                    value:
                        '#5 <@' +
                        this._groupMember[0].partyMember[4] +
                        '>\n#6 <@' +
                        this._groupMember[0].partyMember[5] +
                        '>',
                    inline: true
                },
                {
                    name: '\u200B',
                    value:
                        '#7 <@' +
                        this._groupMember[0].partyMember[6] +
                        '>\n#8 <@' +
                        this._groupMember[0].partyMember[7] +
                        '>',
                    inline: true
                },
                { name: '\u200B', value: '\u200B', inline: false }
            );

            return newembed;
        }
    }

    private groupBuild_update(groupmember: TGroup, groupsize: Number) {
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
        };*/
    }

    groupBuildSign_OUT(embed: MessageEmbed, discord: Discord): MessageEmbed | null {
        embed = embed.setFields();
        return embed;
    }
}

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
