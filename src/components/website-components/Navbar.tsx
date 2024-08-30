import {useState} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import logo from "../../assets/icons/lang-logo.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ active }: { active: boolean }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  console.log(active)
  return (
    <div
      className={` hidden lg:flex w-full rounded-t-[8px]  py-6  ${
        active
          ? "bg-white z-nav fixed top-0 right-0 left-0  "
          : "bg-[#F0F5FC] mt-12  "
      } `}
    >
      <ContainerLayout>
        <div className="w-full lg:flex items-center justify-between   hidden   ">
          <span>
            <img
              src={logo}
              alt="logo"
              className="w-[140px] h-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
          </span>
          <div className="w-auto flex items-center gap-6 ">
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
                to={"/all-coaches"}
                className="red-hat font-semibold text-base "
              >
                Become a coach
              </Link>
            </span>
          </div>
          <div className="w-auto flex items-center gap-3">
            <Link
              to={"/all-coaches"}
              className="h-[41px] rounded-[4px] bg-primary border-[2px] border-[#394EF1] flex items-center text-white px-6 font-normal red-hat hover:bg-[#0E60FF] transition-all ease-in-out  hover:scale-105 "
            >
              Book a coach
            </Link>
            <button className="h-[41px] rounded-[4px] bg-[#464646] border-[2px] border-black text-white px-6 font-normal hover:bg-[#353434] transition-all ease-in-out  red-hat hover:scale-105 ">
              Learn more
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Navbar
