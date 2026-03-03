
import { Features } from '#/components/landing/Features'
import { Hero } from '#/components/landing/Hero'
import { Integrations } from '#/components/landing/Integrations'
import Footer from '#/components/layout/Footer'
import { Navbar } from '#/components/layout/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
   <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 font-sans antialiased">
      {/* Sticky Navigation 
          Ensures the user can always access 'Get Started' 
      */}
      <Navbar />

      <main>
        {/* Hero Section 
            Contains the dynamic switching UI (Dashboard, Booking, Sync).
        */}
        <Hero  />

        {/* Features Section 
            The 3-card sliding carousel with professional capability headers.
        */}
        <Features />

        {/* Integrations / Tech Stack 
            The high-density grid showing the MERN + Prisma tools.
        */}
        <Integrations />
      </main>

      {/* Footer 
          The high-end centric column layout with the developer contact card.
      */}
     <Footer />
    </div>
  )
}
