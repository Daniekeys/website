
import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import arrowF from "../../assets/icons/arrow-forward.svg";
import arrowB from "../../assets/icons/arrow-back.svg";
import foldMan from "../../assets/png/fold-man.png";
import foldGirl from "../../assets/png/fold-girl.png";
const Learners = () => {
  return (
    <div className="py-16 lg:py-[100px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between ">
            <h2 className="red-hat font-bold text-2xl 2xl:text-[40px] md:text-3xl 2xl:leading-[48px] ">
              Hear from our learners
            </h2>
            <div className="flex gap-6">
              <span className="">
                <img src={arrowB} alt="arrow" className="w-auto h-auto" />
              </span>
              <span className="">
                <img src={arrowF} alt="arrow" className="w-auto h-auto" />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row mt-10 md:mt-[55px] gap-[60px]">
            <div className="w-full xl:w-2/3 flex flex-col md:flex-row">
              <span className="w-full md:w-1/2">
                <img
                  src={foldGirl}
                  alt="fold"
                  className="w-full h-auto rounded-l-[20px]"
                />
              </span>
              <div className="w-full md:w-1/2 flex flex-col bg-[#ECF4FF] p-4 lg:p-6 rounded-r-[20px]">
                <h1 className="text-black font-bold xl:max-w-[372px] text-lg lg:text-2xl red-hat ">
                  “I wholeheartedly endorse enrolling in this Spanish course at
                  MyLangCoach!”
                </h1>
                <p className="mt-6 text-sm red-hat text-black text-opacity-80 leading-[24px] ">
                  “I wholeheartedly endorse enrolling in this Spanish course at
                  MyLangCoach! The instructor is not only captivating and
                  well-informed but also makes learning enjoyable and
                  stimulating. You’ll acquire extensive knowledge of the Spanish
                  language and culture, and develop the necessary abilities for
                  proficient communication in both written and spoken Spanish.
                  Whether you’re just starting or already an intermediate
                  learner,  Don’t delay – enroll today!”
                </p>
                <div className="mt-6 rounded-[100px] bg-white w-fit px-2 h-[33px] gap-3 flex items-center  ">
                  <span>
                    <img
                      src={foldGirl}
                      alt=""
                      className="w-7 h-7 rounded-full"
                    />
                  </span>
                  <p className="text-sm font-medium">Ogueri, Blessing Chisom</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
            <img src={foldMan} alt="man" className='w-full h-auto rounded-l-[20px]' /></div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Learners
