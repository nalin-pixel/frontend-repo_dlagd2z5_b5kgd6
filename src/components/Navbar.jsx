import { Link, NavLink } from "react-router-dom";
import { Menu, Bell, Bot, LayoutGrid, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow" />
          <span className="font-semibold text-slate-900 dark:text-white">PriceTracker</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <NavLink to="/" end className={({isActive})=>isActive?"text-[#667eea]":"hover:text-slate-900 dark:hover:text-white"}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>isActive?"text-[#667eea]":"hover:text-slate-900 dark:hover:text-white"}>Dashboard</NavLink>
          <NavLink to="/setup" className={({isActive})=>isActive?"text-[#667eea]":"hover:text-slate-900 dark:hover:text-white"}>Telegram</NavLink>
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/auth" className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
            <LogIn className="h-4 w-4" /> Sign in
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><Menu className="h-5 w-5"/></button>
        </div>
      </div>
    </header>
  );
}
