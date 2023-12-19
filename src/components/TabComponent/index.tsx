import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import circle from "@/public/svgs/circle.svg";

interface ITabComponent {
    img: StaticImageData
    tabs: {title: string, description: string}[]
}

const TabComponent: React.FC<ITabComponent> = ({img, tabs}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className='py-32 flex justify-between items-center'>
          <div className='h-[444px] w-[40%] border-l-[6px] border-[#DBE2EA] relative'>
            {tabs.map((tab, index) => (
              <div onClick={() => setActiveIndex(index)} key={index}>
                {activeIndex === index && <div className='border-l-[6px] border-main-3 h-[81px] absolute -left-[5.3px]' />}
            <div className='h-[81px] pl-5 mb-10 flex text-main-10 flex-col justify-center'>
                  <h1 className='text-[28px] leading-[44px] font-semibold'>{tab.title}</h1>
                  <p className='text-lg mt-2 leading-[28.8px]'>{tab.description}</p>
            </div>
              </div>
            ))}
          </div>
          <div className='relative'>
        <Image className='w-full h-full relative z-40' src={img} alt='taxit pay bill image' />
        <Image className='absolute -right-20 top-64 z-30' src={circle} alt='circle svg' />
          </div>
        </div>
  )
}

export default TabComponent