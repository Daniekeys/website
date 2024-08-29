import React, { useEffect } from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { SearchIconA, SearchFilter, NotificationIcon } from '../../assets';
import SingleCoachCard from '../coaches-component/single-coach-card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllCoaches } from '../../features/auth/authSlice';
import LoadingComponent from '../Loaders/skeleton-loading';

const AllCoaches = () => {
      const dispatch = useAppDispatch();
      const auth = useAppSelector((state) => state.auth);

      useEffect(() => {
          dispatch(getAllCoaches());
          window?.scrollTo(0, 0);
        // dispatch(getAllStudent());
      }, []);
      if (auth?.loading) {
        return (
          <div className="p-8 mt-20">
            <ContainerLayout>

            <LoadingComponent />
            </ContainerLayout>
          </div>
        );
      }
  return (
    <div className='w-full mt-24 mb-24'>
      <ContainerLayout>
        <div className="w-full flex flex-col py-6 lg:px-12 px-4 gap-12  ">
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-[10px] w-auto items-center">
              <div className="flex gap-[10px]  border-border border-[0.5px] items-center px-[10px] bg-white h-[40px] rounded-[4px] lg:w-5/12 lg:min-w-[389px] flex-grow  ">
                <span>
                  <SearchIconA />
                </span>
                <input type="text" className="flex-grow" />
              </div>
              <span>
                <SearchFilter />
              </span>
            </div>
            <span>
             
            </span>
          </div>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-base  md:text-xl text-black font-bold red-hat">
              Based on your language preference
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {auth?.allCoaches?.map((item: any, index: any) => {
                return <SingleCoachCard key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default AllCoaches
