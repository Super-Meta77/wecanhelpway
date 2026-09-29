'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, MessageCircle, HandHeart, HeartHandshake, Bell, Compass } from 'lucide-react'
import { CONNECTIONS, NOTIFICATIONS, OPPORTUNITIES, IMG } from '@/lib/mockData'

export default function DashboardView({ setView, setActiveChat }) {
  const active = CONNECTIONS.filter(c=>c.status==='active')
  const openChat = (id) => { setActiveChat(id); setView('chat') }

  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#6B6862]">Dashboard</div>
            <h1 className="editorial text-5xl md:text-6xl leading-[0.98] mt-3">How can we <span className="editorial-italic text-[#E76F51]">help</span> today?</h1>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={()=>setView('need')} className="px-4 py-2 rounded-full btn-accent text-sm inline-flex items-center gap-2"><HandHeart className="h-4 w-4"/> New request</button>
            <button onClick={()=>setView('offer')} className="px-4 py-2 rounded-full border-2 border-[#0F0F0E] text-sm inline-flex items-center gap-2 hover:bg-[#0F0F0E] hover:text-[#FAF7F2]"><HeartHandshake className="h-4 w-4"/> New offer</button>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <Card title="My Requests" cta="View all" icon={<HandHeart className="h-4 w-4"/>} onClick={()=>setView('need')} className="lg:col-span-4">
            <RequestRow label="Help launching a mobile app idea" status="Under review" days="2d"/>
            <RequestRow label="Someone to talk to about career direction" status="Matched" days="1w" highlight/>
            <RequestRow label="Learn the basics of marketing" status="Sourcing" days="3d"/>
          </Card>

          <Card title="My Connections" cta="See all" icon={<Sparkles className="h-4 w-4"/>} onClick={()=>setView('connections')} className="lg:col-span-4">
            {active.slice(0,3).map(c=>(
              <button key={c.id} onClick={()=>openChat(c.id)} className="w-full flex items-center gap-3 py-3 text-left hover:bg-[#0F0F0E]/[0.03] px-2 -mx-2 rounded-lg">
                <div className="relative h-10 w-10 rounded-full overflow-hidden"><img src={IMG[c.img]} alt="" className="w-full h-full object-cover"/></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{c.name}</div>
                  <div className="text-xs text-[#6B6862] truncate">{c.role}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#6B6862]"/>
              </button>
            ))}
          </Card>

          <Card title="My Conversations" cta="Open chat" icon={<MessageCircle className="h-4 w-4"/>} onClick={()=>{setActiveChat('c1'); setView('chat')}} className="lg:col-span-4">
            {active.map(c=>(
              <button key={c.id} onClick={()=>openChat(c.id)} className="w-full flex items-center gap-3 py-3 text-left hover:bg-[#0F0F0E]/[0.03] px-2 -mx-2 rounded-lg">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <img src={IMG[c.img]} alt="" className="w-full h-full object-cover"/>
                  {c.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#3D5A55] ring-2 ring-white"/>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{c.name}</div>
                  <div className="text-xs text-[#6B6862] truncate">Say hi, or continue the conversation.</div>
                </div>
              </button>
            ))}
          </Card>

          <Card title="Recommended Opportunities" cta="Explore" icon={<Compass className="h-4 w-4"/>} className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-3 mt-1">
              {OPPORTUNITIES.map(o=>(
                <div key={o.id} className="p-4 rounded-xl border hairline bg-[#FAF7F2]/70">
                  <div className="text-[10px] uppercase tracking-widest text-[#E76F51]">{o.kind}</div>
                  <div className="editorial text-xl mt-1 leading-tight">{o.title}</div>
                  <div className="text-xs text-[#6B6862] mt-1">{o.by}</div>
                  <p className="text-sm mt-3 text-[#2B2A28]">{o.fit}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Updates" cta="All notifications" icon={<Bell className="h-4 w-4"/>} className="lg:col-span-4">
            {NOTIFICATIONS.map(n=>(
              <div key={n.id} className="py-3 flex gap-3 border-b hairline last:border-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E76F51] mt-2 shrink-0"/>
                <div>
                  <div className="text-sm leading-snug">{n.text}</div>
                  <div className="text-xs text-[#6B6862] mt-0.5">{n.when}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}

function Card({ title, cta, icon, children, onClick, className='' }) {
  return (
    <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}}
      className={`rounded-2xl border hairline bg-white p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex h-7 w-7 rounded-full bg-[#0F0F0E]/5 items-center justify-center">{icon}</span>
          <span className="editorial text-xl">{title}</span>
        </div>
        {cta && <button onClick={onClick} className="text-xs text-[#6B6862] hover:text-[#0F0F0E] inline-flex items-center gap-1">{cta} <ArrowUpRight className="h-3.5 w-3.5"/></button>}
      </div>
      <div className="mt-3">{children}</div>
    </motion.div>
  )
}

function RequestRow({ label, status, days, highlight }) {
  return (
    <div className="py-3 flex items-center gap-3 border-b hairline last:border-0">
      <div className="flex-1">
        <div className="text-sm">{label}</div>
        <div className="text-xs text-[#6B6862] mt-0.5">{days} ago</div>
      </div>
      <span className={`text-[11px] px-2 py-1 rounded-full ${highlight? 'bg-[#E76F51] text-white':'bg-[#0F0F0E]/5 text-[#2B2A28]'}`}>{status}</span>
    </div>
  )
}
