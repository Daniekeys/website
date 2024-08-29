import React from 'react'
import Navbar from '../../components/website-components/Navbar'
import MobileNav from '../../components/website-components/mobile-nav'
import Footer from '../../components/website-components/Footer'
import AllCoaches from '../../components/website-components/AllCoaches'

const AllCoachesPage = () => {
  return (
    <div className='w-full flex flex-col'>
          <Navbar active />
          <MobileNav />
          <AllCoaches />
          <Footer />
    </div>
  )
}

export default AllCoachesPage
