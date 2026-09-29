'use client'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, HandHeart, HeartHandshake, Sparkles, Send, MessageCircle, Check } from 'lucide-react'
import { IMG, NEED_EXAMPLES, STORIES, GLOBE_POINTS } from '@/lib/mockData'

/* ---------- HERO ---------- */
function Hero({ setView }) {
  const [mode, setMode] = useState('choose') // choose | need
  const [text, setText] = useState('')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0,1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0,1], [0, -120])

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#E76F51]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-[#3D5A55]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-24 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border hairline bg-white/60 text-xs text-[#2B2A28]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E76F51] slow-pulse"/> A human-centered way to find a way forward
            </motion.div>

            <h1 className="editorial text-[52px] leading-[0.98] md:text-[76px] lg:text-[92px] mt-6">
              <SplitReveal text="What do you"/>
              <br/>
              <SplitReveal text="need help with?" italic delay={0.2}/>
            </h1>

            <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.5, duration:0.6}}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#2B2A28]">
              Tell us what you need. We’ll help you find a way forward. A person, an opportunity, knowledge, or simply a next step.
            </motion.p>

            <AnimatePresence mode="wait">
              {mode==='choose' ? (
                <motion.div key="choose" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.4}}
                  className="mt-10 flex flex-col sm:flex-row gap-3">
                  <button onClick={() => setMode('need')}
                    className="group inline-flex items-center justify-between gap-3 px-6 py-4 rounded-2xl btn-accent text-[15px] font-medium shadow-[0_10px_30px_-12px_rgba(231,111,81,0.55)]">
                    <span className="inline-flex items-center gap-2"><HandHeart className="h-5 w-5"/> I need help</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
                  </button>
                  <button onClick={() => setView('offer')}
                    className="group inline-flex items-center justify-between gap-3 px-6 py-4 rounded-2xl border-2 border-[#0F0F0E] text-[15px] font-medium hover:bg-[#0F0F0E] hover:text-[#FAF7F2] transition-colors">
                    <span className="inline-flex items-center gap-2"><HeartHandshake className="h-5 w-5"/> I want to help</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
                  </button>
                </motion.div>
              ) : (
                <motion.div key="need" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.4}}
                  className="mt-10">
                  <label className="text-xs uppercase tracking-widest text-[#6B6862]">Tell us what you need…</label>
                  <div className="mt-3 flex items-start gap-2 p-2 rounded-2xl border-2 border-[#0F0F0E] bg-white">
                    <textarea autoFocus value={text} onChange={e=>setText(e.target.value)} rows={2}
                      placeholder="e.g. I want to earn extra income while studying."
                      className="flex-1 resize-none bg-transparent px-3 py-2 outline-none text-[15px]"/>
                    <button onClick={() => setView('need')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-accent text-sm">
                      Continue <ArrowRight className="h-4 w-4"/>
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {NEED_EXAMPLES.map((ex,i) => (
                      <button key={i} onClick={()=>setText(ex)} className="chip text-xs px-3 py-1.5 rounded-full text-[#2B2A28] transition">“{ex}”</button>
                    ))}
                  </div>
                  <button onClick={()=>setMode('choose')} className="mt-4 text-xs text-[#6B6862] hover:text-[#0F0F0E]">← Back</button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button onClick={() => setView('need')} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#6B6862] hover:text-[#E76F51] transition-colors">
              <Sparkles className="h-4 w-4"/> I’m not sure where to start
            </motion.button>
          </div>

          {/* Right visual: human portraits + connection lines */}
          <div className="lg:col-span-5 relative h-[520px] lg:h-[640px]">
            <HeroCollage y1={y1} y2={y2}/>
          </div>
        </div>
      </div>
    </section>
  )
}

function SplitReveal({ text, italic, delay=0 }) {
  return (
    <span className={italic ? 'editorial-italic text-[#E76F51]' : ''}>
      {text.split(' ').map((w,i)=>(
        <motion.span key={i} initial={{y:'110%', opacity:0}} animate={{y:'0%', opacity:1}}
          transition={{delay: delay + i*0.06, duration:0.7, ease:[0.22,1,0.36,1]}}
          className="inline-block mr-[0.22em] overflow-hidden">
          <span className="inline-block">{w}</span>
        </motion.span>
      ))}
    </span>
  )
}

function HeroCollage({ y1, y2 }) {
  const items = [
    { src: IMG.hero1, top: '2%', left: '8%', w: 210, h: 260, rotate: -3, y: y1, label: 'Need' },
    { src: IMG.hero2, top: '10%', left: '52%', w: 190, h: 240, rotate: 2, y: y2, label: 'Skill' },
    { src: IMG.conn2, top: '48%', left: '2%', w: 230, h: 200, rotate: 2, y: y2, label: 'Guidance' },
    { src: IMG.mentor1, top: '58%', left: '44%', w: 220, h: 260, rotate: -2, y: y1, label: 'Opportunity' },
  ]
  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 640" fill="none">
        <motion.path d="M 130 140 C 220 200, 260 220, 340 190" stroke="#E76F51" strokeWidth="1.5" strokeDasharray="4 6"
          initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:0.9, duration:1.6, ease:'easeOut'}}/>
        <motion.path d="M 340 210 C 300 320, 280 380, 320 470" stroke="#3D5A55" strokeWidth="1.5" strokeDasharray="4 6"
          initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1.2, duration:1.6, ease:'easeOut'}}/>
        <motion.path d="M 120 480 C 180 430, 240 430, 300 470" stroke="#0F0F0E" strokeWidth="1.5" strokeDasharray="4 6"
          initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1.5, duration:1.6, ease:'easeOut'}}/>
      </svg>
      {items.map((it, i)=>(
        <motion.div key={i} style={{ top: it.top, left: it.left, y: it.y }}
          initial={{opacity:0, y:20, rotate: it.rotate}} animate={{opacity:1, y:0, rotate: it.rotate}}
          transition={{delay: 0.4 + i*0.15, duration:0.7, ease:[0.22,1,0.36,1]}}
          className="absolute">
          <div className="relative shadow-[0_20px_50px_-20px_rgba(15,15,14,0.35)] rounded-2xl overflow-hidden"
            style={{ width: it.w, height: it.h }}>
            <img src={it.src} alt="" className="w-full h-full object-cover" loading={i<2?'eager':'lazy'}/>
            <div className="absolute inset-x-0 bottom-0 p-2 flex items-center gap-1.5 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-[10px] uppercase tracking-widest text-white/90">{it.label}</span>
            </div>
          </div>
        </motion.div>
      ))}
      {/* connection dots */}
      {[[112,150],[338,200],[118,478],[320,470]].map(([x,y],i)=>(
        <motion.span key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:1.7+i*0.1}}
          style={{ left: x, top: y }} className="absolute h-2.5 w-2.5 rounded-full bg-[#0F0F0E] ring-4 ring-[#FAF7F2]"/>
      ))}
    </div>
  )
}

/* ---------- STORY SCROLL ---------- */
function Story() {
  const steps = [
    { n: '01', title: 'One person has a need.', body: 'A student. A parent. A dreamer. Someone quietly stuck.' },
    { n: '02', title: 'We understand it.', body: 'We take time to read what’s really being asked — not just the words.' },
    { n: '03', title: 'We look for possibilities.', body: 'People, opportunities, knowledge, resources, or paths that might help.' },
    { n: '04', title: 'We facilitate the connection.', body: 'Our team introduces the right people to each other — with care.' },
    { n: '05', title: 'People move forward.', body: 'Not always all the way. But a real, honest step forward.' },
  ]
  return (
    <section className="relative py-28 border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#6B6862] mb-4">The journey</div>
            <h2 className="editorial text-5xl md:text-6xl leading-[0.98] max-w-2xl">Need. Understanding. Possibility. <span className="editorial-italic text-[#E76F51]">Connection.</span></h2>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-80px'}}
              transition={{delay:i*0.08, duration:0.6}}
              className="relative p-6 rounded-2xl border hairline bg-white/50">
              <div className="editorial text-3xl text-[#E76F51]">{s.n}</div>
              <div className="mt-4 editorial text-2xl leading-tight">{s.title}</div>
              <p className="mt-3 text-sm text-[#6B6862] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- EVERYONE NEEDS ---------- */
function EveryoneNeeds() {
  const needs = ['a job', 'education', 'extra income', 'advice', 'a developer', 'a mentor', 'an idea', 'someone to listen']
  return (
    <section className="relative py-28 border-t hairline overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="editorial text-5xl md:text-6xl leading-[0.98]">
            Everyone <span className="editorial-italic text-[#E76F51]">needs</span> something.
          </motion.h2>
          <p className="mt-6 text-[#2B2A28] max-w-md">A need is not a weakness. It’s where every next step begins. Sometimes it’s clear. Sometimes it’s just a feeling that something has to change.</p>
        </div>
        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {needs.map((n,i)=>(
              <motion.li key={n} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
                transition={{delay:i*0.08}}
                className="flex items-baseline gap-4">
                <span className="text-xs text-[#6B6862] w-8">{String(i+1).padStart(2,'0')}</span>
                <span className="editorial text-3xl md:text-4xl">Someone needs <span className="editorial-italic text-[#E76F51]">{n}</span>.</span>
              </motion.li>
            ))}
          </ul>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.7}}
            className="mt-10 pt-8 border-t hairline">
            <span className="editorial text-3xl md:text-4xl">And <span className="editorial-italic text-[#3D5A55]">someone, somewhere,</span> may be able to help.</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- EVERYONE HAS TO OFFER ---------- */
function EveryoneOffers() {
  const offers = ['Skills','Knowledge','Experience','Time','Opportunities','Resources','Mentorship','Employment','Ideas','Encouragement']
  const faces = [IMG.hero1, IMG.hero2, IMG.hero3, IMG.mentor1, IMG.mentor2, IMG.conn2]
  return (
    <section className="relative py-28 border-t hairline bg-[#F3EEE5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="editorial text-5xl md:text-6xl leading-[0.98]">Everyone has <span className="editorial-italic text-[#3D5A55]">something</span> to offer.</h2>
            <p className="mt-6 max-w-md text-[#2B2A28]">Help doesn’t have to mean money. It might be time. Knowledge. A door opened. A moment of listening. A skill you’ve always had.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {offers.map((o,i)=>(
                <motion.span key={o} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.04}}
                  className="chip px-3 py-1.5 rounded-full text-sm">{o}</motion.span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3">
              {faces.map((f,i)=>(
                <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                  className={`relative rounded-2xl overflow-hidden ${i%2? 'aspect-[3/4] mt-6':'aspect-[3/4]'}`}>
                  <img src={f} alt="" className="w-full h-full object-cover" loading="lazy"/>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- CONNECTION PROTOTYPE ---------- */
function ConnectionFlow({ setView }) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const id = setInterval(()=> setStep(s => (s+1) % 6), 2200)
    return () => clearInterval(id)
  }, [])
  const stages = [
    'User A shares a need',
    'WeCanHelpWay understands it',
    'A potential person is identified',
    'The team approves the connection',
    'Both people accept',
    'A private 1-on-1 chat opens',
  ]
  return (
    <section className="relative py-28 border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-widest text-[#6B6862] mb-4">Connection philosophy</div>
          <h2 className="editorial text-5xl md:text-6xl leading-[0.98]">We don’t leave connections to <span className="editorial-italic text-[#E76F51]">chance.</span></h2>
          <p className="mt-6 max-w-md text-[#2B2A28]">When we find someone who may be able to help, our team facilitates the introduction with care. You don’t message strangers. You meet people who were chosen with intention.</p>
          <button onClick={()=>setView('how')} className="mt-8 inline-flex items-center gap-2 text-sm hover:text-[#E76F51]">See how it works <ArrowUpRight className="h-4 w-4"/></button>
        </div>
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border hairline bg-white p-6 md:p-10">
            <div className="grid grid-cols-3 items-center gap-4">
              <PersonCard img={IMG.hero1} name="User A" role="Has a need" active={step>=0}/>
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#0F0F0E] text-[#FAF7F2] inline-flex items-center justify-center text-xs">w</div>
                <div className="text-[11px] uppercase tracking-widest text-[#6B6862] text-center">WeCanHelpWay</div>
                <svg width="100%" height="36" viewBox="0 0 200 36" className="mt-2">
                  <motion.line x1="0" y1="18" x2="200" y2="18" stroke="#E76F51" strokeWidth="2" strokeDasharray="6 6"
                    initial={{pathLength:0}} animate={{pathLength: step>=2 ? 1 : 0.15}} transition={{duration:0.8}}/>
                </svg>
              </div>
              <PersonCard img={IMG.mentor1} name="Person B" role="May be able to help" active={step>=2}/>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {stages.map((s,i)=>(
                <div key={i} className={`text-xs px-3 py-1.5 rounded-full border ${i<=step? 'bg-[#0F0F0E] text-[#FAF7F2] border-[#0F0F0E]':'hairline text-[#6B6862]'}`}>
                  {i<=step && <Check className="h-3 w-3 inline mr-1"/>}{s}
                </div>
              ))}
            </div>
            <AnimatePresence>
              {step===5 && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}
                  className="mt-6 p-4 rounded-2xl border hairline bg-[#FAF7F2]">
                  <div className="flex items-center gap-2 text-sm"><MessageCircle className="h-4 w-4 text-[#3D5A55]"/> Private 1-on-1 chat is now open.</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function PersonCard({ img, name, role, active }) {
  return (
    <motion.div animate={{opacity: active?1:0.55, scale: active?1:0.98}} transition={{duration:0.4}}
      className="flex flex-col items-center text-center">
      <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden ring-4 ring-[#FAF7F2] shadow-md">
        <img src={img} alt={name} className="w-full h-full object-cover"/>
      </div>
      <div className="editorial text-lg mt-3">{name}</div>
      <div className="text-xs text-[#6B6862]">{role}</div>
    </motion.div>
  )
}

/* ---------- STORIES ---------- */
function Stories() {
  return (
    <section className="relative py-28 border-t hairline bg-[#0F0F0E] text-[#FAF7F2] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] dot-grid" style={{filter:'invert(1)'}}/>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="text-xs uppercase tracking-widest text-[#FAF7F2]/50 mb-4">Stories</div>
        <h2 className="editorial text-5xl md:text-6xl leading-[0.98] max-w-3xl">Before. Connection. <span className="editorial-italic text-[#E76F51]">Progress.</span></h2>
        <p className="mt-4 text-[#FAF7F2]/60 max-w-xl">Illustrative stories that show the kinds of moments WeCanHelpWay is designed for.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {STORIES.map((s,i)=>(
            <motion.article key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="group rounded-2xl overflow-hidden bg-[#1a1a19] hairline border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={IMG[s.img]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[#FAF7F2]/10 backdrop-blur">{s.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="editorial text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-[#FAF7F2]/70 leading-relaxed">{s.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- GLOBE ---------- */
function Globe() {
  const [hover, setHover] = useState(null)
  return (
    <section className="relative py-28 border-t hairline overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-[#6B6862] mb-4">Global from day one</div>
            <h2 className="editorial text-5xl md:text-6xl leading-[0.98]">People everywhere need help. <span className="editorial-italic text-[#3D5A55]">People everywhere can help.</span></h2>
            <p className="mt-6 text-[#2B2A28] max-w-md">A quiet request in one place. An open hand in another. WeCanHelpWay finds the line between them.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl border hairline bg-gradient-to-br from-[#0F0F0E] to-[#1a1a19] overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-30" style={{filter:'invert(1)'}}/>
              {/* faint continents */}
              <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full opacity-40">
                <path d="M120,220 Q180,180 250,210 T400,220 T580,240 T720,220" stroke="#FAF7F2" strokeOpacity="0.15" fill="none"/>
                <path d="M100,320 Q220,290 340,320 T560,330 T740,320" stroke="#FAF7F2" strokeOpacity="0.15" fill="none"/>
                <path d="M140,430 Q240,400 360,430 T580,440 T720,430" stroke="#FAF7F2" strokeOpacity="0.15" fill="none"/>
              </svg>
              {/* points */}
              {GLOBE_POINTS.map((p,i)=>(
                <motion.button key={i} initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
                  transition={{delay: p.d, duration:0.5}}
                  onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group">
                  <span className="relative flex">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#E76F51] opacity-60 slow-pulse"/>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E76F51]"/>
                  </span>
                </motion.button>
              ))}
              {/* connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[[0,3],[1,4],[2,5],[6,7]].map(([a,b],i)=>(
                  <motion.line key={i} x1={`${GLOBE_POINTS[a].x}%`} y1={`${GLOBE_POINTS[a].y}%`}
                    x2={`${GLOBE_POINTS[b].x}%`} y2={`${GLOBE_POINTS[b].y}%`}
                    stroke="#E76F51" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 5"
                    initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{delay:1.5+i*0.2, duration:1.4}}/>
                ))}
              </svg>
              <AnimatePresence>
                {hover!==null && (
                  <motion.div initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} exit={{opacity:0}}
                    style={{ left: `${GLOBE_POINTS[hover].x}%`, top: `${GLOBE_POINTS[hover].y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-full mt-[-16px] px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[#0F0F0E] text-xs whitespace-nowrap shadow-md">
                    {GLOBE_POINTS[hover].label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- NO DEAD ENDS ---------- */
function NoDeadEnds({ setView }) {
  return (
    <section className="relative py-32 border-t hairline overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#E76F51]/8 blur-3xl"/>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center relative">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
          className="editorial text-6xl md:text-8xl leading-[0.95]">
          A problem shouldn’t become a <span className="editorial-italic text-[#E76F51]">dead end</span>.
        </motion.h2>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.4}} className="mt-10 space-y-2 text-[#2B2A28] max-w-2xl mx-auto text-lg">
          <p>You don’t need to have the right words.</p>
          <p>You don’t need the right connections.</p>
          <p>You don’t need all the answers.</p>
          <p className="pt-2 editorial-italic text-2xl">Start by telling us what’s going on.</p>
        </motion.div>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={()=>setView('need')} className="px-7 py-4 rounded-full btn-accent text-[15px] font-medium inline-flex items-center gap-2">Start Here <ArrowRight className="h-4 w-4"/></button>
          <button onClick={()=>setView('offer')} className="px-7 py-4 rounded-full border-2 border-[#0F0F0E] text-[15px] font-medium inline-flex items-center gap-2 hover:bg-[#0F0F0E] hover:text-[#FAF7F2] transition">Offer Help</button>
        </div>
      </div>
    </section>
  )
}

export default function HomeView({ setView }) {
  return (
    <div>
      <Hero setView={setView}/>
      <EveryoneNeeds/>
      <EveryoneOffers/>
      <Story/>
      <ConnectionFlow setView={setView}/>
      <Stories/>
      <Globe/>
      <NoDeadEnds setView={setView}/>
    </div>
  )
}
