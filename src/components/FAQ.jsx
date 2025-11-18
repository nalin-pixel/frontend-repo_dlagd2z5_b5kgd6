export default function FAQ() {
  const faqs = [
    {q: 'Is there a free tier?', a: 'Yes. Track up to 5 products for free. Go Pro for unlimited tracking.'},
    {q: 'Which stores are supported?', a: 'PriceRunner covers 35+ Swedish retailers. We also monitor Webhallen, Inet, and Power directly.'},
    {q: 'How often are prices checked?', a: 'Every 30 minutes 24/7. Alerts are sent instantly if your target is met.'},
    {q: 'How do I receive alerts?', a: 'Telegram is recommended for real-time alerts. Email is also available.'},
  ];
  return (
    <section className="py-20 bg-[#0b1020]">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQ</h2>
        <div className="mt-10 grid gap-4">
          {faqs.map((f, i)=> (
            <details key={i} className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
              <summary className="cursor-pointer text-white font-medium list-none flex items-center justify-between">{f.q}
                <span className="ml-4 text-[#667eea] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-slate-300 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
