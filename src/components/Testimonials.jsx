const testimonials = [
  {
    quote: "I saved 800 SEK on a Nintendo Switch during Black Week! The Telegram alerts came instantly and I grabbed the deal before it sold out. Amazing tool!",
    author: "Emma L., Stockholm",
  },
  {
    quote: "Been tracking a PlayStation 5 for weeks. Got the alert at midnight when the price dropped to my target. Finally got it!",
    author: "Marcus B., Gothenburg",
  },
  {
    quote: "The price slider is genius! I set alerts for my entire Black Week shopping list. Saved over 3,000 SEK total!",
    author: "Sofia K., Malmö",
  },
  {
    quote: "Setup took 2 minutes. Been getting perfect deal alerts ever since. The Telegram integration is so smooth!",
    author: "Lisa M., Lund",
  },
  {
    quote: "As someone who tracks tech deals, this is a game-changer. PriceRunner integration means I'm checking 35+ stores automatically!",
    author: "Johan N., Uppsala",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Loved by smart shoppers</h2>
        <div className="mt-10 overflow-x-auto no-scrollbar">
          <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] lg:auto-cols-[30%] gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
                <p className="text-slate-200">“{t.quote}”</p>
                <p className="mt-4 text-sm text-slate-400">— {t.author} ⭐⭐⭐⭐⭐</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
