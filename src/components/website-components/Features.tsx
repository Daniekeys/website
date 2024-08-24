import {useEffect, useState} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import chatActive from "../../assets/svg/active-chat-a.svg";
import chatInActive from "../../assets/svg/inactive-caht-a.svg";
import searchActive from "../../assets/svg/active-search-a.svg";
import searchInActive from "../../assets/svg/inactive-search-a.svg";
import bookActive from "../../assets/svg/active-book-a.svg";
import bookInActive from "../../assets/svg/inactive-book-a.svg";

const Features = () => {
    const [current, setCurrent] = useState(0);
   useEffect(() => {
     setTimeout(() => {
        setCurrent((prev) => prev === 2 ? 0 : prev + 1)
     }, 2000);
   }, [current])
    
    
   
    

  return (
    <div className="bg-white ">
      <ContainerLayout>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 h-full mb-4  ">
          {/* start of a single session */}
          <div
            className={`${
              current === 0 ? "bg-[#0E79FF]" : "bg-white"
            } rounded-[6px] flex items-center feat-shadow p-6 gap-6 `}
          >
            <span>
              <img
                src={current === 0 ? chatActive : chatInActive}
                alt="chat"
                className="w-[56px] h-[56px] rounded-full"
              />
            </span>
            <span className="flex flex-col gap-3">
              <p
                className={`${
                  current === 0 ? "text-white" : "text-black"
                } font-bold lg:text-[19px] text-base red-hat `}
              >
                Chat with an Expert
              </p>
              <p
                className={`${
                  current === 0 ? "text-white" : "text-muted"
                } font-normal lg:text-[16px] text-sm red-hat leading-[24px] `}
              >
                Chat with an expert to gain valuable insights.
              </p>
            </span>
          </div>

          {/* end of a single session */}
          {/* start of a single session */}
          <div
            className={`${
              current === 1 ? "bg-[#0E79FF]" : "bg-white"
            } rounded-[6px] flex items-center feat-shadow p-6 gap-6 `}
          >
            <span>
              <img
                src={current === 1 ? searchActive : searchInActive}
                alt="chat"
                className="w-[56px] h-[56px] rounded-full"
              />
            </span>
            <span className="flex flex-col gap-3">
              <p
                className={`${
                  current === 1 ? "text-white" : "text-black"
                } font-bold lg:text-[19px] text-base red-hat `}
              >
                Search for a Coach
              </p>
              <p
                className={`${
                  current === 1 ? "text-white" : "text-muted"
                } font-normal lg:text-[16px] text-sm red-hat leading-[24px] `}
              >
                Find a coach to guide your personal growth
              </p>
            </span>
          </div>

          {/* end of a single session */}
          {/* start of a single session */}
          <div
            className={`${
              current === 2 ? "bg-[#0E79FF]" : "bg-white"
            } rounded-[6px] flex items-center feat-shadow p-6 gap-6 `}
          >
            <span>
              <img
                src={current === 2 ? bookActive : bookInActive}
                alt="chat"
                className="w-[56px] h-[56px] rounded-full"
              />
            </span>
            <span className="flex flex-col gap-3">
              <p
                className={`${
                  current === 2 ? "text-white" : "text-black"
                } font-bold lg:text-[19px] text-base red-hat `}
              >
                Book a Lesson
              </p>
              <p
                className={`${
                  current === 2 ? "text-white" : "text-muted"
                } font-normal lg:text-[16px] text-sm red-hat leading-[24px] `}
              >
                Book a session now to learn and grow
              </p>
            </span>
          </div>

          {/* end of a single session */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Features
