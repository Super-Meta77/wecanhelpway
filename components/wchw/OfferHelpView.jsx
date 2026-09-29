'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Check, HeartHandshake } from 'lucide-react'
import { OFFER_CATEGORIES } from '@/lib/mockData'

export default function OfferHelpView({ setView }) {
  const [selected, setSelected] = useState([])
  const [desc, setDesc] = useState('')
  const [time, setTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggle = (c) => setSelected(s => s.includes(c) ? s.filter(x=>x!==c) : [...s, c])

  return (
    <section className="relative min-h-[85vh] bg-[#F3EEE5]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div key="form" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
            <div className="text-xs uppercase tracking-widest text-[#6B6862]">You are here to offer help</div>
            <h1 className="editorial text-5xl md:text-7xl leading-[0.98] mt-4">What can <span className="editorial-italic text-[#3D5A55]">you offer</span>?</h1>
            <p className="mt-5 text-[#2B2A28] max-w-xl">Help doesn’t have to mean money. You might have a skill, time, knowledge, experience, an opportunity, or simply a willingness to help someone.</p>

            <div className="mt-12">
              <label className="text-sm text-[#2B2A28]">Select what applies</label>
              <div className="mt-4 flex flex-wrap gap-2">
                {OFFER_CATEGORIES.map(c => (
                  <button key={c} onClick={()=>toggle(c)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${selected.includes(c)? 'bg-[#3D5A55] text-[#FAF7F2] border-[#3D5A55]':'hairline bg-white text-[#2B2A28] hover:border-[#0F0F0E]'}`}>
                    {selected.includes(c) && <Check className="h-3.5 w-3.5 inline mr-1"/>}{c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <label className="text-sm text-[#2B2A28]">Describe what you’d like to offer</label>
              <textarea value={desc} onChange={e=>setDesc(e.target.value)} rows={6}
                placeholder="Skills, opportunities, experience, or simply the kind of person you’d like to help..."
                className="mt-3 w-full rounded-2xl border-2 hairline focus:border-[#0F0F0E] bg-white p-5 outline-none text-[15px] leading-relaxed"/>
            </div>

            <div className="mt-10">
              <label className="text-sm text-[#2B2A28]">How much time can you give?</label>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {['A one-off conversation','~1 hour/week','A few hours/week','Whenever needed'].map(t => (
                  <button key={t} onClick={()=>setTime(t)} className={`px-4 py-3 rounded-xl border text-sm text-left transition ${time===t? 'bg-[#3D5A55]/10 border-[#3D5A55] text-[#0F0F0E]':'hairline bg-white hover:border-[#0F0F0E]'}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button onClick={()=>setSubmitted(true)} className="px-7 py-4 rounded-full bg-[#3D5A55] text-[#FAF7F2] hover:bg-[#2f4642] inline-flex items-center gap-2 font-medium">
                Share what I can offer <ArrowRight className="h-4 w-4"/>
              </button>
              <p className="text-xs text-[#6B6862] max-w-sm">Our team will contact you when we find someone your offer would meaningfully help.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="pt-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border hairline bg-white text-xs"><HeartHandshake className="h-3.5 w-3.5 text-[#3D5A55]"/> Offer received</div>
            <h1 className="editorial text-5xl md:text-7xl leading-[0.98] mt-6">Thank <span className="editorial-italic text-[#3D5A55]">you</span>.</h1>
            <p className="mt-5 text-lg text-[#2B2A28] max-w-xl">Even the smallest offer of help can change the direction of someone’s day. We’ll be in touch when we find a person your offer could meaningfully help.</p>
            <div className="mt-10 flex gap-3">
              <button onClick={()=>setView('dashboard')} className="px-6 py-3 rounded-full btn-primary text-sm inline-flex items-center gap-2">Go to dashboard <ArrowRight className="h-4 w-4"/></button>
              <button onClick={()=>setView('home')} className="px-6 py-3 rounded-full border hairline text-sm hover:border-[#0F0F0E]">Back home</button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
