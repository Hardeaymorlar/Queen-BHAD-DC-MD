//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/39a67f78522967f746769.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349159896402";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/39a67f78522967f746769.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU14YkhCVVkwcFlvNHJYMW9aQ0h4amY1blNlTHBUMjMrTTlSSkh6Q2tYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjhXbWpZT1VEcERpcWJEaEdTU2tzMS9wUmppNyswTHM0cnhvK2trcVczRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRGpVM01yRnEvbzFrZjJWRUhKRnBHZXBlRmJoTWJIY1BwMGNvc3lvZ25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYcFMxam9EU290MTJMN2U4TlRwUjdzTzh6dzVweXJNdWhkQnIyeERxL2o0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDbnRyZjJ3cGQvYjlEazgyT3hhZ25ENEplZHJYYzJzNTFMS28xNmtaVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpkZkJCTHVqcG9oOSswSzFHcUM0cGFZZDkrVXlEU1M2UUZOWk0zTlNjeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05RS2dwamFUc09VdkxETG05QUlIWGhqSGRLRzdDYWo0TCtKeXBIZEpHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWpYS3JlU0wxako2NjhYWXdVTjlKSE1KN1B4VDNuQ3hlWGRVUlhEcWpucz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdEVTNONXpvcW9qVVhvUE94eHFSMzc3aXlwRnI3SVVVWjNtenFpMkpaU3l2NWhSdGlOOC9JR0xVcXUyb0Vja0kzQTNoYXNDODhkV0NUK0VhTzR1NGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IjJ5UzBVVGlsajZ6R05CUTdYaWhKcUZNSURHajFsYUNyVTE0U0hPTm16MHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFYVFU3UFB4UUhLTmtzd09FV0l5eVEiLCJwaG9uZUlkIjoiMDg2MWJkNDUtOTkxMC00MTU0LTllMTktNTBkMmU2M2ZkZmE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJPSkRGT0VpUjRVRFBRVy82elRrMXo1Y2xyZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbWZ4amFkQnJuRERhUnlJTVJDM1g1T1dDSHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjdUTTRWUEciLCJtZSI6eyJpZCI6IjIzNDkwOTU3NDEwNDk6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJfRVNTRU5USUFMVkxPR18ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3SzhiUUVFTHY5ejdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldxK2xkU3djNzVHNUd3S2lFd2QzNFk4cDE3QlN0RXVoVUM5bkxzSk1lWEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdpcVBQSVlLVHhzc2s0bjdRODJvZ0Q3bjBOS0JraGJVdzhVejQveVRxOVpLandJa3BpcittSlBPVFpvTHkwQU03N2pxSm9ZNktFYkp0NnRLUWNyUERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkZDhsZGhvRjlQQWF4WStNcHh4dk1GdDFuUEF3VHdaVjRzbzVST1pUSU96dWZIWmhoQ21Ta3VsZ0NSVjkzejdRQUlJUnQvckllcHl5cm55UmNhV1hodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwOTU3NDEwNDk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWcXZwWFVzSE8rUnVSc0NvaE1IZCtHUEtkZXdVclJMb1ZBdlp5N0NUSGx3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMDcyMTk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJoVyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Bot Made By Ademola❤️🔐",
  author: process.env.PACK_AUTHER || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  packname: process.env.PACK_NAME || "♡ Ɓ Ӈ ƛ Ɗ Ɗ Ƈᴸ ᴼ ᴿ ᴰ",
  botname: process.env.BOT_NAME || "ADEMOLA❤️🔐",
  ownername: process.env.OWNER_NAME || "Essentialvlog💙🔐",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
