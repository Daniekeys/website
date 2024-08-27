import {useEffect, useState} from 'react'
import Navbar from './Navbar';
import ContainerLayout from '../../layouts/ContainerLayout';
const langs = ["Yoruba", "English", "Spanish", "Hausa", "Igbo", "Chinese"];
import woman from "../../assets/png/hero-woman.png";
import globe from "../../assets/icons/globe.svg";
import lang from "../../assets/icons/lang-icon.svg";
import PrimarySelect from '../Selects/PrimarySelect';
const langData = [
  { name: "English", value: "English" },
  { name: "Spanish", value: "Spanish" },
  { name: "Yoruba", value: "Yoruba" },
  { name: "Hausa", value: "Hausa" },
  { name: "French", value: "French" },
  { name: "Igbo", value: "Igbo" },
];
const timeData = [
  { name: "Any", value: "Any" },
  { name: "Weekly", value: "Weekly" },

];
const rangeData = [
  { name: "#5000 - #50000", value: "5000" },
  { name: "#10000 - #50000", value: "5000" },
  { name: "#15000 - #50000", value: "5000" },
  { name: "#20000 - #50000", value: "5000" },

];

const Hero = () => {
     const [displayText, setDisplayText] = useState<string>("");
     const [index, setIndex] = useState<number>(0);
     const [isDeleting, setIsDeleting] = useState<boolean>(false);
     const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(450);
  const [isCoach, setIsCoach] = useState(true);
  const [ selectedLang, setSelectedLang ] = useState({});
  const [ selectedRange, setSelectedRange ] = useState({});
  const [ selectedTime, setSelectedTime ] = useState({});



     useEffect(() => {
       let typingTimeout: NodeJS.Timeout;

       if (!isDeleting && displayText === langs[index]) {
         typingTimeout = setTimeout(() => setIsDeleting(true), 1000); // Pause at end of word
       } else if (isDeleting && displayText === "") {
         setIsDeleting(false);
         setIndex((prevIndex) => (prevIndex + 1) % langs.length); // Move to next language
       } else {
         typingTimeout = setTimeout(() => {
           const nextDisplayText = isDeleting
             ? langs[index].substring(0, displayText.length - 1)
             : langs[index].substring(0, displayText.length + 1);

           setDisplayText(nextDisplayText);

           if (!isDeleting && nextDisplayText === langs[index]) {
             setTypingSpeed(150); // Pause after typing the word
           } else {
             setTypingSpeed(isDeleting ? 75 : 150);
           }
         }, typingSpeed);
       }

       return () => clearTimeout(typingTimeout);
     }, [displayText, isDeleting, index, typingSpeed]);

  
  return (
    <>
      <div className="w-full  flex flex-col bg-[#F0F5FC] pb-10 lg:mt-0 mt-20 pt-10 ">
        <ContainerLayout>
          <div className="w-full flex flex-col relative">
            {/* hero side */}
            <div className="w-full flex flex-col lg:flex-row  lg:items-center lg:justify-between h-full">
              <div className="w-full lg:w-6/12 flex h-full flex-col justify-center">
                <h1 className="text-black max-w-[656px] text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold red-hat xl:leading-[60px]  ">
                  Learn <span className="text-primary">{displayText}</span>
                  <span className="border-r-0 border-primary text-primary animate-blink">
                    |
                  </span>
                  with expert coaches on MyLangCoach
                </h1>

                <p className="mt-6 text-base lg:text-xl red-hat">
                  Your dedicated language coaches!
                </p>
                <span className="flex items-center mt-6 gap-4">
                  <img src={lang} alt="" />
                  <p className="text-muted lg:text-base text-sm">
                    Learn a new language and expand your horizon
                  </p>
                </span>
                <span className="flex items-center gap-4 mt-3">
                  <img src={globe} alt="" />
                  <p className="text-muted text-sm lg:text-base max-w-[412px]">
                    Connect with our community of language enthusiast all over
                    the world.
                  </p>
                </span>
              </div>
              <div className="w-full lg:w-5/12">
                <img
                  src={woman}
                  alt="my-lang-ilus"
                  className="w-full h-auto object-contain max-w-[500px]"
                />
              </div>
            </div>
            {/* search side */}

            {/* search area */}
          </div>
        </ContainerLayout>
      </div>
      <div className="w-full lg:-mt-20">
        <ContainerLayout>
          <div className="w-full xl:w-11/12 mx-auto flex flex-col pb-24 ">
            <div className="w-full grid grid-cols-2 max-w-[465px] min-h-[32px]">
              <div
                className={`flex items-center justify-center cursor-pointer ${
                  isCoach
                    ? "bg-white text-[#09090B] text-sm inter font-medium "
                    : "bg-[#e0ebfa] shadow-md text-muted text-sm font-medium inter "
                }`}
                onClick={() => setIsCoach(true)}
              >
                Find Coach
              </div>
              <div
                className={`flex items-center justify-center cursor-pointer ${
                  !isCoach
                    ? "bg-white"
                    : "bg-[#e0ebfa] bg-opacity-70 shadow-md text-muted text-sm font-medium inter "
                }`}
                onClick={() => setIsCoach(false)}
              >
                Top Languages
              </div>
            </div>
            {/* find coach sesseion */}
            {isCoach && (
              <div className="w-full flex flex-col relative bg-white search-shadow">
                <div className="w-full flex flex-col lg:flex-row py-6 px-2 lg:px-6 gap-6">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    <div className="w-full relative">
                      <PrimarySelect
                        label={""}
                        selected={selectedLang}
                        setSelected={setSelectedLang}
                        data={langData}
                        listHeight="max-h-[100px]"
                      />
                    </div>
                    <div className="w-full relative">
                      <PrimarySelect
                        label={""}
                        selected={selectedRange}
                        setSelected={setSelectedRange}
                        data={rangeData}
                        listHeight="max-h-[100px]"
                      />
                    </div>
                    <div className="w-full relative">
                      <PrimarySelect
                        label={""}
                        selected={selectedTime}
                        setSelected={setSelectedTime}
                        data={timeData}
                        listHeight="max-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="span w-full lg:w-[100px] min-w-[100px] max-w-[110px]">
                    <button className="h-11 px-6 rounded-[4px] border-[2px] flex items-center justify-center border-[#394EF1] text-white red-hat text-base lg:text-lg bg-[#0E79FF]">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* end of find coach */}
          </div>
        </ContainerLayout>
      </div>
    </>
  );
}

export default Hero
