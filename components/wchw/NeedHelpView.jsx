'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { NEED_CATEGORIES, HELP_KIND } from '@/lib/mockData'

export default function NeedHelpView({ setView }) {
  const [cat, setCat] = useState('')
  const [desc, setDesc] = useState('')
  const [kind, setKind] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative min-h-[85vh]">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none"/>
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 relative">
        <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
            <div className="text-xs uppercase tracking-widest text-[#6B6862]">You are here to ask for help</div>
            <h1 className="editorial text-5xl md:text-7xl leading-[0.98] mt-4">Tell us what’s <span className="editorial-italic text-[#E76F51]">going on</span>.</h1>
            <p className="mt-5 text-[#2B2A28] max-w-xl">You don’t need to know exactly what you need. Just tell us what’s happening. We’ll try to find a way forward with you.</p>

            <div className="mt-12">
              <label className="text-sm text-[#2B2A28]">What do you need help with?</label>
              <div className="mt-4 flex flex-wrap gap-2">
                {NEED_CATEGORIES.map(c => (
                  <button key={c.key} onClick={()=>setCat(c.key)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${cat===c.key? 'bg-[#0F0F0E] text-[#FAF7F2] border-[#0F0F0E]':'hairline text-[#2B2A28] hover:border-[#0F0F0E]'}`}>{c.label}</button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <label className="text-sm text-[#2B2A28]">Tell us more</label>
              <textarea value={desc} onChange={e=>setDesc(e.target.value)} rows={6}
                placeholder="Describe what you’re trying to do, what you’re missing, or where you’re stuck..."
                className="mt-3 w-full rounded-2xl border-2 hairline focus:border-[#0F0F0E] bg-white p-5 outline-none text-[15px] leading-relaxed"/>
            </div>

            <div className="mt-10">
              <label className="text-sm text-[#2B2A28]">What would help you most right now?</label>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {HELP_KIND.map(k => (
                  <button key={k} onClick={()=>setKind(k)}
                    className={`px-4 py-3 rounded-xl border text-sm text-left transition ${kind===k? 'bg-[#E76F51]/10 border-[#E76F51] text-[#0F0F0E]':'hairline hover:border-[#0F0F0E]'}`}>{k}</button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button onClick={()=>setSubmitted(true)} className="px-7 py-4 rounded-full btn-accent inline-flex items-center gap-2 font-medium">
                Send my request <ArrowRight className="h-4 w-4"/>
              </button>
              <p className="text-xs text-[#6B6862] max-w-sm">A human on the WeCanHelpWay team will read your request. You’ll get an update as soon as we’ve looked for a path forward.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}
            className="pt-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border hairline bg-white text-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#E76F51]"/> Request received
            </div>
            <h1 className="editorial text-5xl md:text-7xl leading-[0.98] mt-6">We’ve heard <span className="editorial-italic text-[#E76F51]">you</span>.</h1>
            <p className="mt-5 text-lg text-[#2B2A28] max-w-xl">Thank you for telling us what’s going on. Our team will review your request and look for a useful path forward. You’ll see updates in your dashboard.</p>
            <div className="mt-10 p-6 rounded-2xl bg-white border hairline">
              <div className="text-xs uppercase tracking-widest text-[#6B6862]">What happens next</div>
              <ul className="mt-4 space-y-3">
                {['We read your request carefully.','We look for people, opportunities, knowledge or resources that may help.','If we find a match, our team will facilitate an introduction.','You’ll be able to accept before any connection is made.'].map((t,i)=>(
                  <li key={i} className="flex items-start gap-3 text-sm"><Check className="h-4 w-4 mt-0.5 text-[#3D5A55]"/>{t}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={()=>setView('dashboard')} className="px-6 py-3 rounded-full btn-primary text-sm inline-flex items-center gap-2">Go to dashboard <ArrowRight className="h-4 w-4"/></button>
              <button onClick={()=>{setSubmitted(false); setCat(''); setDesc(''); setKind('')}} className="px-6 py-3 rounded-full border hairline text-sm hover:border-[#0F0F0E]">Send another</button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
