'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ADMIN_REQUESTS, ADMIN_MATCHES, IMG } from '@/lib/mockData'
import { Check, X, Inbox, Users, GitMerge, ShieldAlert, MessageSquare, Activity, ArrowUpRight } from 'lucide-react'

const NAV = [
  { k:'requests', l:'Requests', icon:<Inbox className="h-4 w-4"/> },
  { k:'people', l:'People', icon:<Users className="h-4 w-4"/> },
  { k:'matches', l:'Potential Matches', icon:<GitMerge className="h-4 w-4"/> },
  { k:'reviews', l:'Connection Reviews', icon:<ShieldAlert className="h-4 w-4"/> },
  { k:'active', l:'Active Connections', icon:<Activity className="h-4 w-4"/> },
  { k:'conv', l:'Conversations', icon:<MessageSquare className="h-4 w-4"/> },
]

export default function AdminView() {
  const [sec, setSec] = useState('requests')
  return (
    <section className="relative bg-[#0F0F0E] text-[#FAF7F2] min-h-[85vh]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full bg-[#E76F51]/20 text-[#E76F51] text-[10px] uppercase tracking-widest">Team Console</span>
          <span className="text-xs text-[#FAF7F2]/50">Frontend prototype</span>
        </div>
        <h1 className="editorial text-5xl md:text-6xl leading-[0.98] mt-4">Facilitate <span className="editorial-italic text-[#E76F51]">connections</span>.</h1>
        <p className="mt-4 text-[#FAF7F2]/60 max-w-xl">Everything the WeCanHelpWay team needs to review requests, propose matches, and approve introductions with care.</p>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-[#FAF7F2]/10 bg-[#1a1a19] p-2">
              {NAV.map(n=>(
                <button key={n.k} onClick={()=>setSec(n.k)}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-left transition ${sec===n.k?'bg-[#E76F51] text-white':'text-[#FAF7F2]/80 hover:bg-white/5'}`}>
                  {n.icon}{n.l}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#FAF7F2]/10 bg-[#1a1a19] p-5">
              <div className="text-xs uppercase tracking-widest text-[#FAF7F2]/50">Today</div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Stat n="24" l="New requests"/>
                <Stat n="7" l="Proposed matches"/>
                <Stat n="4" l="Approved"/>
                <Stat n="2" l="Awaiting reply"/>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {sec==='requests' && <Requests/>}
            {sec==='people' && <People/>}
            {sec==='matches' && <Matches/>}
            {sec==='reviews' && <Reviews/>}
            {sec==='active' && <ActiveConnections/>}
            {sec==='conv' && <Conversations/>}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, l }) {
  return (
    <div className="p-3 rounded-xl bg-white/5">
      <div className="editorial text-3xl">{n}</div>
      <div className="text-[11px] text-[#FAF7F2]/60 mt-1">{l}</div>
    </div>
  )
}

function Panel({ title, sub, children }) {
  return (
    <div className="rounded-2xl border border-[#FAF7F2]/10 bg-[#1a1a19] p-6">
      <div className="editorial text-2xl">{title}</div>
      {sub && <div className="text-sm text-[#FAF7F2]/60 mt-1">{sub}</div>}
      <div className="mt-6">{children}</div>
    </div>
  )
}

function Requests() {
  return (
    <Panel title="Incoming requests" sub="Read carefully. Respond with intention.">
      <div className="space-y-3">
        {ADMIN_REQUESTS.map((r,i)=>(
          <motion.div key={r.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}}
            className="p-4 rounded-xl border border-[#FAF7F2]/10 bg-black/30 flex items-start gap-4">
            <span className={`mt-1 h-2 w-2 rounded-full ${r.priority==='high'?'bg-[#E76F51]':r.priority==='medium'?'bg-yellow-400':'bg-[#3D5A55]'}`}/>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{r.person}</span>
                <span className="text-[#FAF7F2]/50 text-xs">· {r.country} · {r.received}</span>
                <span className="ml-auto text-[10px] uppercase tracking-widest text-[#E76F51]">{r.category}</span>
              </div>
              <p className="mt-2 text-sm text-[#FAF7F2]/85">{r.need}</p>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1.5 rounded-full bg-[#E76F51] text-white text-xs">Find match</button>
                <button className="px-3 py-1.5 rounded-full border border-[#FAF7F2]/20 text-xs hover:bg-white/5">Ask a follow-up</button>
                <button className="px-3 py-1.5 rounded-full text-xs text-[#FAF7F2]/60 hover:text-[#FAF7F2]">Archive</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Panel>
  )
}

function People() {
  const rows = [
    { n:'Nadia R.', k:'need', d:'Wants to learn programming.', img: IMG.hero3 },
    { n:'Ravi Patel', k:'offer', d:'Offers weekly mentorship in software engineering.', img: IMG.mentor1 },
    { n:'Lena Voss', k:'offer', d:'Small business coach with food-industry focus.', img: IMG.conn2 },
    { n:'Aki S.', k:'need', d:'Planning a small food business.', img: IMG.hero2 },
  ]
  return (
    <Panel title="People" sub="Everyone in the system, and what they’re looking for.">
      <div className="grid md:grid-cols-2 gap-3">
        {rows.map((r,i)=>(
          <div key={i} className="p-4 rounded-xl border border-[#FAF7F2]/10 bg-black/30 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden"><img src={r.img} alt="" className="w-full h-full object-cover"/></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{r.n}</span>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${r.k==='need'?'bg-[#E76F51]/15 text-[#E76F51]':'bg-[#3D5A55]/25 text-[#8FB7B0]'}`}>{r.k}</span>
              </div>
              <div className="text-xs text-[#FAF7F2]/60 mt-0.5">{r.d}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function Matches() {
  return (
    <Panel title="Potential matches" sub="Draft introductions the team can review.">
      <div className="space-y-3">
        {ADMIN_MATCHES.map((m,i)=>(
          <motion.div key={m.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:i*0.05}}
            className="p-4 rounded-xl border border-[#FAF7F2]/10 bg-black/30">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="text-sm">Match <span className="text-[#FAF7F2]/60">for</span> <span className="font-medium">{m.requester}</span></div>
                <div className="editorial text-xl mt-1">{m.match} — <span className="text-[#FAF7F2]/70 text-sm editorial-italic">{m.role}</span></div>
                <p className="mt-2 text-sm text-[#FAF7F2]/75">{m.reason}</p>
              </div>
              <div className="text-right">
                <div className="editorial text-3xl text-[#E76F51]">{m.confidence}%</div>
                <div className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/50">Confidence</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-[#E76F51] text-white text-xs inline-flex items-center gap-1"><Check className="h-3 w-3"/> Approve intro</button>
              <button className="px-3 py-1.5 rounded-full border border-[#FAF7F2]/20 text-xs">Suggest edits</button>
              <button className="px-3 py-1.5 rounded-full text-xs text-[#FAF7F2]/60 inline-flex items-center gap-1"><X className="h-3 w-3"/> Reject</button>
            </div>
          </motion.div>
        ))}
      </div>
    </Panel>
  )
}

function Reviews() {
  return (
    <Panel title="Connection reviews" sub="Introductions waiting on the team’s approval.">
      <div className="space-y-3">
        {[1,2].map(i=>(
          <div key={i} className="p-4 rounded-xl border border-[#FAF7F2]/10 bg-black/30 grid md:grid-cols-3 items-center gap-3">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full overflow-hidden"><img src={IMG.hero1} alt="" className="w-full h-full object-cover"/></div><div><div className="text-sm font-medium">Person A</div><div className="text-xs text-[#FAF7F2]/60">Needs help with an app idea</div></div></div>
            <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/60 justify-center"><span className="h-px w-6 bg-[#FAF7F2]/20"/>connect<span className="h-px w-6 bg-[#FAF7F2]/20"/></div>
            <div className="flex items-center gap-3 md:justify-end"><div className="text-right md:order-2"><div className="text-sm font-medium">Person B</div><div className="text-xs text-[#FAF7F2]/60">Offers mobile dev mentorship</div></div><div className="h-10 w-10 rounded-full overflow-hidden md:order-3"><img src={IMG.mentor1} alt="" className="w-full h-full object-cover"/></div></div>
            <div className="md:col-span-3 flex gap-2 pt-3 border-t border-[#FAF7F2]/10">
              <button className="px-3 py-1.5 rounded-full bg-[#3D5A55] text-white text-xs">Approve</button>
              <button className="px-3 py-1.5 rounded-full border border-[#FAF7F2]/20 text-xs">Hold for review</button>
              <button className="px-3 py-1.5 rounded-full text-xs text-[#FAF7F2]/60">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function ActiveConnections() {
  return (
    <Panel title="Active connections" sub="Introduced pairs. Private conversations are not exposed here.">
      <div className="grid md:grid-cols-2 gap-3">
        {[[IMG.hero1, IMG.mentor1],[IMG.hero3, IMG.conn2],[IMG.hero2, IMG.mentor2]].map(([a,b],i)=>(
          <div key={i} className="p-4 rounded-xl border border-[#FAF7F2]/10 bg-black/30 flex items-center gap-3">
            <div className="flex -space-x-2"><div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-[#1a1a19]"><img src={a} className="w-full h-full object-cover" alt=""/></div><div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-[#1a1a19]"><img src={b} className="w-full h-full object-cover" alt=""/></div></div>
            <div className="flex-1">
              <div className="text-sm">Connected {i+2} weeks ago</div>
              <div className="text-xs text-[#FAF7F2]/60">Status: healthy · last message today</div>
            </div>
            <button className="text-xs text-[#FAF7F2]/60 hover:text-[#FAF7F2] inline-flex items-center gap-1">Details <ArrowUpRight className="h-3 w-3"/></button>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function Conversations() {
  return (
    <Panel title="Conversations overview" sub="Only high-level status. Private message content is not shown.">
      <div className="grid grid-cols-3 gap-3 max-w-md">
        <Stat n="12" l="Healthy"/>
        <Stat n="3" l="Quiet"/>
        <Stat n="1" l="Reported"/>
      </div>
      <p className="mt-6 text-sm text-[#FAF7F2]/60 max-w-lg">Moderation is human-reviewed only when a report is filed. We treat conversation content as private by default.</p>
    </Panel>
  )
}
