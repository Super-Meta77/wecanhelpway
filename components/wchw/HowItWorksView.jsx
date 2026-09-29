'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMG } from '@/lib/mockData'

const STEPS = [
  { n: '01', title: 'Tell us', body: 'Tell us what you need, or what you can offer. In your own words. No forms disguised as forms.' },
  { n: '02', title: 'We understand', body: 'A person on our team reads what you sent and tries to understand what might actually help.' },
  { n: '03', title: 'We look for possibilities', body: 'People, opportunities, knowledge, resources, or paths that might be genuinely useful for you.' },
  { n: '04', title: 'We connect', body: 'When we find a good possibility, our team facilitates the introduction. You accept before it happens.' },
  { n: '05', title: 'You move forward', body: 'A private 1-on-1 conversation opens. From there, real work begins — at your pace.' },
]

export default function HowItWorksView({ setView }) {
  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="text-xs uppercase tracking-widest text-[#6B6862]">How it works</div>
        <h1 className="editorial text-5xl md:text-7xl leading-[0.98] mt-4 max-w-3xl">From <span className="editorial-italic text-[#E76F51]">need</span> to a next step. With people in the middle.</h1>
        <p className="mt-6 max-w-xl text-[#2B2A28]">WeCanHelpWay is not automated matchmaking. Real people read your request and look for real paths forward. This is what that looks like.</p>

        <div className="mt-20 space-y-16">
          {STEPS.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-100px'}}
              className={`grid md:grid-cols-12 gap-8 items-center ${i%2? 'md:[&>div:first-child]:order-2':''}`}>
              <div className="md:col-span-6">
                <div className="editorial text-5xl text-[#E76F51]">{s.n}</div>
                <h2 className="editorial text-4xl md:text-5xl leading-tight mt-3">{s.title}</h2>
                <p className="mt-5 text-[#2B2A28] max-w-md text-[16px] leading-relaxed">{s.body}</p>
              </div>
              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={[IMG.hero1,IMG.candid,IMG.mentor2,IMG.conn1,IMG.mentor1][i]} alt="" className="w-full h-full object-cover" loading="lazy"/>
                  <div className="absolute top-4 left-4 text-[11px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/85 backdrop-blur">Step {s.n}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="editorial text-4xl md:text-5xl">Ready when you are.</h3>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={()=>setView('need')} className="px-7 py-4 rounded-full btn-accent inline-flex items-center gap-2 font-medium">I need help <ArrowRight className="h-4 w-4"/></button>
            <button onClick={()=>setView('offer')} className="px-7 py-4 rounded-full border-2 border-[#0F0F0E] font-medium hover:bg-[#0F0F0E] hover:text-[#FAF7F2] transition">I want to help</button>
          </div>
        </div>
      </div>
    </section>
  )
}
