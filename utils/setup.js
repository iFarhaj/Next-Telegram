const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
bot.setWebHook("https://your-vercel-domain.vercel.app/api/telegram");
console.log("Webhook set!");
