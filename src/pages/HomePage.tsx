
import { useState } from 'react'
import Browse from '../components/Browse'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'




const HomePage = () => {



  return (
    <div className={`w-wcreen `}>
        <Navbar />
        <HeroImage />
        <Intro />
        <Faq />
        <Footer />
    </div>
  )
}

export default HomePage