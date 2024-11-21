import { Telegraf } from "telegraf";

const bot = new Telegraf("7002899836:AAGHb0T0q08SJm9r7v0XsVvQExQ0UTOw9So");

bot.on("text", async (ctx) => {
  const userMessage = ctx.message.text; // متن پیام کاربر
  const replyMessage = `شما گفتید: ${userMessage}`; // متن پاسخ

  // ارسال پاسخ به کاربر
  await ctx.reply(replyMessage);
});
bot.start((ctx) => ctx.reply("Welcome"));

export async function POST(req) {
  try {
    const body = await req.json();
    // هندل کردن درخواست Webhook
    await bot.handleUpdate(body);
    return new Response("sent and recieve successfully.", { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
