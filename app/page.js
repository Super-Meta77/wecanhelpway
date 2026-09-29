'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@/components/wchw/Navigation'
import Footer from '@/components/wchw/Footer'
import HomeView from '@/components/wchw/HomeView'
import NeedHelpView from '@/components/wchw/NeedHelpView'
import OfferHelpView from '@/components/wchw/OfferHelpView'
import HowItWorksView from '@/components/wchw/HowItWorksView'
import DashboardView from '@/components/wchw/DashboardView'
import ConnectionsView from '@/components/wchw/ConnectionsView'
import ChatView from '@/components/wchw/ChatView'
import AboutView from '@/components/wchw/AboutView'
import AdminView from '@/components/wchw/AdminView'

const App = () => {
  const [view, setView] = useState('home')
  const [activeChat, setActiveChat] = useState('c1')

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [view])

  return (
    <div className="min-h-screen">
      <Navigation view={view} setView={setView} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            {view === 'home' && <HomeView setView={setView} />}
            {view === 'need' && <NeedHelpView setView={setView} />}
            {view === 'offer' && <OfferHelpView setView={setView} />}
            {view === 'how' && <HowItWorksView setView={setView} />}
            {view === 'dashboard' && <DashboardView setView={setView} setActiveChat={setActiveChat} />}
            {view === 'connections' && <ConnectionsView setView={setView} setActiveChat={setActiveChat} />}
            {view === 'chat' && <ChatView activeChat={activeChat} setActiveChat={setActiveChat} />}
            {view === 'about' && <AboutView setView={setView} />}
            {view === 'admin' && <AdminView />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setView={setView} />
    </div>
  )
}

export default App
