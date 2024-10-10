const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StingSelectMenuBuilder, Events, ButtonBuilder, editEmbed, Collection } = require("discord.js");
const MusicBot = require("./structures/Client");
const client = new MusicBot();
const GiveawayManager = require("./handlers/GiveawayManager");
client.connect()
const util = require('./handlers/util');
const config = require('./config');

client.util = new util(client);
client.giveawaysManager = new GiveawayManager(client);
client.emoji = {
  'tick': '<:tick:1292960123240845357>',
  'cross': '<:cross:1292960182657355847>',
  'dot': '<a:dot:1292973935553413120>',
  'giveaway': '<:giveaways:1292959910807605332>',
  'music': '<:music:1292960008715239487>',
  'volumehigh': '<:volhigh:1292970687635521597>',
  'play': '<:play:1292970742098563095>',
  'stop': '<:Pause:1292970818258599977>',
  'skip': '<:skip:1292970916728274964>',
  'resume': '<:Pause:1292970818258599977>'
};


client.userSettings = new Collection();
client.color = '#e12020'





module.exports = client; 

client.on(Events.InteractionCreate, async interaction => {

  if (!interaction.isStringSelectMenu()) return;

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

    let options = interaction.values;
    let funny = options[0]

if(funny === 'seven') {
const embed7 = new EmbedBuilder()
  .setColor(client.color)
  .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
    .setAuthor({name: ` Help Panel`,iconURL: client.user.displayAvatarURL()})
.setTitle("**__Image__**")
  .setDescription(`\n\n\`achi, fuck, slap, cat, dog, meeting\`\n\n`)
  interaction.update({embeds: [embed7], ephemeral: true})
  return
}
if(funny === 'sixth') {
   const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Moderation__**")
      .setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, hackban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
}

if(funny === 'fifth') {
  const embed2 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
.setDescription(`<a:dot:1292973935553413120> Prefix on this server : \`${client.config.prefix}\`\n<a:dot:1292973935553413120> Type **\`${client.config.prefix}\`help** for more info\n<a:dot:1292973935553413120> Total commands: \`${client.commands.size}\`\n**[Invite Me](${config.links.invite}) | [Support HQ](${config.links.support})**`)
   .addFields([
     {name : `**__Main Categories__**` , value : `**<:automod:1292959727747334246> Moderation\n<:info:1292959962657722570> Information\n<:music:1292960008715239487> Music\n<:filters:1292959860669022280> Filters\n<:giveaways:1292959910807605332> Giveaway\n<:Gaming:1292959634029678743> Fun\n<:cold:1292959769270681642> Image\n<:voice:1292960236210225173> Voice\n<:settings:1292960077866864700> Settings\n<:Nsfw:1292959687905509386> Nsfw\n<:custom:1292959813474713751> Custom Roles\n\n**__Links__**\n [Support](https://discord.gg/booshub) | [Invite](${client.config.links.invite}) ** `}
])
.setThumbnail(client.user.displayAvatarURL())
    .setImage("https://media.discordapp.net/attachments/1291550485807104131/1292983346334273650/giy.gif?ex=6705b814&is=67046694&hm=28ca52cc2768782d23f8a6cb2be8cc6d3a3c55c44e4fba035aed8f2d9b5c89c7&=&width=374&height=48")
    .setColor(client.color)
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed2], ephemeral: true })
        return
}

if(funny === 'first') {
  const embed4 = new EmbedBuilder()
    .setAuthor({name:` Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Information__**")
      .setDescription(`\n\n\`about, invite, ping, node, stats, help, avatar, banner, servericon, serverbanner, userinfo, serverinfo, uptime, firstmsg, roleinfo, profile, membercount, bug, announce, embedsay, boostcount, dm\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed4], ephemeral: true })
        return
}
if(funny === 'second') {
  const embed5 = new EmbedBuilder()

  .setAuthor({name:`Help Panel`,iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Music__**")
    .setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`)

    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})});

 interaction.update({ embeds: [embed5], ephemeral: true })
        return
}
  if(funny === 'eight') {
const embed18 = new EmbedBuilder()
  .setColor(client.color)
  .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})

.setTitle("**__Fun__**")
  .setDescription(`\n\n\`hack, meme, ascii, math, howgay, howdumb\`\n\n`)
  interaction.update({embeds: [embed18], ephemeral: true})
  return
  }
  if(funny === 'fourth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Settings__**")
      .setDescription(`\n\n\`adddj, removedj, toggledj, prefix\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }

   if(funny === 'nineth') {
  const embedn = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Custom Roles__**")
      .setDescription(`\n\n\`rsetup, vip, guest, friend, official, girl, rgirl, rvip, rofficial, rguest, rfriend\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embedn], ephemeral: true })
        return
   }
  if(funny === 'tenth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Giveaway__**")
      .setDescription(`\n\n\`gstart, gend, greroll, glist\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }

  if(funny === 'eleventh') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**Voice**")
      .setDescription(`\n\n\`vcmute, vcunmute, vcdeafen, vcundeafen, vckick, vclist, vcmove\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }
  if(funny === 'xdnsfw') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Nsfw__**")
      .setDescription(`\n\n\`aass, abdsm, ablowjob, acum, adoujin, afeet, afemdom, afoxgirl, agif, aglasses, ahentai, amaid, amasturbation, anetorare, apanties, aorgy, apussy, aschool, asuccubus, atentacles, auniform, athighs, ayuri\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

        interaction.update({ embeds: [embed6], ephemeral: true })
        return
    }
  if(funny === 'owner') {
    const embed6 = new EmbedBuilder()
      .setAuthor({name:`Help Panel`,
        iconURL:client.user.displayAvatarURL()})
      .setTitle("**__Owner__**")
        .setDescription(`\n\n\`eval, leaveserver, noprefix, reload, say, serverlist\`\n\n`)
    .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.color)
      .setTimestamp()
      .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

          interaction.update({ embeds: [embed6], ephemeral: true })
          return
      }

module.exports = client;
})

