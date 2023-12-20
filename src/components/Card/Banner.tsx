import React from 'react';
import Image from 'next/image';
import bannerLogo from '@/public/images/banner-logos.png';
import { AnimateSlider } from '../motion/Animate';

const Banner = () => {
  return (
    <AnimateSlider>
      <div className='bg-gradient-to-r items-center flex z-40 relative whitespace-nowrap overflow-hidden from-primary-light to-primary-dark h-[522px] my-32 rounded-[10px]'>
        <div className='pl-10 text-white relative z-40 text-[36px]'>
          <p className='font-semibold leading-[54px]'>Send funds</p>
          <p className='leading-[54px]'>Remit taxes</p>
          <p className='leading-[54px]'>Buy utilities</p>
          <button type='button' className='bg-white w-full py-3 mt-6 rounded-[10px] text-base text-main-3'>Get Started</button>
        </div>
        <div>
          <Image className='md:w-[80%] h-full absolute bg-cover object-cover right-0 z-30 top-0' src={bannerLogo} alt='banner of taxit logos' />
        </div>
      </div>
    </AnimateSlider>
  );
};

export default Banner;