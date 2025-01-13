import React, { useEffect,useState } from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { SearchIconA, SearchFilter, NotificationIcon } from '../../assets';
import SingleCoachCard from '../coaches-component/single-coach-card';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllCoaches } from '../../features/auth/authSlice';
import LoadingComponent from '../Loaders/skeleton-loading';
interface CoachLanguage {
  language: string;
  proficiency: string;
}

interface CostPerSession {
  sessionType: number;
  amount: number;
  currency: string;
}

interface Coach {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string | null;
  gender: string;
  profileImage: string;
  slug: string | null;
  description: string;
  bio: string;
  role: string;
  country: string;
  socials: string[];
  emailVerified: boolean;
  accountSetupCompleted: boolean;
  lastSignin: string;
  spents: number;
  earnings: number;
  accumulatedEarnings: string;
  status: string;
  qualifications: {
    name: string;
    year: number;
    issuing_org: string;
  }[];
  introVideo: string;
  createdAt: string;
  updatedAt: string;
  coachLanguage: CoachLanguage[];
  costPerSession: CostPerSession[];
}
const AllCoaches = () => {
      const dispatch = useAppDispatch();
      const auth = useAppSelector((state) => state.auth);

      useEffect(() => {
          dispatch(getAllCoaches());
          window?.scrollTo(0, 0);
        // dispatch(getAllStudent());
      }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    
    if (!searchTerm) {
      setSearchResults(auth?.allCoaches);
      return;
    }
    else {
    

    const searchResult = auth?.allCoaches.filter((coach: Coach) => {  
      return coach.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
         coach.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || 
         coach.coachLanguage.some(lang => lang.language.toLowerCase().includes(searchTerm.toLowerCase())) || 
         coach.costPerSession.some(session => session.amount.toString().includes(searchTerm));
    });

    
    setSearchResults( searchResult);
  }

  }, [searchTerm])
  
  
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
                <input type="text" className="flex-grow border-none outline-none" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a coach"
                />
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
              {searchResults?.map((item: any, index: any) => {
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
