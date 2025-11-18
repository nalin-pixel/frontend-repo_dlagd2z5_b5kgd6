import { useEffect, useMemo, useState } from "react";
import { Search, BadgeCheck, AlertTriangle, Clock3, CheckCircle2 } from "lucide-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

function Stat({label, value}){
  return (
    <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
      <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
      <div className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}

function StatusBadge({status}){
  const map = {
    deal: "bg-emerald-100 text-emerald-700",
    tracking: "bg-indigo-100 text-indigo-700",
    pending: "bg-amber-100 text-amber-700",
    error: "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-1 rounded-md text-xs font-medium ${map[status]||map.tracking}`}>{status}</span>
}

export default function Dashboard(){
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [price, setPrice] = useState(5000);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(()=>items.filter(it=> it.url.toLowerCase().includes(q.toLowerCase())), [items, q]);

  useEffect(()=>{
    if(!email) return;
    fetch(`${BACKEND}/api/track?email=${encodeURIComponent(email)}`)
      .then(r=>r.json()).then(d=> setItems(d.items||[])).catch(()=>{});
  }, [email]);

  const createTrack = async ()=>{
    if(!email) return alert("Enter your email first");
    setLoading(true);
    try{
      const r = await fetch(`${BACKEND}/api/track`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, url:q||'https://example.com', target_price: Number(price)})});
      const d = await r.json();
      if(r.ok){
        setQ("");
        const res = await fetch(`${BACKEND}/api/track?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        setItems(data.items||[]);
      } else {
        alert(d.detail||'Error');
      }
    } finally { setLoading(false); }
  }

  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-[#0b1020] to-[#0b1020] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold">Your Dashboard</h2>
        <p className="text-slate-300 mt-1">Track products and get instant alerts.</p>

        <div className="mt-6 grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            <Stat label="Total products" value={items.length} />
            <Stat label="Deals found" value={items.filter(i=>i.status==='deal').length} />
            <Stat label="Money saved" value={`SEK ${items.filter(i=>i.status==='deal').reduce((a,b)=> a + Math.max(0, (b.target_price||0)-(b.current_price||b.target_price)), 0)}`} />
          </div>
          <div className="md:col-span-2 p-4 rounded-xl bg-white/10 ring-1 ring-white/10">
            <div className="text-sm text-slate-300 mb-2">Your email</div>
            <input className="w-full px-3 py-2 rounded-lg bg-white text-slate-900" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-white/10 ring-1 ring-white/10">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
              <input className="w-full pl-10 pr-3 py-3 rounded-lg bg-white text-slate-900" placeholder="Search or paste product link..." value={q} onChange={e=>setQ(e.target.value)} />
            </div>
            <div className="w-full md:w-[380px]">
              <input type="range" min="100" max="50000" value={price} onChange={e=>setPrice(e.target.value)} className="w-full accent-[#667eea]" />
              <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                <div>SEK {price}</div>
                <div className="space-x-2">
                  {[1000,2000,3000,5000,10000].map(v=> <button key={v} className="px-2 py-1 rounded bg-white/10" onClick={()=>setPrice(v)}>{v/1000}K</button>)}
                </div>
              </div>
            </div>
            <button disabled={loading} onClick={createTrack} className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] font-medium">
              {loading? 'Adding...' : 'Add to tracking'}
            </button>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it)=> (
            <div key={it.id} className="p-5 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div className="font-medium">{new URL(it.url).hostname}</div>
                <StatusBadge status={it.status||'tracking'} />
              </div>
              <div className="mt-2 text-sm text-slate-300 break-all">{it.url}</div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-slate-300">Target</div>
                <div className="text-white font-semibold">SEK {it.target_price}</div>
              </div>
              <div className="mt-4 h-28 rounded-lg bg-gradient-to-r from-white/10 to-white/0 ring-1 ring-white/10 flex items-center justify-center text-slate-400 text-sm">Price history coming soon</div>
              <div className="mt-4 flex items-center gap-2">
                <button className="px-3 py-2 rounded-lg bg-white/10 text-sm">Open</button>
                <button className="px-3 py-2 rounded-lg bg-white/10 text-sm">Pause</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
