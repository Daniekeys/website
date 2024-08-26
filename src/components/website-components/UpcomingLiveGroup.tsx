import React,{useState, useEffect, useCallback} from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllUpcomingLG } from '../../features/offeringslice';
import LoadingComponent from '../Loaders/skeleton-loading';

import LiveOfferingCard from './singleLiveCard';
const UpcomingLiveGroup = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const offering = useAppSelector(state => state.offerings);
    const upcomingOffering = offering?.allUpcomingLiveClasses?.offerings;

      const fetchData = useCallback(async () => {
        await dispatch(getAllUpcomingLG({page:0,pageSize:20}));
       
        setLoading(false);
      }, []);

      useEffect(() => {
        fetchData();
      }, []);
   
    
  return (
    <div className="w-full py-16 2xl:py-[100px] bg-white ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="2xl:text-[40px] md:text-3xl text-2xl font-bold red-hat 2xl:leading-[48px]  ">
            Upcoming Live & Group Classes
          </h1>
          <p className="text-base text-[#707070] red-hat md:text-lg 2xl:text-xl red-hat 2xl:leading-[30px]">
            Learn on the go, anywhere and anytime with MyLangCoach expert
            coaches.
          </p>
          {loading && (
            <div className="mt-6 w-full">
              <LoadingComponent />
            </div>
          )}
          {upcomingOffering?.length > 0 && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 mt-12 ">
              {upcomingOffering?.map((item: any, index: number) => {
                return <LiveOfferingCard item={item} key={index} />;
              })}
            </div>
          )}
          <div className="w-full mt-12 flex items-center justify-center">
            <button className="h-[41px] rounded-[4px] bg-primary text-white px-6 font-medium red-hat w-fit ">
              View more classes
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default UpcomingLiveGroup
