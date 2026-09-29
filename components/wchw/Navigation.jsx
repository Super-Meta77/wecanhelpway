'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV = [
  { key: 'how', label: 'How It Works' },
  { key: 'need', label: 'I Need Help' },
  { key: 'offer', label: 'I Want to Help' },
  { key: 'connections', label: 'Connections' },
  { key: 'about', label: 'About' },
]

export default function Navigation({ view, setView }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/85 backdrop-blur-md border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button onClick={() => setView('home')} className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#0F0F0E] text-[#FAF7F2]">
            <span className="editorial text-lg leading-none">w</span>
            <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-[#E76F51]" />
          </span>
          <span className="editorial text-xl tracking-tight">WeCanHelpWay</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(n => (
            <button key={n.key} onClick={() => setView(n.key)}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${view===n.key?'text-[#0F0F0E]':'text-[#6B6862] hover:text-[#0F0F0E]'}`}>
              {n.label}
              {view===n.key && <motion.span layoutId="nav-underline" className="block h-px bg-[#0F0F0E] mt-1" />}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setView('dashboard')} className="text-sm text-[#6B6862] hover:text-[#0F0F0E]">Sign In</button>
          <button onClick={() => setView('need')} className="group inline-flex items-center gap-2 px-4 py-2 rounded-full btn-primary text-sm">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Menu">
          {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}}
            className="lg:hidden border-t hairline overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV.map(n => (
                <button key={n.key} onClick={() => { setView(n.key); setOpen(false) }}
                  className={`text-left px-2 py-3 rounded-md ${view===n.key?'bg-[#0F0F0E]/5 text-[#0F0F0E]':'text-[#2B2A28]'}`}>{n.label}</button>
              ))}
              <button onClick={() => { setView('dashboard'); setOpen(false) }} className="text-left px-2 py-3 rounded-md text-[#2B2A28]">Sign In</button>
              <button onClick={() => { setView('need'); setOpen(false) }} className="mt-2 px-4 py-3 rounded-full btn-primary text-sm inline-flex items-center justify-center gap-2">Get Started <ArrowRight className="h-4 w-4"/></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
