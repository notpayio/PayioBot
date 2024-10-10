const { GiveawaysManager } = require("discord-giveaways");
const Model = require("../schema/Giveaways");

// Explanation at: https://github.com/Androz2091/discord-giveaways/blob/master/examples/custom-databases/mongoose.js
module.exports = class extends GiveawaysManager {
  constructor(client) {
    super(client, {
      default: {
        botsCanWin: false,
        embedColor: '#ff0606',
        embedColorEnd: '#ff0606',
        reaction: '<:giveaways:1292959910807605332>',
      },
    });
  }

  async getAllGiveaways() {
    return await Model.find().lean().exec();
  }

  async saveGiveaway(messageId, giveawayData) {
    await Model.create(giveawayData);
    return true;
  }

  async editGiveaway(messageId, giveawayData) {
    await Model.updateOne({ messageId }, giveawayData, { omitUndefined: true }).exec();
    return true;
  }

  async deleteGiveaway(messageId) {
    await Model.deleteOne({ messageId }).exec();
    return true;
  }
};
