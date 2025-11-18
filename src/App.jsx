import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import SetupPreview from './components/SetupPreview'
import Dashboard from './components/Dashboard'
import TelegramWizard from './components/TelegramWizard'
import Auth from './components/Auth'
import Protected from './components/Protected'

function Landing(){
  return (
    <main className="bg-[#0b1020] min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <SetupPreview />
      <footer className="py-10 text-center text-slate-400">Free tier: 5 products • Pro: unlimited</footer>
    </main>
  )
}

function AppRoutes(){
  const navigate = useNavigate();
  const onAuth = (d)=>{ localStorage.setItem('token', d.token); localStorage.setItem('email', d.email); navigate('/dashboard'); };
  const onUnauthorized = ()=> navigate('/auth');
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth onAuth={onAuth} />} />
        <Route path="/dashboard" element={<Protected onUnauthorized={onUnauthorized}><Dashboard /></Protected>} />
        <Route path="/setup" element={<Protected onUnauthorized={onUnauthorized}><TelegramWizard /></Protected>} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App