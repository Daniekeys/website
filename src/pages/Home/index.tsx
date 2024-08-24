import React from 'react'
import Features from '../../components/website-components/Features'
import Stats from '../../components/website-components/Stats'
import WhyChoose from '../../components/website-components/WhyChoose'
import Online from '../../components/website-components/Online'
import Become from '../../components/website-components/Become'
import Footer from '../../components/website-components/Footer'
import UpcomingLiveGroup from '../../components/website-components/UpcomingLiveGroup'

const Home = () => {
  return (
    <div className='w-full flex flex-col '>
      <UpcomingLiveGroup />
      <Features />
      <Stats />
      <WhyChoose />
      <Online />
      <Become />
      <Footer />
    </div>
  )
}

export default Home
