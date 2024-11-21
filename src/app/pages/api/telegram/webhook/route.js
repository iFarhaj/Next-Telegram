import { Telegraf } from "telegraf";

const bot = new Telegraf("7002899836:AAGHb0T0q08SJm9r7v0XsVvQExQ0UTOw9So");

export async function POST(req) {
  try {
    const webhookUrl = "https://next-telegram-nine.vercel.app/api/telegram"; // Webhook Address
    await bot.telegram.setWebhook(webhookUrl);

    return new Response(`Webhook successfully set to: ${webhookUrl}`, { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
