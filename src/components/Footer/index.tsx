import React from 'react';
import Logo from '../Logo';
import instagram from '@/public/svgs/instagram.svg';
import twitter from '@/public/svgs/twitter.svg';
import facebook from '@/public/svgs/facebook.svg';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ISocialIcons {
    name: string
    icon: StaticImageData
}

const socialIcons: ISocialIcons[] = [
    { name: 'instagram', icon: instagram },
    { name: 'twitter', icon: twitter },
    { name: 'facebook', icon: facebook },
];

const Footer = () => {
    return (
        <div className='w-[90%] mx-auto font-poppins'>
            <div className='md:flex justify-between py-20'>
                <div>
                    <Logo />
                    <div className='flex gap-5 mt-14'>
                        {socialIcons.map((icon, index) => (
                        <Link href="/">
                            <Image src={icon.icon} alt={`taxit ${icon.name} links`} />
                        </Link>
                    ))}
                    </div>
                    <p className='text-main-4 text-base leading-6 mt-4'>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
                </div>
                <div className='flex gap-20'>
                    <div>
                        <p className='text-main-5 text-lg leading-[22px] font-semibold'>About Us</p>
                        <div className='text-main-4 my-5 text-base leading-6'>
                            <Link href="/">About</Link>
                        </div>
                        <div className='text-main-4 my-5 text-base leading-6'>
                            <Link href="/">Legal & privacy</Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-main-5 text-lg leading-[22px] font-semibold'>About Us</p>
                        <div className='text-main-4 my-5 text-base leading-6'>
                            <Link href="/">TBook®</Link>
                        </div>
                        <div className='text-main-4 my-5 text-base leading-6'>
                            <Link href="/">TaxiTWithhold®</Link>
                        </div>
                        <div className='text-main-4 my-5 text-base leading-6'>
                            <Link href="/">TaxiTPayroll®</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;