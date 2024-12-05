import React, { useEffect, useState } from 'react'
import Features from '../../components/website-components/Features'
import Stats from '../../components/website-components/Stats'
import WhyChoose from '../../components/website-components/WhyChoose'
import Online from '../../components/website-components/Online'
import Become from '../../components/website-components/Become'
import Footer from '../../components/website-components/Footer'
import UpcomingLiveGroup from '../../components/website-components/UpcomingLiveGroup'
import Learners from '../../components/website-components/Learners'
import Navbar from '../../components/website-components/Navbar'
import Hero from '../../components/website-components/Hero'
import MobileNav from '../../components/website-components/mobile-nav'
import { useLocation } from 'react-router-dom'
import { logPageView } from '../../util/analytics'

const Home = () => {
    const [active, setActive] = useState<boolean>(false);
 const location = useLocation();

 useEffect(() => {
   logPageView();
 }, [location]);
    useEffect(() => {
      if (typeof window) {
        const handleScroll = () => {
          window.pageYOffset > 40 ? setActive(true) : setActive(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }, []);
  return (
    <div className="w-full">

    <div className='w-full flex flex-col relative bg-white lg:px-12   '>
      
      <Navbar active={active} />
      <MobileNav />
      <Hero />
      <Features />
      <Stats />
      <UpcomingLiveGroup />
      <Learners />
      <WhyChoose />
      <Online />
      <Become />
    </div>
      <Footer />
    </div>
  )
}

export default Home
