import React from 'react';
import Image from 'next/image';
import bannerLogo from '@/public/images/banner-logos.png';

const Banner = () => {
  return (
    <div className='bg-gradient-to-r items-center flex z-40 relative whitespace-nowrap overflow-hidden from-primary-light to-primary-dark h-[522px] my-32 rounded-[10px]'>
          <div className='pl-10 text-white text-[36px]'>
            <p className='font-semibold leading-[54px]'>Send funds</p>
            <p className='leading-[54px]'>Remit taxes</p>
            <p className='leading-[54px]'>Buy utilities</p>
            <button type='button' className='bg-white w-full py-3 mt-6 rounded-[10px] text-base text-main-3'>Get Started</button>
          </div>
          <div>
            <Image className='w-[80%] h-full absolute right-0 top-0' src={bannerLogo} alt='banner of taxit logos' />
          </div>
        </div>
  )
}

export default Banner