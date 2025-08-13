import React from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/landing/Hero'
import FocusAreas from '@/components/landing/FocusAreas'
import Programs from '@/components/landing/Programs'
import Contact from '@/components/landing/Contact'

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Landing