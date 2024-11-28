

import ContainerLayout from "../../layouts/ContainerLayout";
import woman from "../../assets/png/become-girl.png";
import { Link } from "react-router-dom";
import { appUrl } from "../../util/endpoints";
const Become = () => {
  return (
    <div className="w-full bg-white py-16 xl:py-[100px]">
      <ContainerLayout>
        <div className="w-full flex flex-col lg:flex-row lg:items-center gap-y-8 ">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={woman}
              alt="woman"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center ">
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-[40px] font-bold red-hat 2xl:leading-[48px] lg:max-w-[568px]">
              Become a Coach
            </h1>
            <p className="red-hat text-sm sm:text-base lg:max-w-[500px] mt-6 ">
              Earn money sharing your expert knowledge with students. Sign up to
              start tutoring online with Preply. Find new students Grow your
              business Get paid securely
            </p>
            <ul className="list-disc ml-4 mt-6">
              <li className="font-bold red-hat text-base lg:text-xl">
                Find new students
              </li>
              <li className="font-bold red-hat text-base lg:text-xl">
                Grow your business
              </li>
              <li className="font-bold red-hat text-base lg:text-xl">
                Get Paid securely
              </li>
            </ul>
            <span>
              <Link
                to={`${appUrl}/register`}
                target="_blank"
                
                className="px-6 h-[37px] rounded-[4px] bg-black text-white flex items-center justify-center text-sm font-medium red-hat mt-12 w-fit"
              >
                Become a coach
              </Link>
            </span>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Become;
