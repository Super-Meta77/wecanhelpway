'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONNECTIONS, IMG } from '@/lib/mockData'
import { MessageCircle, Clock, Check } from 'lucide-react'

const TABS = ['Active','Pending','Completed']

export default function ConnectionsView({ setView, setActiveChat }) {
  const [tab, setTab] = useState('Active')
  const map = { Active:'active', Pending:'pending', Completed:'completed' }
  const items = CONNECTIONS.filter(c=>c.status === map[tab])

  const openChat = (id) => { setActiveChat(id); setView('chat') }

  return (
    <section className="relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="text-xs uppercase tracking-widest text-[#6B6862]">Connections</div>
        <h1 className="editorial text-5xl md:text-6xl leading-[0.98] mt-3">My <span className="editorial-italic text-[#E76F51]">Connections</span></h1>
        <p className="mt-5 text-[#2B2A28] max-w-xl">People our team has introduced you to — with intention. Each connection here was reviewed before it reached you.</p>

        <div className="mt-10 inline-flex p-1 rounded-full bg-[#0F0F0E]/5">
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)}
              className={`relative px-5 py-2 text-sm rounded-full transition ${tab===t?'text-[#FAF7F2]':'text-[#2B2A28]'}`}>
              {tab===t && <motion.span layoutId="conn-tab" className="absolute inset-0 rounded-full bg-[#0F0F0E]" transition={{type:'spring', stiffness:400, damping:30}}/>}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {items.length===0 && (
            <div className="p-12 text-center rounded-2xl border hairline bg-white text-[#6B6862]">Nothing here yet.</div>
          )}
          {items.map((c,i)=>(
            <motion.div key={c.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}}
              className="p-5 md:p-6 rounded-2xl border hairline bg-white flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0">
                  <img src={IMG[c.img]} alt="" className="w-full h-full object-cover"/>
                  {c.online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#3D5A55] ring-2 ring-white"/>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="editorial text-xl">{c.name}</span>
                    <span className="text-xs text-[#6B6862]">· {c.role}</span>
                  </div>
                  <p className="text-sm text-[#2B2A28] mt-1">{c.reason}</p>
                  <div className="text-xs text-[#6B6862] mt-1 inline-flex items-center gap-1"><Clock className="h-3 w-3"/> {c.date}</div>
                </div>
              </div>
              <div className="flex gap-2 md:justify-end">
                {c.status==='active' && (
                  <button onClick={()=>openChat(c.id)} className="px-4 py-2 rounded-full btn-primary text-sm inline-flex items-center gap-2"><MessageCircle className="h-4 w-4"/> Open Chat</button>
                )}
                {c.status==='pending' && (
                  <>
                    <button className="px-4 py-2 rounded-full btn-accent text-sm inline-flex items-center gap-2"><Check className="h-4 w-4"/> Accept</button>
                    <button className="px-4 py-2 rounded-full border hairline text-sm hover:border-[#0F0F0E]">Decline</button>
                  </>
                )}
                {c.status==='completed' && (
                  <span className="px-3 py-1.5 rounded-full text-xs bg-[#3D5A55]/10 text-[#3D5A55]">Completed</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
