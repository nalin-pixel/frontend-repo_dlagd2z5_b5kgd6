export default function HowItWorks() {
  const steps = [
    { n: 1, title: "Search a product", text: "Find an item from PriceRunner, Webhallen, Inet or Power." },
    { n: 2, title: "Set your target price", text: "Use the slider or quick buttons (1K, 2K, 3K, 5K, 10K)." },
    { n: 3, title: "Connect Telegram", text: "Get instant alerts the moment a price drops." },
    { n: 4, title: "Save money", text: "Track history, spot trends and buy at the right time." },
  ];
  return (
    <section id="how" className="py-20 bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">How it works</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] font-semibold">{s.n}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
