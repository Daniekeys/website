import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import whiteLogo from "../../assets/svg/white-logo.svg"
import { Link } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-black py-16 2xl:py-[100px] ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-8 ">
            {/* start of a sec */}
            <div className="w-full lg:w-4/12 flex flex-col">
              <span>
                <img src={whiteLogo} alt="logo" className='max-w-[105px] h-auto' />
              </span>
              <p className="mt-6 text-white dm-sans max-w-[321px]">
                MyLangCoach connects language learners with professional
                coaches, offering tailored lessons that cater to individual
                learning styles and goals.
              </p>
            </div>
            {/* end of a sec */}
            {/* start of a sec */}
            <div className="w-full lg:w-3/12 flex flex-col">
              <h3 className="text-white font-bold dm-sans lg:text-base text-sm ">
                How can we help you?
              </h3>

              <p className="mt-6 text-[#E0E0E0] dm-sans ">About Us</p>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Become a coach
              </Link>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Live Chat
              </Link>
            </div>
            {/* end of a sec */}
            {/* start of a sec */}
            <div className="w-full lg:w-2/12 flex flex-col">
              <h3 className="text-white font-bold dm-sans lg:text-base text-sm ">
                Social Media
              </h3>

              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Twitter
              </Link>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Facebook
              </Link>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Instagram
              </Link>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Linkedin
              </Link>
            </div>
            {/* end of a sec */}
            {/* start of a sec */}
            <div className="w-full lg:w-3/12 flex flex-col">
              <h3 className="text-white font-bold dm-sans lg:text-base text-sm ">
                How can we help you?
              </h3>

              <p className="mt-6 text-[#E0E0E0] dm-sans ">About Us</p>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Become a coach
              </Link>
              <Link to={"#"} className="mt-6 text-[#E0E0E0] dm-sans ">
                Live Chat
              </Link>
            </div>
            {/* end of a sec */}
            {/* start of a sec */}
          </div>
          <div className="mt-12 lg:mt-[60px] w-full flex items-center justify-between lg:flex-row flex-col-reverse gap-6">
            <p className="text-xs text-[#E0E0E0] dm-sans">
              MyLang Coach LTD. | All Rights Reserved {year ?? ""}
            </p>
            <div className="flex gap-4  lg:flex-row lg:gap-8 lg:items-center lg:w-3/12">
              <Link to={"#"} className="text-xs text-[#E0E0E0] dm-sans">
                Terms & Conditions
              </Link>
              <Link to={"#"} className="text-xs text-[#E0E0E0] dm-sans">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Footer
