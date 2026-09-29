'use client'
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer({ setView }) {
  return (
    <footer className="border-t hairline bg-[#F3EEE5] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#0F0F0E] text-[#FAF7F2]">
              <span className="editorial text-lg leading-none">w</span>
              <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-[#E76F51]" />
            </span>
            <span className="editorial text-xl">WeCanHelpWay</span>
          </div>
          <p className="editorial text-3xl md:text-4xl leading-[1.05] mt-6 max-w-md">Everyone deserves a way forward.</p>
          <p className="text-sm text-[#6B6862] mt-6 max-w-md">A place people come when they need help, when they have something to offer, or when they simply do not know where to start.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[#6B6862] mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {[['how','How It Works'],['need','I Need Help'],['offer','I Want to Help'],['about','About'],['admin','Team Console']].map(([k,l])=>(
              <li key={k}><button onClick={()=>setView(k)} className="hover:text-[#E76F51]">{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[#6B6862] mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-[#2B2A28]">
            <li>hello@wecanhelpway.co</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <div className="flex gap-3 mt-6 text-[#6B6862]">
            <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 hover:text-[#0F0F0E]"/></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-[#0F0F0E]"/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4 hover:text-[#0F0F0E]"/></a>
            <a href="#" aria-label="Github"><Github className="h-4 w-4 hover:text-[#0F0F0E]"/></a>
          </div>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#6B6862]">
          <div>© {new Date().getFullYear()} WeCanHelpWay. Made for people finding their way forward.</div>
          <div>Prototype build. Interactions are simulated with mock data.</div>
        </div>
      </div>
    </footer>
  )
}
