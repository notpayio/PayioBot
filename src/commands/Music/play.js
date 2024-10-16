const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { convertTime } = require("../../utils/convert.js");
const { Player } = require("erela.js");

module.exports = {
  name: "play",
  category: "Music",
  aliases: ["p"],
  description: "Plays audio from any supported source.",
  args: true,
  usage: "<song URL or name>",
  userPerms: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.resolve(["Speak", "Connect"])
      )
    )
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(client.embedColor)
            .setDescription(
              `I don't have enough permissions to execute this command! Please give me permission to \`CONNECT\` or \`SPEAK\`.`
            ),
        ],
      });

    const { channel } = message.member.voice;
    if (
      !message.guild.members.cache
        .get(client.user.id)
        .permissionsIn(channel)
        .has(PermissionsBitField.resolve(["Speak", "Connect"]))
    )
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(client.embedColor)
            .setDescription(
              `I don't have enough permissions to connect to your VC! Please give me permission to \`CONNECT\` or \`SPEAK\`.`
            ),
        ],
      });

    const emojiaddsong = message.client.emoji.addsong;
    const emojiplaylist = message.client.emoji.playlist;

    /**
     * @type {Player}
     */
    let player = client.manager.get(message.guild.id);

    if (!player)
      player = await client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: true,
        volume: 80,
      });

    if (player.state != "CONNECTED") await player.connect();
    const search = args.join(" ");

    let res;
    try {
      res = await player.search(search, message.author);
      if (!player)
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
              .setColor(client.embedColor)
              .setTimestamp()
              .setDescription("Nothing is playing right now..."),
          ],
        });
      if (res.loadType === "LOAD_FAILED") {
        if (!player.queue.current) player.destroy();
        throw res.exception;
      }
    } catch (err) {
      return message.reply(
        `There was an error while searching: ${err.message}`
      );
    }

    switch (res.loadType) {
      case "NO_MATCHES":
        if (!player.queue.current) player.destroy();
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
              .setColor(client.embedColor)
              .setTimestamp()
              .setDescription(`❌ | No matches found for - ${search}`),
          ],
        });
      case "TRACK_LOADED":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new EmbedBuilder()
            .setColor(client.embedColor)
            .setTimestamp()
            .setImage(
              track.displayThumbnail("hqdefault") ??
                (await client.manager.getMetaThumbnail(track.uri))
            )
            .setDescription(`**ADDED TO QUEUE**
            <:music:1292960008715239487> [${track.title}](${track.uri})\n\n**Requester: **<@${track.requester.id}> | **Duration: **\`❯ \`[${convertTime(track.duration)}]\``
            );
          return message.channel.send({ embeds: [thing] });
        }
      case "PLAYLIST_LOADED":
        player.queue.add(res.tracks);
        if (
          !player.playing &&
          !player.paused &&
          player.queue.totalSize === res.tracks.length
        )
          player.play();
        const thing = new EmbedBuilder()
          .setColor(client.embedColor)
          .setTimestamp()
          .setDescription(`**ADDED TO QUEUE**
<:music:1292960008715239487> [${track.title}](${track.uri})\n\n**Requester: **<@${track.requester.id}> | **Duration: **\`❯ \`[${convertTime(track.duration)}]\``
          );
        return message.channel.send({ embeds: [thing] });
      case "SEARCH_RESULT":
        var track = res.tracks[0];
        player.queue.add(track);
        if (!player.playing && !player.paused && !player.queue.size) {
          return player.play();
        } else {
          const thing = new EmbedBuilder()
            .setColor(client.embedColor)
            .setTimestamp()
            .setThumbnail(
              track.displayThumbnail("hqdefault") ??
                (await client.manager.getMetaThumbnail(track.uri))
            )
            .setDescription(`**ADDED TO QUEUE**
<:music:1292960008715239487> [${track.title}](${track.uri})\n\n**Requester: **<@${track.requester.id}> | **Duration: **\`❯ \`[${convertTime(track.duration)}]\``)
            .setImage("https://media.discordapp.net/attachments/1000843048911110234/1293546837520814081/standard.gif?ex=6707c4df&is=6706735f&hm=8334a61a85fda472add9232ad6160d4187204d87b6d658972b718b58135f45d2&=");
          return message.channel.send({ embeds: [thing] });
        }
    }
  },
};
