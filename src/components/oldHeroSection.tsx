import React from 'react'
import { ArrowRight } from 'lucide-react';
import { CirclePlay } from 'lucide-react';




function oldHeroSection() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden flex flex-wrap flex-col lg:flex-row lg:px-10'>
        <div className='left relative ml-6 pt-10 w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center items-start'>
            <div className='bg-hero-pattern bg-cover bg-center absolute -top-4 left-60 w-60 h-60'>
            </div>
            
            <h1 className='text-6xl font-extrabold z-10 tracking-tight'>Make The Best Financial Decisions</h1>
            <p className='text-sm text-gray-500 mt-6 z-10'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className='flex mt-6 gap-6 z-10'>
                <button className='bg-black text-white text-sm rounded-sm flex py-3 px-4 gap-2'>Get Started <ArrowRight /></button>
                <button className='text-black text-sm flex py-3 px-4 gap-2'><CirclePlay /> Watch Video</button>
            </div>
            <img src="assets/hero_Section_left.png" className='w-2/3 mt-6 z-10' alt="" />
        </div>

        <div className='right relative w-full lg:w-1/2'>
            <div className='bg-hero-pattern bg-cover bg-center absolute bottom-14 left-28 w-60 h-60'>
            </div>
            <div className='bg-hero-ring bg-contain bg-no-repeat bg-center absolute top-0 left-0 w-full h-3/4'>
            </div>
            <div className='absolute top-0 left-14 z-30'>
                <img src="assets/iphone_1.png" className='h-[500px] ' alt="hero image" />
            </div>
            <div className='absolute top-14 left-32 z-20'>
                <img src="assets/iphone_2.png" className='h-[500px] ' alt="hero image" />
            </div>
            <div className='absolute top-24 left-52 z-10'>
                <img src="assets/iphone_1.png" className='h-[500px] ' alt="hero image" />
            </div>
        </div>
    </div>
  )
}

export default oldHeroSection