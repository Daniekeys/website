import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ContainerLayout from '../../layouts/ContainerLayout';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { bookLiveGroupOffering, getAllUpcomingLG, getSingleUpcomingLG, restoreDefault } from '../../features/offeringslice';
import LoadingComponent from '../Loaders/skeleton-loading';
import { url } from 'inspector';
import { WhiteVerify } from '../../assets/website-icons';
import { formatDateTime } from '../../util';
import { Input } from "../Input";
import { CancelX } from '../../assets';
import { Button } from '../Button';
import ReUseModal from '../modal/Modal';
import toast from 'react-hot-toast';
import { payForOffering } from '../../features/paymentslice';

const ViewSingleLiveGroup = () => {
     const location = useLocation();

     // Extract query parameters from the URL
     const queryParams = new URLSearchParams(location.search);

     // Get the value of the slugURL parameter
    const slugURL = queryParams.get("slugURL");

    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [fetchLoading, setFetchLoading] = useState<boolean>(true);
    const offering = useAppSelector((state) => state.offerings);
  const singleUpcoming = offering?.singleUpcoming;


    const fetchData = useCallback(async () => {
      await dispatch(getSingleUpcomingLG({  slugURL: slugURL }));

      setFetchLoading(false);
    }, []);

    useEffect(() => {
      fetchData();
    }, []);
  
   const payment = useAppSelector((state) => state.payment);

   const [open, setOpen] = useState<boolean>(false);

   const [openLive, setOpenLive] = useState(false);
   const [openShare, setOpenShare] = useState(false);

   const [note, setNote] = useState("");
   const [email, setEmail] = useState("");

   const handleBookLiveClass = async () => {
     if (active) {
       setLoading(true);
       const sentdata = {
         slugURL: singleUpcoming?.slug,
         data: {
           note: note,
           email: email,
           // email:userEmail
         },
       };

       const { payload } = await dispatch(bookLiveGroupOffering(sentdata));
       console.log(payload);
       if (payload?.status === "success") {
         setLoading(false);
         setOpenLive(false);
         if (singleUpcoming?.isFree) {
           toast.success("Booking successful check your mail box");
           setEmail("");
           setNote("");
         } else {
           toast.success("Booking successfully proceed to make payment");

           const data = {
             seriesId: payload?.data?.[0]?.seriesId,
             paymentMethod: "TRANSFER",
             email: email,
           };

           dispatch(payForOffering(data));
         }
       }
     } else {
       toast.error("Note and email  must be provided");
     }
   };
   const [active, setActive] = useState(false);
   useEffect(() => {
     if (email && note) {
       setActive(true);
     } else setActive(false);
   }, [email, note]);
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


  
  if (fetchLoading) {
    return (
      <div className=" w-full mt-24">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className="w-full mt-20  ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          {/* start of hero */}
          <div
            className="w-full h-screen lg:h-[555px] flex flex-col justify-center  lg:pl-12 pl-4 "
            style={{
              backgroundImage: `linear-gradient(90deg, #0E79FF 1.6%, rgba(14, 121, 255, 0) 100%), url(${singleUpcoming?.coverImageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <span className="bg-[#FABC4E] rounded-[4px] text-white px-[6px] border border-[#E3970F] py-1 w-fit">
              Monthly
            </span>
            <h1 className="text-white text-2xl md:text-3xl xl:text-[48px] font-bold red-hat max-w-[568px] mt-6 ">
              {singleUpcoming?.title}
            </h1>
            <div className="flex items-center mt-6 gap-3">
              <img
                src={singleUpcoming?.coverImageUrl}
                className="w-6 h-6 rounded-full"
                alt="coverimage"
              />
              <p className="text-white text-lg font-medium red-hat">
                {singleUpcoming?.coachName}
              </p>
              <span>
                <WhiteVerify />
              </span>
            </div>
          </div>
          {/* end of the hero sessioms */}
          <div className="w-full  lg:p-12 flex flex-col mt-12 lg:mt-0">
            <h1 className="text-lg font-semibold inter ">Description</h1>
            <p className="mt-6 text-muted text-base sm:text-xl max-w-[626px]">
              {singleUpcoming?.description}
            </p>
            <div className="-w-full lg:max-w-[680px] grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6 mt-12 ">
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Class Type</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  LIVE GROUP
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">
                  Number of Seat
                </p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.numOfAttendees}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className=" inter text-lg font-semibold ">Attendance Type</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.attendantType}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">
                  Number of registered attendees
                </p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.registeredAttendeesCount}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Number of series</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.seriesCount}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Duration</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.duration} mins
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Pricing type</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.isFree ? "FREE" : "PAID"}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Pricing type(#)</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.cost?.amount}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Language Tag</p>
                <p className="text-muted text-base sm:text-lg  inter mt-2">
                  {singleUpcoming?.languageTag}
                </p>
              </div>
              {/* end */}
              {/* star  t */}
              <div className="w-full flex flex-col">
                <p className="text-lg font-semibold inter ">Class Dates</p>
                {singleUpcoming?.liveDateTimes?.map(
                  (item: any, index: number) => (
                    <p
                      className="text-muted text-base sm:text-lg  inter mt-2"
                      key={index}
                    >
                      {`${formatDateTime(item).date}, ${
                        formatDateTime(item)?.time
                      }`}
                    </p>
                  )
                )}
              </div>
              {/* end */}
            </div>
            <div className="mt-12 mb-20">
              <button
                className="w-fit px-6 rounded-[4px] h-[41px] bg-primary text-white font-medium red-hat text-base cursor-pointer border-[2px] border-[#394EF1] "
                onClick={() => setOpenLive(true)}
              >
                Book live group class
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
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
}

export default ViewSingleLiveGroup
