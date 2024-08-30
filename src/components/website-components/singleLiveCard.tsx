import { useEffect, useState } from "react";
import { ClassDetails } from "../../util/types";
import pic from "../../assets/png/face-woman.png";
import {
  BlueTimeIcon,
  BlueVideoIcon,
  CancelX,
  CapIcon,
  DollarIcon,
  UsersIcon,
  VerifyIcon,
  YellowCalender,
  YellowCap,
} from "../../assets";
import ReUseModal from "../modal/Modal";
import { FaShareAlt } from "react-icons/fa";

import { Input } from "../Input";
import ar from "../../assets/png/ar.png";
import toast from "react-hot-toast";
import {
  bookLiveGroupOffering,
 
} from "../../features/offeringslice";
import { restoreDefault } from "../../features/paymentslice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { payForOffering } from "../../features/paymentslice";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import { IoCopyOutline } from "react-icons/io5";
const LiveOfferingCard = ({ item }: { item: ClassDetails }) => {

    const url = `https://my-lang-website-daniekeys-projects.vercel.app/view-livegroup?slugURL=${item?.slug}`;
    const text = "Check out this awesome page!";

    const handleShare = (shareUrl: string) => {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    };
  const handleError = (e: any) => {
    e.target.onerror = null; // Prevent looping
    e.target.src = pic;
  };
  const urlId = useParams();
  const dispatch = useAppDispatch();

   const payment = useAppSelector((state) => state.payment);
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);


  const [openLive, setOpenLive] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");


  const handleBookLiveClass = async() => {
  
      if (active) {
        setLoading(true);
        const sentdata = {
          slugURL: item?.slug,
          data: {
            note: note,
            email:email,
            // email:userEmail
          },
        };

        const { payload } = await dispatch(bookLiveGroupOffering(sentdata));
        console.log(payload)
        if (payload?.status === "success") {
          setLoading(false);
          setOpenLive(false);
          if (item?.isFree) {
            toast.success("Booking successful check your mail box");
            setEmail("");
            setNote("");
          }
          else {
            toast.success("Booking successfully proceed to make payment");

            const data = {
              seriesId: payload?.data?.[0]?.seriesId,
              paymentMethod: "TRANSFER",
              email: email,
            };
           
                 dispatch(payForOffering(data));
               };
          
        }
        
      } else {
        toast.error("Note and email  must be provided");
      }
    
  };
  const [active, setActive] = useState(false);
useEffect(() => {
  if (email && note) {
    setActive(true);
  }
  else setActive(false);
}, [email, note])
     useEffect(() => {
       if (
         payment?.offeringPaymentSuccess &&
         payment?.offeringPaymentResp?.authorization_url
       ) {
         window.open(payment?.offeringPaymentResp?.authorization_url, "_blank");
         setTimeout(() => {
           dispatch(restoreDefault());
         }, 2000);
       }
   
     }, [payment?.offeringPaymentSuccess]);




  const handleCloseLive = () => {
    setTimeout(() => {
      setOpenLive(false);
   
    }, 50);
  };



  return (
    <div
      className="w-full flex flex-col offering-shadow rounded-[8px] cursor-pointer"
      key={item?.id}
    >
      <img
        src={item?.coverImageUrl}
        onError={handleError}
        alt=""
        className=" rounded-t-[8px] r w-full h-[240px] object-cover "
        onClick={() => {
          if (item?.type === "LIVE_GROUP") {
            setOpenLive(true);
          }
        }}
      />
      <div className="flex flex-col p-[18px] bg-white ">
        <h1 className="font-bold text-xl red-hat capitalize">{item?.title}</h1>
        <div className="flex gap-3 items-center mt-2">
          <span>
            <img
              src={item?.coverImageUrl}
              alt=""
              className="w-6 h-6 rounded-full"
            />
          </span>
          <h1 className="text-sm lg:text-base font-medium red-hat capitalize truncate">
            {item?.coachName?.toLowerCase()}
          </h1>
          <img src={ar} alt="ar" />
          <span>
            <VerifyIcon />
          </span>
        </div>
        <p className="text-base red-hat mt-6">{item?.description}</p>
        {/* <p className="text-base red-hat mt-6">
          {item?.type === "LIVE_GROUP" && "LIVE GROUP"}
          {item?.type === "ONE_MONTHLY" && "ONE MONTHLY"}
          {item?.type === "ONE_TIME" && "ONE TIME"}
        </p> */}

        {/* <div className="w-full flex items-center mt-6 justify-between">
          <span className="flex items-center gap-2">
            <YellowCap />
            <p className="text-muted dm-sans ">
              {item?.seriesCount} {`Class${item?.seriesCount > 1 ? "es" : ""}`}{" "}
              Offered
            </p>
          </span>
          <span className="flex items-center gap-2">
            <YellowCalender />
            <p className="text-muted dm-sans ">
              {item?.type === "LIVE_GROUP" && "LIVE GROUP"}
              {item?.type === "ONE_MONTHLY" && "ONE MONTHLY"}
              {item?.type === "ONE_TIME" && "ONE TIME"}
            </p>
          </span>
        </div> */}
        <div className="flex items-center gap-[6px] mt-6">
          <span>
            <CapIcon />
          </span>
          <p className="text-muted  text-sm">{item?.languageTag}</p>
        </div>
        <div className="gap-4 flex items-center mt-3 ">
          <div className="flex items-center gap-[6px]">
            <span>
              <UsersIcon />
            </span>
            <p className="text-muted  text-sm">
              {item?.numOfAttendees} Seat{item?.numOfAttendees > 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex items-center gap-[6px] ">
            <span className="bg-muted w-[5px] h-[5px] rounded-full"></span>
            <p className="text-muted  text-sm">
              {item?.registeredAttendeesCount} registered attendees
            </p>
          </div>
        </div>
        <p className="text-sm sm:text-base xl:text-base font-bold red-hat mt-6">
          {item?.isFree ? "FREE" : item?.cost?.amount}
        </p>
        {/* <div className="w-full flex items-center gap-4 mt-6  pt-3">
          <div className="flex gap-3  items-center">
            <span>
              <DollarIcon />
            </span>
            <p className="text-muted font-medium dm-sams">
              {item?.isFree ? "FREE" : item?.cost?.amount}
            </p>
          </div>

          <div className="flex gap-3 items-center ">
            <span>
              <BlueTimeIcon />
            </span>
            <p className="text-muted font-medium dm-sams">
              {item?.duration ?? "45 mins"}
            </p>
          </div>
          <div className="flex gap-3 items-center ">
            <span>
              <BlueVideoIcon />
            </span>
            <p className="text-muted font-medium dm-sams">Video Call</p>
          </div>
        </div> */}
        <div className="w-full grid grid-cols-2 gap-4 mt-6">
          <button
            className="bg-black text-white red-hat h-[37px] flex items-center justify-center w-full cursor-pointer rounded-[4px] hover:bg-[#0E60FF] transition-all ease-in-out  hover:scale-105 hover:text-white "
            onClick={() => {
              setOpenLive(true);
            }}
          >
            Join Class
          </button>
          <button
            className="bg-transparent border border-black text-black red-hat h-[37px] flex items-center justify-center w-full rounded-[4px] hover:bg-[#0E60FF] transition-all ease-in-out  hover:scale-105 hover:text-white "
            onClick={() => {
              setOpenShare(true);
            }}
          >
            Share{" "}
          </button>
        </div>
      </div>
      <ReUseModal open={openShare} setOpen={setOpenShare}>
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center">
            <p className="red-hat text-black text text-lg font-bold md:text-xl xl:text-2xl ">
              Copy and share link{" "}
            </p>
            <button
              className="cursor-pointer"
              onClick={() => setOpenShare(false)}
            >
              <CancelX />
            </button>
          </div>
          <div className="w-full mt-8 flex flex-col">
            <p className="text-muted text-sm">Share this link via</p>
            <div className="flex items-center gap-6 flex-wrap mt-3">
              <button
                onClick={() =>
                  handleShare(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      url
                    )}`
                  )
                }
              >
                <img src={facebook} alt="facebook" className="w-10 h-10" />
              </button>

              {/* X (Twitter) Share Button */}
              <button
                onClick={() =>
                  handleShare(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      url
                    )}&text=${encodeURIComponent(text)}`
                  )
                }
              >
                <img src={twitter} alt="facebook" className="w-10 h-10" />
              </button>

              {/* LinkedIn Share Button */}
              <button
                onClick={() =>
                  handleShare(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      url
                    )}`
                  )
                }
              >
                <img src={linkedin} alt="facebook" className="w-10 h-10" />
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={() =>
                  handleShare(
                    `https://wa.me/?text=${encodeURIComponent(
                      text
                    )}%20${encodeURIComponent(url)}`
                  )
                }
              >
                <img src={whatsapp} alt="facebook" className="w-10 h-10" />
              </button>

              {/* Instagram Share Button - Note: No direct share functionality */}
              <button onClick={() => navigator.clipboard.writeText(url)}>
                <img src={instagram} alt="facebook" className="w-10 h-10" />
              </button>
            </div>
            <p className="mt-6 text-muted red-hat text-sm ">or copy link</p>
            <div className="flex h-12 items-center bg-[#F0F5FC] rounded-[12px] justify-between ">
              <div className="flex gap-2 items-center w-2/3 pl-2">
                <span className="text-black">
                  <IoCopyOutline />
                </span>
                <p className="text-black truncate ">{url}</p>
              </div>
              <button
                className=" w-fit bg-black rounded-[12px] px-4 h-12 flex items-center justify-center font-medium text-white "
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  toast.success("Copied to clipboard");
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </ReUseModal>
      <ReUseModal open={openLive} setOpen={setOpenLive}>
        <div className="w-full flex flex-col min-w-[300px] lg:min-w-max">
          <div className="flex justify-end mb-3">
            <button className="cursor-pointer" onClick={handleCloseLive}>
              <CancelX />
            </button>
          </div>
          <h1 className="text-xl font-bold red-hat mb-4 ">
            Live Group Booking
          </h1>
          <div className="mb-4">
            <Input
              label={"Add A Session Note"}
              placeholder="Enter Note..."
              value={note}
              setValue={setNote}
              // onChange={(e: any) => setNote(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              label={"Enter Email"}
              placeholder="your email"
              value={email}
              setValue={setEmail}
              // onChange={(e: any) => setNote(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Button
              name={loading ? "Loading..." : "Book Now"}
              height="h-[49px]"
              className={`flex-grow ${
                !active && "opacity-40 cursor-not-allowed"
              }`}
              onClick={handleBookLiveClass}
              disabled={!active}
            />
          </div>
        </div>
      </ReUseModal>
    </div>
  );
};

export default LiveOfferingCard;
