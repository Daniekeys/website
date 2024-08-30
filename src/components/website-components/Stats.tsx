import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import manPics from "../../assets/png/man-pics.png"
const Stats = () => {
  return (
    <div className="w-full mt-[100px] bg-[#F0F5FC] py-12 rounded-[8px] ">
      <ContainerLayout>
        <div className="w-full flex flex-col lg:flex-row justify-between  items-center ">
          <div className="w-full lg:w-5/12 flex flex-col ">
            <img
              src={manPics}
              alt="amn"
              className="w-auto h-auto object-contain max-w-[293px]"
            />
          </div>
          {/* second session */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <h3 className="font-bold text-2xl lg:text-3xl xl:text-[33px] red-hat xl:leading-[39px] max-w-[678px]">
              Let us help you achieve your language learning dreams across all
              nationalities.
            </h3>
            <p className="mt-6 text-[#707070] xl:text-xl sm:text-lg  leading-[30px] text-base red-hat max-w-[619px]">
              Looking for an online English coach? MyLang Coach is the leading
              online language learning platform worldwide. Read more
            </p>
            <div className="w-full items-center flex gap-3 mt-12  ">
              <button className="h-[41px] rounded-[4px] bg-primary text-white px-6 font-normal red-hat  hover:bg-[#0E60FF] transition-all ease-in-out  hover:scale-105 border-[2px] border-[#394EF1]">
                Book a coach
              </button>
              <button className="h-[41px] rounded-[4px] bg-[#464646] text-white px-6 font-normal red-hat hover:bg-[#353434] transition-all ease-in-out  red-hat hover:scale-105 border-[2px] border-black ">
                Learn more
              </button>
            </div>
            <div className="mt-12 bg-white  rounded-[12px] gap-8 flex flex-wrap justify-between p-4 ">
              <span className="flex flex-col">
                <p className="text-lg md:text-2xl font-bold red-hat text-[#18181B]">
                  20+
                </p>
                <p className="text-muted text-sm">Experienced coaches</p>
              </span>
              <span className="flex flex-col">
                <p className="text-lg md:text-2xl font-bold red-hat text-[#18181B]">
                  6+
                </p>
                <p className="text-muted text-sm">Languages taught</p>
              </span>
              <span className="flex flex-col">
                <p className="text-lg md:text-2xl font-bold red-hat text-[#18181B]">
                  3+
                </p>
                <p className="text-muted text-sm">Coaches nationalities</p>
              </span>
            </div>
          </div>
          {/* end of second session */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Stats
