'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONNECTIONS, MOCK_MESSAGES, IMG } from '@/lib/mockData'
import { Paperclip, Send, MoreHorizontal, Shield, ChevronLeft, Search } from 'lucide-react'

export default function ChatView({ activeChat, setActiveChat }) {
  const [convId, setConvId] = useState(activeChat || 'c1')
  const conv = CONNECTIONS.find(c => c.id === convId) || CONNECTIONS[0]
  const initial = MOCK_MESSAGES[convId] || MOCK_MESSAGES['c1']
  const [messages, setMessages] = useState(initial)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => { setMessages(MOCK_MESSAGES[convId] || []) }, [convId])
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }) }, [messages, typing])

  const send = () => {
    if (!text.trim()) return
    const now = new Date()
    const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
    setMessages(m => [...m, { id: Date.now(), from:'me', text: text.trim(), time }])
    setText('')
    setTimeout(() => setTyping(true), 500)
    setTimeout(() => {
      setTyping(false)
      setMessages(m => [...m, { id: Date.now()+1, from:'them', text: pickReply(text), time }])
    }, 1800)
  }

  const active = CONNECTIONS.filter(c=>c.status==='active' || c.status==='completed')

  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-4 h-[calc(100vh-180px)] min-h-[560px]">
          {/* List */}
          <aside className="md:col-span-4 lg:col-span-3 rounded-2xl border hairline bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b hairline">
              <div className="editorial text-2xl">Messages</div>
              <div className="mt-3 relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6862]"/>
                <input placeholder="Search" className="w-full pl-9 pr-3 py-2 rounded-full bg-[#0F0F0E]/5 outline-none text-sm"/>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto thin-scroll">
              {active.map(c=>(
                <button key={c.id} onClick={()=>{setConvId(c.id); setActiveChat(c.id)}} className={`w-full flex items-center gap-3 p-4 text-left hover:bg-[#0F0F0E]/[0.04] border-b hairline ${convId===c.id?'bg-[#E76F51]/[0.06]':''}`}>
                  <div className="relative h-11 w-11 rounded-full overflow-hidden">
                    <img src={IMG[c.img]} alt="" className="w-full h-full object-cover"/>
                    {c.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#3D5A55] ring-2 ring-white"/>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{c.name}</div>
                    <div className="text-xs text-[#6B6862] truncate">{c.role}</div>
                  </div>
                  <div className="text-[10px] text-[#6B6862]">{c.date.split(' ')[0]}</div>
                </button>
              ))}
            </div>
          </aside>

          {/* Conversation */}
          <div className="md:col-span-8 lg:col-span-9 rounded-2xl border hairline bg-white overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b hairline flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="md:hidden" onClick={()=>{}}><ChevronLeft className="h-5 w-5"/></button>
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <img src={IMG[conv.img]} alt="" className="w-full h-full object-cover"/>
                  {conv.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#3D5A55] ring-2 ring-white"/>}
                </div>
                <div>
                  <div className="text-sm font-medium leading-tight">{conv.name}</div>
                  <div className="text-xs text-[#6B6862]">{conv.online? 'Online':'Offline'} · {conv.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#6B6862]">
                <span className="hidden md:inline-flex text-[11px] items-center gap-1 px-2.5 py-1 rounded-full bg-[#3D5A55]/10 text-[#3D5A55]"><Shield className="h-3 w-3"/> Connection verified</span>
                <button className="p-2 rounded-full hover:bg-[#0F0F0E]/5"><MoreHorizontal className="h-4 w-4"/></button>
              </div>
            </div>

            <div className="px-5 py-3 border-b hairline bg-[#FAF7F2]/50">
              <div className="text-xs text-[#6B6862]">Connected because: <span className="text-[#2B2A28]">{conv.reason}</span></div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll px-5 py-6 space-y-3 bg-[#FAF7F2]/30">
              <AnimatePresence initial={false}>
                {messages.map(m=>(
                  <motion.div key={m.id} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.25}}
                    className={`flex ${m.from==='me'?'justify-end':'justify-start'}`}>
                    <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[14.5px] leading-snug ${m.from==='me'? 'bg-[#0F0F0E] text-[#FAF7F2] rounded-br-md':'bg-white border hairline rounded-bl-md'}`}>
                      {m.text}
                      <div className={`text-[10px] mt-1 ${m.from==='me'?'text-[#FAF7F2]/60':'text-[#6B6862]'}`}>{m.time}</div>
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border hairline">
                      <div className="flex gap-1">
                        {[0,1,2].map(i=>(<motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-[#6B6862]" animate={{y:[0,-4,0]}} transition={{duration:0.9, repeat:Infinity, delay:i*0.15}}/>))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-4 border-t hairline">
              <div className="flex items-end gap-2 bg-[#0F0F0E]/[0.04] rounded-2xl p-2">
                <button className="p-2 text-[#6B6862] hover:text-[#0F0F0E]"><Paperclip className="h-5 w-5"/></button>
                <textarea rows={1} value={text} onChange={e=>setText(e.target.value)}
                  onKeyDown={e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send() } }}
                  placeholder="Write a message…"
                  className="flex-1 resize-none bg-transparent px-2 py-2 outline-none text-[15px] max-h-32"/>
                <button onClick={send} disabled={!text.trim()} className="p-2.5 rounded-xl btn-accent disabled:opacity-40 disabled:cursor-not-allowed"><Send className="h-4 w-4"/></button>
              </div>
              <div className="mt-2 text-[11px] text-[#6B6862]">Private 1-on-1 conversation. Report or block from the menu.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function pickReply(text) {
  const t = text.toLowerCase()
  if (t.includes('thank')) return 'Anytime. I’m glad we’re talking.'
  if (t.includes('idea')) return 'Tell me more — what part feels hardest to work out?'
  if (t.includes('help')) return 'Happy to help. Where would you like to start?'
  if (t.includes('?')) return 'Good question. Let me think for a second and come back to you.'
  return 'Got it. Let’s take it one step at a time.'
}
