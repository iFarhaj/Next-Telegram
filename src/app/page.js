"use client";
import { useEffect } from "react";
import { Telegraf } from "telegraf";

export default function Home() {
  useEffect(() => {
    const handleWebhook = async () => {
      const bot = new Telegraf("7002899836:AAGHb0T0q08SJm9r7v0XsVvQExQ0UTOw9So");
      try {
        const webhookUrl = "https://next-telegram-nine.vercel.app/api/telegram"; // Webhook Address
        await bot.telegram.setWebhook(webhookUrl);
        console.log(`Webhook set to: ${webhookUrl}`);
      } catch (error) {
        console.error("Error setting webhook:", error);
      }
    };

    handleWebhook();
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start jus">
        Hi dear Farhad
        <div>Welcome to Next Telegram bot 🙌</div>
      </main>
    </div>
  );
}
