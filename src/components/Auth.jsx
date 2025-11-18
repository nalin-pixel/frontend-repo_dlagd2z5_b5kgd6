import { useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || '';

export default function Auth({ onAuth }){
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = async (path, body) => {
    setLoading(true); setError('');
    try{
      const r = await fetch(`${BACKEND}${path}`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
      const d = await r.json();
      if(!r.ok) throw new Error(d.detail||'Error');
      onAuth?.(d);
    }catch(e){ setError(String(e.message||e)); }
    finally{ setLoading(false); }
  }

  return (
    <section className="pt-28 pb-20 bg-[#0b1020] min-h-screen text-white">
      <div className="mx-auto max-w-md px-4">
        <div className="flex rounded-xl overflow-hidden ring-1 ring-white/10">
          <button onClick={()=>setTab('login')} className={`flex-1 px-4 py-2 ${tab==='login'?'bg-white/10':''}`}>Login</button>
          <button onClick={()=>setTab('register')} className={`flex-1 px-4 py-2 ${tab==='register'?'bg-white/10':''}`}>Register</button>
          <button onClick={()=>handle('/api/auth/google', {token: prompt('Enter Google email (demo)')||''})} className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2]">Google (demo)</button>
        </div>

        <div className="mt-6 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          {tab==='login' && (
            <div className="grid gap-3">
              <input className="px-3 py-2 rounded bg-white text-slate-900" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <input className="px-3 py-2 rounded bg-white text-slate-900" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
              <button disabled={loading} onClick={()=>handle('/api/auth/login', {email, password})} className="px-4 py-2 rounded bg-gradient-to-r from-[#667eea] to-[#764ba2]">Login</button>
            </div>
          )}
          {tab==='register' && (
            <div className="grid gap-3">
              <input className="px-3 py-2 rounded bg-white text-slate-900" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
              <input className="px-3 py-2 rounded bg-white text-slate-900" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <input className="px-3 py-2 rounded bg-white text-slate-900" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
              <button disabled={loading} onClick={()=>handle('/api/auth/register', {email, password, name})} className="px-4 py-2 rounded bg-gradient-to-r from-[#667eea] to-[#764ba2]">Create account</button>
            </div>
          )}
          {error && <div className="mt-3 text-sm text-rose-300">{error}</div>}
        </div>
      </div>
    </section>
  )
}
