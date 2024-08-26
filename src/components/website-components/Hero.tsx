import {useEffect, useState} from 'react'
import Navbar from './Navbar';
import ContainerLayout from '../../layouts/ContainerLayout';
const langs = ["Yoruba", "English", "Spanish", "Hausa", "Igbo", "Chinese"];
import woman from "../../assets/png/hero-woman.png";
const Hero = () => {
     const [displayText, setDisplayText] = useState<string>("");
     const [index, setIndex] = useState<number>(0);
     const [isDeleting, setIsDeleting] = useState<boolean>(false);
     const [loopNum, setLoopNum] = useState<number>(0);
     const [typingSpeed, setTypingSpeed] = useState<number>(450);

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
      <div className="w-full hidden lg:flex flex-col bg-[#F0F5FC]">
        <ContainerLayout>
          <div className="w-full flex flex-col">
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
                <p className="mt-6 text-base lg:text-xl red-hat">Your dedicated language coaches!</p>
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
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Hero
