
import ContainerLayout from '../../layouts/ContainerLayout'
import woman from "../../assets/png/online-woman.png"
const Online = () => {

  return (
    <div className="w-full bg-[#F6F4FF] py-16 xl:py-[100px]">
      <ContainerLayout>
        <div className="w-full flex flex-col-reverse gap-y-6 lg:flex-row lg:items-center ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center ">
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-[40px] font-bold red-hat 2xl:leading-[48px] lg:max-w-[568px]">
              Online English coaches & teachers for private lessons
            </h1>
            <p className="red-hat text-sm sm:text-base lg:max-w-[500px] mt-6 ">
              Looking for an online English tutor? MyLang Coach is the leading
              online language learning platform worldwide. <span className="font-bold">Read more</span> 
            </p>
          </div>
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <img src={woman} alt="woman" className='w-auto h-auto object-contain' />
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Online
