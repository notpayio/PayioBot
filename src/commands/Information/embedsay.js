const db = require("old-wio.db");
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
var pattern = new RegExp(
  "^(https?:\\/\\/)?" +
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
  "((\\d{1,3}\\.){3}\\d{1,3}))" +
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
  "(\\?[;&a-z\\d%_.~+=-]*)?" +
  "(\\#[-a-z\\d_]*)?$",
  "i"
);

module.exports = {
    name: "embedsay",
    category: "Information",
    aliases: ["esay", "ebdsay"],
    description: "say through embed",
    args: false,
    usage: "say <input>",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
   message.delete();

    let Content = args.join(" ");

    if (!Content)
      return message.channel.reply(`<:cross:1292960182657355847> Please Give Me Something To Say!`);

    function UrlCheck(str) {
      return pattern.test(str);
    }

    if (UrlCheck(Content) === true) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.reply(
        `<:cross:1292960182657355847> Links Is Not Allowed | Only Administrators Can Use Links!`
                             );
      }
    }

    let embed = new EmbedBuilder()
      .setColor(client.color)
    
      .setDescription(`${Content}`)
     // .setTimestamp();
      

    return message.channel.send({embeds: [embed]});

      
  }
}