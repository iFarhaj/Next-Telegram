import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
const TelegramBot = require("node-telegram-bot-api");

bot.setWebHook("https://next-telegram-nine.vercel.app/api/telegram");
console.log("Webhook set!");


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text;

      // پاسخ دادن به پیام کاربر
      await bot.sendMessage(chatId, `شما گفتید: ${text}`);
    }

    res.status(200).end(); // موفقیت‌آمیز
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
