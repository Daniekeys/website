import { act, useCallback, useEffect, useState } from "react";
import { ClassDetails } from "../../util/types";
import pic from "../../assets/png/face-woman.png";
import {
  BlueTimeIcon,
  BlueVideoIcon,
  CancelX,
  DollarIcon,
  YellowCalender,
  YellowCap,
} from "../../assets";
import ReUseModal from "../modal/Modal";

import { DateTimeInput, Input } from "../Input";
import { store } from "../../app/store";
import toast from "react-hot-toast";
import { resetRedirect, saveRedirectUrl } from "../../features/auth/authSlice";
import {
  bookCoachOffering,
  bookLiveGroupOffering,
  getAvailability,
 
} from "../../features/offeringslice";
import { restoreDefault } from "../../features/paymentslice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { payForOffering } from "../../features/paymentslice";
const LiveOfferingCard = ({ item }: { item: ClassDetails }) => {
  const authenticated = store.getState().auth?.token;
  const userPic = pic;
  const handleError = (e: any) => {
    e.target.onerror = null; // Prevent looping
    e.target.src = pic;
  };
  const urlId = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const offering = useAppSelector((state) => state.offerings);
   const payment = useAppSelector((state) => state.payment);
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const [successData, setSuccessData] = useState<any>({});

  const [openLive, setOpenLive] = useState(false);

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
            console.log({data})
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
      className="w-full flex flex-col offering-shadow rounded-md cursor-pointer"
      key={item?.id}
      onClick={() => {
        if (item?.type === "ONE_TIME") {
          setOpen(true);
        }
        if (item?.type === "ONE_MONTHLY" && item?.seriesCount === 1) {
          setOpen(true);
        }
      
        if (item?.type === "LIVE_GROUP") {
          setOpenLive(true);
        }
      }}
    >
      <img
        src={item?.coverImageUrl}
        onError={handleError}
        alt=""
        className=" rounded-md w-full h-[240px] object-cover "
      />
      <div className="flex flex-col p-[18px] bg-white ">
        <h1 className="font-bold text-lg red-hat capitalize">{item?.title}</h1>
        <p className="text-base red-hat mt-6">{item?.description}</p>
        {/* <p className="text-base red-hat mt-6">
          {item?.type === "LIVE_GROUP" && "LIVE GROUP"}
          {item?.type === "ONE_MONTHLY" && "ONE MONTHLY"}
          {item?.type === "ONE_TIME" && "ONE TIME"}
        </p> */}

        <div className="w-full flex items-center mt-6 justify-between">
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
        </div>

        <div className="w-full flex items-center gap-4 mt-6 border-t  border-t-border pt-3">
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
        </div>
      </div>
      <ReUseModal
        open={open}
        setOpen={setOpen}
        width="sm:max-w-[630px] sm:w-full"
      >
      
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
