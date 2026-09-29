'use client'
import { motion } from 'framer-motion'
import { IMG } from '@/lib/mockData'

export default function AboutView({ setView }) {
  return (
    <section className="relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <div className="text-xs uppercase tracking-widest text-[#6B6862]">About</div>
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}
          className="editorial text-6xl md:text-8xl leading-[0.95] mt-4 max-w-4xl">
          Asking for help should never feel like <span className="editorial-italic text-[#E76F51]">failure</span>.
        </motion.h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 space-y-6 text-[17px] leading-[1.7] text-[#2B2A28]">
            <p>People find themselves in difficult situations for many reasons. Sometimes they need an opportunity. Sometimes they need knowledge. Sometimes they need another person. Sometimes they don’t even know what they need.</p>
            <p>WeCanHelpWay exists to help people find a way forward. We don’t promise to personally solve every problem. We listen, we try to understand, and when we can, we connect people with people, opportunities, knowledge, resources, or solutions.</p>
            <p className="editorial text-2xl leading-snug text-[#0F0F0E]">Everyone has needs. Everyone has something to offer. We help people find a way forward.</p>
            <p>You do not have to prove your value before asking for help. If you need help, you can start here. If you can help, you can start here too.</p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden"><img src={IMG.hero1} alt="" className="w-full h-full object-cover"/></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8"><img src={IMG.mentor1} alt="" className="w-full h-full object-cover"/></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden -mt-6"><img src={IMG.candid} alt="" className="w-full h-full object-cover"/></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden"><img src={IMG.conn2} alt="" className="w-full h-full object-cover"/></div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t hairline pt-16">
          <h2 className="editorial text-4xl md:text-5xl max-w-3xl">What we believe.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ['Human first','Every decision starts with the person, not the platform.'],
              ['No dead ends','If we can’t help, we try to point somewhere useful.'],
              ['Care in connection','We introduce people gently, with context and consent.'],
              ['Everyone counts','Skilled or just starting. Rich in resources or not.'],
              ['Quiet technology','Tools should serve people, not the other way around.'],
              ['Progress, not promises','A small step forward is still forward.'],
            ].map(([t,b])=>(
              <div key={t} className="p-6 rounded-2xl border hairline bg-white">
                <div className="editorial text-2xl">{t}</div>
                <p className="mt-3 text-sm text-[#6B6862] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button onClick={()=>setView('need')} className="px-7 py-4 rounded-full btn-accent font-medium">Start with what you need</button>
        </div>
      </div>
    </section>
  )
}
