import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ICard {
    icon: StaticImageData
    title: string
    description: string
}

const Card: React.FC<ICard> = ({icon, title, description}) => {
    return (
        <div className=' max-w-[402.67px] border border-main-7/25 flex flex-col justify-center px-10 h-[388px] rounded-[8px]'>
            <Image src={icon} alt='phone icon' />
            <h2 className='text-[22px] font-poppins font-medium leading-[33px] mt-5 text-main-8/80'>{title}</h2>
            <p className='text-lg font-poppins leading-[29px] text-main-9 mt-3 tracking-[2%]'>{description}</p>
        </div>
    );
};

export default Card;