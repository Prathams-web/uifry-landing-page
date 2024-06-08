import Image from 'next/image';
import Button from './Button'; // Assuming Button.tsx is in the same directory
import { FC } from 'react';
import { ArrowRight, CirclePlay } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <>
      <div className="flex ">
        {/* Left Span */}
        <div className="md:justify-start lg:justify-start items-center md:items-start lg:items-start text-center md:text-left lg:text-left w-full md:w-1/2 lg:w-1/2 text-white justify-between">
          <div className='flex flex-col'>
            <div className=' px-4 md:px-1 lg:px-6 py-3 lg:py-4 mt-8 md:mt-20 lg:mt-40 md:ml-16 lg:ml-28'>
              <h1 className="text-black font-bold text-[30px] md:text-[4vw] lg:text-[4vw] mb-4 tracking-tight leading-none">Make The Best Financial Decisions</h1>
              <p className="text-gray-500 text-[17px] text-lg lg:text-base mb-6">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              <div className="flex space-x-4 justify-center md:justify-start lg:justify-start">
                <button className='bg-black text-white text-sm rounded-sm flex py-3 px-4 gap-2'>Get Started <ArrowRight /></button>
                <button className='text-black text-sm flex py-3 px-4 gap-2'><CirclePlay /> Watch Video</button>
              </div>
            </div>
            <div className=' md:hidden lg:block px-10 sm:px-15 md:px-15 lg:px-20 pt-5 md:pt-8 lg:pt-8'>
              <Image src="/assets/images/herosectionleft.svg" alt="herosectionleft" width={600} height={400} className="mt-6 w-full object-cover"/>
            </div>
          </div>
        </div>
        
        {/* Right Span */}
        <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2 text-white flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <Image src="/assets/images/herosectionright.svg" alt="herosectionright" width={1600} height={800} />
        </div> 
      </div>
    </>
  );
};

export default HeroSection;