
import {useState,useEffect} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import arrowF from "../../assets/icons/arrow-forward.svg";
import arrowB from "../../assets/icons/arrow-back.svg";
import girlA from "../../assets/png/girl-1.png";
import girlB from "../../assets/png/girl-2.png";
import girlC from "../../assets/png/girl-3.png";
const testimonials = [
  {
    image: girlB,
    imageB: girlA,
    text: "“I wholeheartedly endorse enrolling in this Spanish course at MyLangCoach!”",
    description: `“I wholeheartedly endorse enrolling in this Spanish course at MyLangCoach! The instructor is not only captivating and well-informed but also makes learning enjoyable and stimulating. You’ll acquire extensive knowledge of the Spanish language and culture, and develop the necessary abilities for proficient communication in both written and spoken Spanish. Whether you’re just starting or already an intermediate learner, Don’t delay – enroll today!”`,
    name: "Ogueri, Blessing Chisom",
  },
  {
    image: girlB,
    imageB: girlC,
    text: "“Learning Spanish here has been a life-changing experience!”",
    description: `“Learning Spanish here has been a life-changing experience! The instructors break things down so easily, and the progress I’ve made is incredible. This course offers a unique, fun approach to learning the language, and the cultural immersion is a bonus. I highly recommend it for anyone serious about mastering Spanish.”`,
    name: "John Doe",
  },
  {
    image: girlC,
    imageB: girlB,
    text: "“A brilliant course for Spanish enthusiasts!”",
    description: `“A brilliant course for Spanish enthusiasts! The curriculum is rich and diverse, covering every aspect you need to become proficient. The lessons are engaging, and you’ll love every minute of it. Take the leap and improve your Spanish today!”`,
    name: "Jane Smith",
  },
];
const Learners = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [fade, setFade] = useState(true);

 useEffect(() => {
   const interval = setInterval(() => {
     setFade(false);
     setTimeout(() => {
       setCurrentIndex((prevIndex) =>
         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
       );
       setFade(true);
     }, 500); // Duration of fade-out
   }, 5000); // 5-second interval

   return () => clearInterval(interval);
 }, []);

 const nextTestimonial = () => {
   setFade(false);
   setTimeout(() => {
     setCurrentIndex((prevIndex) =>
       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
     );
     setFade(true);
   }, 500);
 };

 const prevTestimonial = () => {
   setFade(false);
   setTimeout(() => {
     setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
     );
     setFade(true);
   }, 500);
 };
  return (
    <div className="py-16 lg:py-[100px]">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-between ">
            <h2 className="red-hat font-bold text-2xl 2xl:text-[40px] md:text-3xl 2xl:leading-[48px] ">
              Hear from our learners
            </h2>
            <div className="flex gap-6">
              <span className="cursor-pointer" onClick={prevTestimonial}>
                <img src={arrowB} alt="arrow" className="w-auto h-auto" />
              </span>
              <span className="cursor-pointer" onClick={nextTestimonial}>
                <img src={arrowF} alt="arrow" className="w-auto h-auto" />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row mt-10 md:mt-[55px] gap-[60px]">
            <div className="w-full xl:w-2/3 flex flex-col md:flex-row">
              <span className="w-full md:w-1/2">
                <img
                  className={`w-full h-auto rounded-l-[20px] ${
                    fade ? "fade-in" : "fade-out"
                  }`}
                  alt="fold"
                  src={testimonials[currentIndex].image}
                />
              </span>
              <div className="w-full md:w-1/2 flex flex-col bg-[#ECF4FF] p-4 lg:p-6 rounded-r-[20px]">
                <h1 className="text-black font-bold xl:max-w-[372px] text-lg lg:text-2xl red-hat ">
                  {testimonials[currentIndex].text}
                </h1>
                <p className="mt-6 text-sm red-hat text-black text-opacity-80 leading-[24px] ">
                  {testimonials[currentIndex].description}
                </p>
                <div className="mt-6 rounded-[100px] bg-white w-fit px-2 h-[33px] gap-3 flex items-center  ">
                  <span>
                    <img
                      src={testimonials[currentIndex].image}
                      alt=""
                      className="w-7 h-7 rounded-full"
                    />
                  </span>
                  <p className="text-sm font-medium">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <img
                src={testimonials[currentIndex].imageB}
                alt="man"
                className={`${
                  fade ? "fade-in" : "fade-out"
                } w-full h-auto rounded-l-[20px] `}
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Learners
