import React from 'react'
import Navbar from '../../components/website-components/Navbar'
import Footer from '../../components/website-components/Footer'
import ViewSingleLiveGroup from '../../components/website-components/view-single-livegroup'
import MobileNav from '../../components/website-components/mobile-nav'

const ViewLiveGroup = () => {
  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <MobileNav />
          <ViewSingleLiveGroup />
          <Footer />
    </div>
  )
}

export default ViewLiveGroup
