import { BellRing, Search, Clock3, BarChart3 } from "lucide-react";

const features = [
  { icon: Search, title: "Powerful Search", desc: "Find products across 35+ Swedish stores via PriceRunner." },
  { icon: BellRing, title: "Instant Alerts", desc: "Get Telegram and email notifications the moment prices drop." },
  { icon: Clock3, title: "24/7 Monitoring", desc: "Background checks every 30 minutes keep you up-to-date." },
  { icon: BarChart3, title: "Price History", desc: "Visualize past drops and predict the best time to buy." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Built for deal hunters</h2>
        <p className="text-slate-300 text-center mt-3">Swedish market focus: PriceRunner, Webhallen, Inet, Power</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
              <f.icon className="h-6 w-6 text-[#667eea]" />
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
