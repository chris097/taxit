import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import circle from "@/public/svgs/circle.svg";
import { AnimateSlider } from '../motion/Animate';

interface ITabComponent {
    img: StaticImageData
    tabs: {title: string, description: string}[]
}

const TabComponent: React.FC<ITabComponent> = ({img, tabs}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <AnimateSlider>
      <div className='py-32 md:flex justify-between items-center'>
          <div className='h-[444px] md:w-[40%] border-l-[6px] border-[#DBE2EA] relative'>
            {tabs.map((tab, index) => (
              <div onClick={() => setActiveIndex(index)} key={index}>
                {activeIndex === index && <div className='border-l-[6px] border-main-3 h-[81px] absolute -left-[5.3px]' />}
            <div className='h-[81px] pl-5 mb-10 flex text-main-10 flex-col justify-center'>
                  <h1 className='md:text-[28px] text-2xl leading-[44px] font-semibold'>{tab.title}</h1>
                  <p className='md:text-lg text-base mt-2 leading-[28.8px]'>{tab.description}</p>
            </div>
              </div>
            ))}
          </div>
          <div className='relative'>
        <Image className='w-full h-full md:mt-0 mt-20 relative z-40' src={img} alt='taxit pay bill image' />
        <Image className='absolute -right-20 md:top-64 top-0 z-30' src={circle} alt='circle svg' />
          </div>
        </div>
    </AnimateSlider>
  )
}

export default TabComponent