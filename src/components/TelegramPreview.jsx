export default function TelegramPreview() {
  return (
    <section className="py-20 bg-[#0b1020]" id="get-started">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Connect your Telegram in minutes</h3>
          <ol className="mt-4 space-y-3 text-slate-300">
            <li><span className="text-white font-medium">Step 1:</span> Create a bot with @BotFather (/newbot)</li>
            <li><span className="text-white font-medium">Step 2:</span> Get your Chat ID via getUpdates</li>
            <li><span className="text-white font-medium">Step 3:</span> Paste token + chat ID and test connection</li>
            <li><span className="text-white font-medium">Step 4:</span> Start tracking products</li>
          </ol>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="rounded-xl p-4 bg-[#0b1020] ring-1 ring-white/10">
            <div className="text-slate-300 text-sm">Telegram Bot</div>
            <div className="mt-3 rounded-lg p-3 bg-slate-900/80 text-slate-200 text-sm">✅ Price Tracker connected!</div>
            <div className="mt-3 rounded-lg p-3 bg-slate-900/80 text-slate-200 text-sm">🎯 Deal found: Nintendo Switch — 2,799 SEK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
