import { Telegraf } from "telegraf";

const bot = new Telegraf("7002899836:AAGHb0T0q08SJm9r7v0XsVvQExQ0UTOw9So");

(async () => {
  try {
    const webhookUrl = "https://next-telegram-nine.vercel.app/api/telegram"; // Webhook Address
    await bot.telegram.setWebhook(webhookUrl);
    console.log(`Webhook set to: ${webhookUrl}`);
  } catch (error) {
    console.error("Error setting webhook:", error);
  }
})();
