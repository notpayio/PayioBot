const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "unbanall",
    category: "Moderation",
    aliases: ["unbanallmember"],
    description: "to unban all user from a server",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      if (!message.member.permissions.has('BanMembers')) {
        message.reply("<:cross:1292960182657355847> You don't have the permissions to unban all");
         return;
     }
      try {
        let banned = 0;
        message.guild.bans.fetch().then((bans) => {
            if (bans.size == 0) {
                const embed = new EmbedBuilder()
                  .setAuthor({name: ` Unbanall Panel`, iconURL:  client.user.displayAvatarURL()})
                  .setDescription(`! There are no banned users.`)
                  .setFooter({text: "Requested by "+ message.author.username, iconURL: message.author.displayAvatarURL()})
                  .setColor("#ff0606");
      message.reply({embeds: [embed]}
              );                
            } else {
      bans.forEach((ban) => {
                message.guild.members.unban(ban.user.id); 
        banned++;
        });
                
    const sai = new EmbedBuilder()
                  .setDescription(`** Unbaning all ${banned} members **`)
                  .setAuthor({name: ` Unbanall Panel`, iconURL: client.user.displayAvatarURL()})
                  .setColor("#ff0606");
        message.reply({embeds: [sai]});
            
            }
      });
    }catch(err){
    message.reply({embeds: [new EmbedBuilder().setColor("Red").setDescription(`${err}`)]});
}
    }
}
