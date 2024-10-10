require("dotenv").config();

module.exports = {
    token: process.env.token || "",
    clientID: process.env.cid || "", 
    prefix: "!", 
    ownerID: process.env.ownerid || "",
    guildID: process.env.guildid || "",
    SpotifyID: "aece5b4d7d27426ebef592a75bd43a2c",
    SpotifySecret:  "79a8a54525324e9aa3291eeb880ff287",
    mongourl: "mongodb+srv://s:PZVqiwNH9wQuU8ZA@cluster0.q2196.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    embedColor: "#ff0606",
    logs: process.env.LOGS || "",
    logs1: process.env.LOGS1 || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud,spotify",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1000843048911110234/1293546837520814081/standard.gif?ex=6707c4df&is=6706735f&hm=8334a61a85fda472add9232ad6160d4187204d87b6d658972b718b58135f45d2&=', 
        support: process.env.SUPPORT || 'https://discord.gg/mfop',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1040518519491666020&permissions=8&integration_type=0&scope=bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "lavalinkv3-id.serenetia.com",
            port: parseInt(process.env.NODE_PORT || "443"),
            password: process.env.NODE_PASSWORD || "BatuManaBisa",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),
            }
           ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}


