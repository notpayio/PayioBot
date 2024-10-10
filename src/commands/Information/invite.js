const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme", "inv"],
  description: "Get the bot's invite link.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const row = new ActionRowBuilder()
      .addComponents(
         new ButtonBuilder()
      .setLabel("Invite Me")
      .setEmoji('1056925359750262824')
      .setStyle(ButtonStyle.Link)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`),
        
    new ButtonBuilder()
          .setLabel("Support Server")
          .setStyle(ButtonStyle.Link)
          .setEmoji('1056925477849284608')
          .setURL("https://discord.gg/mfop")
      );

    const mainPage = new EmbedBuilder()
      .setAuthor({ name: 'mfop Invite Panel', iconURL: client.user.displayAvatarURL() })
      .setFooter({text: `Requested by ` + message.author.username, iconURL: message.author.displayAvatarURL()})
      //.setThumbnail(message.guild.iconURL())
      .setColor(client.color)
    
      .addFields([{ name: '**__INVITE BOT__**', value: `<a:arrow:1292961436691337277>[Click here to invite Rizz bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`, inline: true },
    { name: '**__Support Server__**', value: `**<a:arrow:1292961436691337277>[Help And Support ](https://discord.gg/mfop)**`, inline: true },
                  ]);
    message.reply({ embeds: [mainPage], components: [row] })
  }
}
