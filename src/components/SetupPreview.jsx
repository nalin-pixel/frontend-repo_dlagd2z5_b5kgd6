import { Bot, CheckCircle2 } from "lucide-react";

export default function SetupPreview(){
  return (
    <section id="get-started" className="py-20 bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 text-white">
            <h3 className="text-2xl font-semibold">Setup is a breeze</h3>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/> Create a bot with @BotFather</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/> Paste your token and Chat ID</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/> Click test to receive a message</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/> Start tracking products immediately</li>
            </ul>
            <a href="/setup" className="inline-flex items-center mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium">Open setup wizard</a>
          </div>
          <div className="p-6 rounded-2xl bg-white text-slate-900">
            <div className="flex items-center gap-2 mb-4"><Bot className="text-[#667eea]"/> <span className="font-semibold">Telegram Wizard</span></div>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Search @BotFather and send /newbot</li>
              <li>Name it and copy the token</li>
              <li>Get your chat ID via getUpdates</li>
              <li>Paste both and tap Test</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
