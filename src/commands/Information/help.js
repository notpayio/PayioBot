const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");
const config = require('../../config');

module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        let embeds = [
            new EmbedBuilder().setAuthor({ name:  `Help Panel`, iconURL: client.user.displayAvatarURL() }).setDescription(`<a:dot:1292973935553413120> Prefix on this server : \`${prefix}\`\n<a:dot:1292973935553413120> Type **\`${prefix}\`help** for more info\n<a:dot:1292973935553413120> Total commands: \`${client.commands.size}\`\n**[Invite Me](${config.links.invite}) | [Support HQ](${config.links.support})**`).addFields([{ name: `**__Main Categories__**`, value: `**<:automod:1292959727747334246> Moderation\n<:info:1292959962657722570> Information\n<:music:1292960008715239487> Music\n<:filters:1292959860669022280> Filters\n<:giveaways:1292959910807605332> Giveaway\n<:Gaming:1292959634029678743> Fun\n<:cold:1292959769270681642> Image\n<:voice:1292960236210225173> Voice\n<:settings:1292960077866864700> Settings\n<:Nsfw:1292959687905509386> Nsfw\n<:custom:1292959813474713751> Custom Roles\n\n**__Links__**\n [Support](https://discord.gg/mfop) | [Invite](${client.config.links.invite}) ** ` }]).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp().setImage("https://media.discordapp.net/attachments/1000843048911110234/1293546837520814081/standard.gif?ex=6707c4df&is=6706735f&hm=8334a61a85fda472add9232ad6160d4187204d87b6d658972b718b58135f45d2&="),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Moderation \`[17]\`**").setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Information \`[20]\`**").setDescription(`\n\n\`about, invite, ping, node, stats, help, avatar, banner, servericon, serverbanner, userinfo, serverinfo, uptime, firstmsg, roleinfo, profile, membercount, bug, announce, embedsay\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Music \`[30]\`**").setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Giveaway \`[4]\`**").setDescription(`\n\n\`gstart, greroll, gend, glist\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Fun \`[6]\`**").setDescription(`\n\n\`hack, meme, ascii, math, howgay, howdumb\`\n\n`).setColor(client.color).setThumbnail(client.user.displayAvatarURL()).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Image \`[13]\`**").setDescription(`\n\n\`achi, kiss, hug, fuck, slap, cat, dog, meeting, pat, ego, punch, waifu, cry\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Voice \`[6]\`**").setDescription(`\n\n\`vcdeafen, vcundeafen, vclist, vcmute, vcunmute, vckick\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Settings \`[4]\`**").setDescription(`\n\n\`adddj, removedj, toggledj, prefix\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Nsfw \`[23]\`**").setDescription(`\n\n\`aass, abdsm, ablowjob, acum, adoujin, afeet, afemdom, afoxgirl, agif, aglasses, ahentai, amaid, amasturbation, anetorare, apanties, aorgy, apussy, aschool, asuccubus, atentacles, auniform, athighs, ayuri\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: ` Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Custom Roles \`[11]\`**").setDescription(`\n\n\`rsetup, girl, friend, guest, official, vip, rvip, rgirl, rfriend, rofficial, rguest\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),

        ];
        await pagination(message, embeds);

    }
}

/**
 *
 * @param {CommandInteraction} interaction
 * @param {Array} embeds
 */
async function pagination(interaction, embeds) {

    let row = new ActionRowBuilder().addComponents([
        new StringSelectMenuBuilder()
            .setCustomId('helpop')
            .setPlaceholder('By Vishu💛 Click to Browse Commands!')
            .addOptions([
                {
                    label: 'Home',
                    value: 'fifth',
                    emoji: '<:home:1293001871044378714>',
                    description: 'Go Back To The Home Page'
                },
                {
                    label: 'Moderation',
                    value: 'sixth',
                    emoji: '<:automod:1292959727747334246>',
                    description: 'Get All Moderation Commands List'
                },
                {
                    label: 'Information',
                    value: 'first',
                    emoji: '<:info:1292959962657722570>',
                    description: 'Get All Information Commands List'
                },
                {
                    label: 'Music',

                    value: 'second',
                    emoji:
                        '<:music:1292960008715239487>',
                    description: 'Get All Music Commands List'
                },
                {
                    label: 'Giveaway',
                    value: 'tenth',
                    emoji: '<:giveaways:1292959910807605332>',
                    description: 'Get All Giveaway Commands List'
                },
                {
                    label: 'Fun',

                    value: 'eight',
                    emoji: '<:Gaming:1292959634029678743> ',
                    description: 'Get All Fun Commands List'
                },

                {
                    label: 'Image',
                    value: 'seven',
                    emoji: '<:cold:1292959769270681642>',
                    description: 'Get All Image Commands List'
                },
                {
                    label: 'Voice',
                    value: 'eleventh',
                    emoji: '<:voice:1292960236210225173>',
                    description: 'Get All Voice Commands List'
                },
                {
                    label: 'Settings',

                    value: 'fourth',
                    emoji: '<:settings:1292960077866864700>',
                    description: 'Get All Setting Commands List'
                },
                {
                    label: 'Nsfw',
                    value: 'xdnsfw',
                    emoji: '<:Nsfw:1292959687905509386>',
                    description: 'Get All Nsfw Commands List'
                },
                {
                    label: 'Custom Roles',
                    value: 'nineth',
                    emoji: '<:custom:1292959813474713751>',
                    description: 'Get All Custom Roles Commands List'
                },
                {
                    label: 'Owner',

                    value: 'owner',
                    emoji: '<:owner:1293002977740849172>',
                    description: 'Get All Owner Commands List'
                },
            ])
    ]);
    let row2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setLabel("Invite Me")
                .setEmoji('1056925359750262824')
                .setStyle(ButtonStyle.Link)
                .setURL(`${config.links.invite}`),

            new ButtonBuilder()
                .setLabel("Support HQ")
                .setStyle(ButtonStyle.Link)
                .setEmoji('1056925477849284608')
                .setURL(`${config.links.support}`)
        ]);

    // send message if embeds is 1
    if (embeds.length === 1) {
        if (interaction.deferred) {
            return interaction.followUp({
                embeds: [embeds[0]],
            });
        } else {
            return interaction.reply({
                embeds: [embeds[0]],
                fetchReply: true,
            });
        }
    }

    embeds = embeds.map((embed, index) => {
        return embed.setFooter({
            text: `Requested by ` + interaction.author.tag,
            iconURL: interaction.author.displayAvatarURL({ dynamic: true }),
        });
    });

    let sendMsg;
    if (interaction.deferred) {
        sendMsg = await interaction.followUp({
            embeds: [embeds[0]],
            components: [row, row2],
        });
    } else {
        sendMsg = await interaction.reply({
            embeds: [embeds[0]],
            components: [row, row2],
        });
    }

    let filter = (m) => m.member.id === interaction.member.id;

    const collector = await sendMsg.createMessageComponentCollector({
        filter: filter,
        // time: 30000/2,
    });
    let currentPage = 0;
    collector.on("collect", async (b) => {
        if (b.isButton()) {
            await b.deferUpdate().catch((e) => null);
            // page first
            switch (b.customId) {
                case "0":
                    {
                        if (currentPage != 0) {
                            currentPage = 0;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "1":
                    {
                        if (currentPage != 0) {
                            currentPage -= 1;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        } else {
                            currentPage = embeds.length - 1;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "2":
                    {
                        row, row2.components.forEach((btn) => btn.setDisabled(true));
                        await sendMsg
                            .delete({
                                embeds: [embeds[currentPage]],
                                components: [row, row2],
                                //  fetchReply: false,
                            })
                            .catch((e) => null);

                    }
                    break;
                case "3":
                    {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        } else {
                            currentPage = 0;
                            await sendMsg
                                .edit({
                                    embeds: [embeds[currentPage]],
                                    components: [row, row2],
                                })
                                .catch((e) => null);
                        }
                    }
                    break;
                case "4":
                    {
                        currentPage = embeds.length - 1;
                        await sendMsg
                            .edit({
                                embeds: [embeds[currentPage]],
                                components: [row, row2],
                            })
                            .catch((e) => null);
                    }
                    break;

                default:
                    break;
            }
        }
    });

    collector.on("end", async () => {
        row, row2.components.forEach((btn) => btn.setDisabled(true));
        await sendMsg
            .edit({
                embeds: [embeds[currentPage]],
                components: [row, row2],
            })
            .catch((e) => null);
    });

};