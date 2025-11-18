import { useState } from 'react';
import { CheckCircle2, Copy, Bot, LinkIcon, ShieldCheck } from 'lucide-react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || '';

export default function TelegramWizard(){
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [chatId, setChatId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const copy = (text)=> navigator.clipboard.writeText(text);

  const test = async ()=>{
    setStatus('Testing...');
    try{
      const r = await fetch(`${BACKEND}/api/telegram/test`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, token, chat_id: chatId})});
      const d = await r.json();
      setStatus(d.ok ? 'Success! Check Telegram.' : `Error: ${JSON.stringify(d.status)}`);
    }catch(e){ setStatus(String(e)); }
  }
  const save = async ()=>{
    const r = await fetch(`${BACKEND}/api/telegram/save`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, token, chat_id: chatId})});
    const d = await r.json();
    setStatus(d.ok? 'Saved!' : 'Failed to save');
  }

  return (
    <section className="pt-28 pb-20 bg-[#0b1020] min-h-screen text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold">Telegram Setup Wizard</h2>
        <p className="text-slate-300 mt-1">Follow 4 quick steps to enable alerts.</p>

        <div className="mt-6 flex items-center gap-2 text-xs">
          {[1,2,3,4].map(n => (
            <div key={n} className={`h-2 flex-1 rounded ${step>=n? 'bg-gradient-to-r from-[#667eea] to-[#764ba2]' : 'bg-white/10'}`} />
          ))}
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          {step===1 && (
            <div>
              <div className="flex items-center gap-2"><Bot className="text-[#667eea]"/><h3 className="font-semibold">Step 1: Create bot with @BotFather</h3></div>
              <ol className="mt-3 list-decimal list-inside text-sm text-slate-300 space-y-1">
                <li>Open Telegram and search @BotFather</li>
                <li>Send: /newbot</li>
                <li>Choose name, then username (e.g., myprice_tracker_bot)</li>
                <li>Copy the bot token</li>
              </ol>
              <div className="mt-4 flex items-center gap-2">
                <input value={token} onChange={e=>setToken(e.target.value)} placeholder="Paste bot token" className="flex-1 px-3 py-2 rounded bg-white text-slate-900"/>
                <button onClick={()=>copy('/newbot')} className="px-3 py-2 rounded bg-white/10 text-sm inline-flex items-center gap-1"><Copy className="h-4 w-4"/> Copy /newbot</button>
              </div>
            </div>
          )}
          {step===2 && (
            <div>
              <div className="flex items-center gap-2"><LinkIcon className="text-[#667eea]"/><h3 className="font-semibold">Step 2: Get Chat ID</h3></div>
              <ol className="mt-3 list-decimal list-inside text-sm text-slate-300 space-y-1">
                <li>Start chat with your bot and send any message</li>
                <li>Open: https://api.telegram.org/bot[TOKEN]/getUpdates</li>
                <li>Find "chat":{"id": YOUR_ID}</li>
              </ol>
              <div className="mt-4 grid gap-2">
                <input value={chatId} onChange={e=>setChatId(e.target.value)} placeholder="Paste chat ID" className="px-3 py-2 rounded bg-white text-slate-900"/>
              </div>
            </div>
          )}
          {step===3 && (
            <div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-[#667eea]"/><h3 className="font-semibold">Step 3: Test connection</h3></div>
              <div className="mt-3 grid gap-2">
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" className="px-3 py-2 rounded bg-white text-slate-900"/>
                <button onClick={test} className="px-4 py-2 rounded bg-gradient-to-r from-[#667eea] to-[#764ba2]">Send test message</button>
                {status && <div className="text-sm text-slate-200">{status}</div>}
              </div>
            </div>
          )}
          {step===4 && (
            <div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400"/><h3 className="font-semibold">Step 4: Save & start tracking</h3></div>
              <p className="text-slate-300 text-sm mt-2">Store your Telegram settings to receive alerts.</p>
              <div className="mt-3 grid gap-2">
                <button onClick={save} className="px-4 py-2 rounded bg-gradient-to-r from-[#667eea] to-[#764ba2]">Save settings</button>
                {status && <div className="text-sm text-slate-200">{status}</div>}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button disabled={step===1} onClick={()=>setStep(s=>Math.max(1, s-1))} className="px-3 py-2 rounded bg-white/10">Back</button>
          <button disabled={step===4} onClick={()=>setStep(s=>Math.min(4, s+1))} className="px-3 py-2 rounded bg-white/10">Next</button>
        </div>
      </div>
    </section>
  );
}
