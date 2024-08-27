import {useState} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import logo from "../../assets/icons/lang-logo.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full'>
      <ContainerLayout>
        <div className="w-full lg:flex items-center justify-between mt-6 mb-6 bg-white hidden ">
          <span>
            <img src={logo} alt="logo" className="w-[140px] h-auto" onClick={() => navigate("/")} />
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
                to={"#coaches"}
                className="red-hat font-semibold text-base "
              >
                Become a coach
              </Link>
            </span>
          </div>
          <div className="w-auto flex items-center gap-3">
         
              <button className="h-[41px] rounded-[4px] bg-primary text-white px-6 font-medium red-hat ">
                Book a coach
              </button>
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
