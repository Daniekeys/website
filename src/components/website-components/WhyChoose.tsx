import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { LessonIcon,AllIcon,PerfectIcon,LearnIcon,TrackIcon,PersonalIcon } from '../../assets/website-icons'
const WhyChoose = () => {
  return (
    <div className="bg-white red-hat my-16 lg:my-[100px] ">
      <ContainerLayout>
        <div className="w-full flex flex-col ">
          <h1 className="red-hat font-bold 2xl:text-[48px] md:text-3xl text-2xl ">
            Why choose MyLangCoach
          </h1>

          <div className="w-full mt-6 grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 xl:grid-cols-3">
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <AllIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                All-in-one platform
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                Browse all coaches and use whiteboard, notes, and vocabulary in
                one place.
              </p>
            </div>
            {/* emd */}
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <PerfectIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                Perfect coach match
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                Find a coach who shares your interests so you actually enjoy
                your lessons.
              </p>
            </div>
            {/* emd */}
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <LearnIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                Learn with any coach
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                No need to commit to one tutor forever. Switch tutors anytime
                you want.
              </p>
            </div>
            {/* emd */}
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <TrackIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                Track your progress
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                Never lose sight of where and how quickly you are going.
              </p>
            </div>
            {/* emd */}
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <LessonIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                Lesson notes
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                Jot down all the important stuff. Your tutor can do the same.
              </p>
            </div>
            {/* emd */}
            {/* start */}
            <div className="w-full bg-white flex flex-col verify-shadow rounded-[8px] gap-3 p-4 lg:p-[18px]">
              <span>
                <PersonalIcon />
              </span>
              <p className="text-base md:text-xl lg:text-2xl font-bold red-hat text-black">
                Personal vocabulary
              </p>
              <p className="text-sm md:text-base text-[#4f4f4f] ">
                Make your own list of words that you feel you need to know.
              </p>
            </div>
            {/* emd */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default WhyChoose
