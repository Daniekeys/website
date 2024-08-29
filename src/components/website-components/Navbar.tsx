import {useState} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import logo from "../../assets/icons/lang-logo.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ active }: { active: boolean }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` hidden lg:flex w-full fixed top-0 right-0 left-0 py-6  ${
        active ? "bg-white z-nav" : "bg-transparent"
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
              className="h-[41px] rounded-[4px] bg-primary flex items-center text-white px-6 font-medium red-hat "
            >
              Book a coach
            </Link>
            <button className="h-[41px] rounded-[4px] bg-[#464646] text-white px-6 font-medium red-hat ">
              Learn more
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Navbar
