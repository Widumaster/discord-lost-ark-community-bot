import { Collection, EmbedField, MessageComponentInteraction, MessageEmbed } from 'discord.js';
import { Discord } from '../discord.model';

export class GroupBuilder {
    private _groupMember: String[];

    constructor() {
        this._groupMember = [''];
    }

    groupBuildSign_IN(
        embed: MessageEmbed,
        collection: Collection<string, MessageComponentInteraction>,
        discord: Discord
    ): MessageEmbed | null {
        /*{ name: 'Group 1', value: '\u200B', inline: true },
        { name: 'Party 1', value: '#1 <@226748073496281088>\n#2 Widumaster', inline: true },
        { name: '\u200B', value: '#3 Widumaster\n#4 Widumaster', inline: true },
        { name: '\u200B', value: '\u200B', inline: false },
        { name: '\u200B', value: '\u200B', inline: true },
        { name: 'Party 2', value: '#5 Widumaster\n#6 Widumaster', inline: true },
        { name: '\u200B', value: '#7 Widumaster\n#8 Widumaster', inline: true },
        { name: '\u200B', value: '\u200B', inline: false }*/

        console.log(collection.first()?.user.id);
        this._groupMember.push(collection.first()?.user.id);

        let testfield: EmbedField;
        this._groupMember.forEach(
            element => (testfield = this.groupBuild_update(element, this._groupMember.length))
        );

        let newembed = new MessageEmbed();
        newembed = embed;
        newembed.addFields(testfield);

        return newembed;
    }

    private groupBuild_update(groupmember: String, groupsize: Number): EmbedField {
        //if (!groupmember) return null;

        let returnembed = {
            name: 'Party 1',
            value: '#1 <@' + groupmember + '>\n#2 Widumaster',
            inline: true
        };

        return returnembed;
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
