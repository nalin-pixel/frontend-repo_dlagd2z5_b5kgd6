import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0b1020] to-[#0b1020]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-white text-xs mb-4">Sweden-first deals tracker • Telegram alerts</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Never miss a deal again
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            Track prices from PriceRunner, Webhallen, Inet, and Power. Set your target and get instant Telegram notifications.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium shadow-lg shadow-indigo-500/20">Get started free</a>
            <a href="#how" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium ring-1 ring-white/20">How it works</a>
          </div>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-gradient-to-t from-[#0b1020] to-transparent"/>
    </section>
  );
}
