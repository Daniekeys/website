
import React from "react";
import Navbar from "../../components/website-components/Navbar";
import Footer from "../../components/website-components/Footer";
import ViewSingleLiveGroup from "../../components/website-components/view-single-livegroup";
import MobileNav from "../../components/website-components/mobile-nav";
import ViewAllLiveGroups from "../../components/website-components/ViewAllLiveGroups";

const AllClasses = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar active />
      <MobileNav />
      <ViewAllLiveGroups />
      <Footer />
    </div>
  );
};

export default AllClasses;
