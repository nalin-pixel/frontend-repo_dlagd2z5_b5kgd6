import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import SetupPreview from './components/SetupPreview'
import Dashboard from './components/Dashboard'
import TelegramWizard from './components/TelegramWizard'

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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setup" element={<TelegramWizard />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App