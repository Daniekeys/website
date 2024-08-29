import React, { useState } from "react";


import {Link} from "react-router-dom";
import logo from "../../assets/icons/lang-logo.svg";
import { Bars, CloseIcon } from "../../assets/website-icons";



const MobileNav = () => {
  const [show, setShow] = useState(false);
 
 
   
 
  return (
    <div>
      <div className="w-full bg-white pt-4 fixed top-0 nav-index left-0 right-0 flex flex-col lg:hidden overflow-x-hidden z-modal ">
        <div className="w-full flex items-center justify-between px-4 h-[65px]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] h-auto" />
          </Link>

          <div className="w-fit" onClick={() => setShow(!show)}>
            {show ? (
              <span>
                {" "}
                <CloseIcon />{" "}
              </span>
            ) : (
              <span>
                {" "}
                <Bars />{" "}
              </span>
            )}
          </div>
        </div>

        {show && (
          <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-screen relative ">
            <div className="flex flex-col w-full px-4 mt-[45px] gap-6">
              <span>
                <Link
                  to={"#coaches"}
                  className="red-hat font-semibold text-base "
                >
                  Find Coaches
                </Link>
              </span>
              <span>
                <Link
                  to={"#coaches"}
                  className="red-hat font-semibold text-base "
                >
                  Corporate training
                </Link>
              </span>
              <span>
                <Link
                  to={"#coaches"}
                  className="red-hat font-semibold text-base "
                >
                  Become a coach
                </Link>
              </span>

              <div className="flex flex-col  space-y-5 absolute bottom-40 ">
                <Link
                  to={"/all-coaches"}
                  className="h-[41px] rounded-[4px] bg-primary text-white px-6 font-medium red-hat flex items-center "
                >
                  Book a coach
                </Link>
                <button className="h-[41px] rounded-[4px] bg-[#464646] text-white px-6 font-medium red-hat ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
