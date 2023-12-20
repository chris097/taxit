'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PrimaryButton from '../Button/PrimaryButton';
import Logo from '../Logo';
import { usePathname } from 'next/navigation';
import { IoIosMenu, IoMdClose } from "react-icons/io";

interface IMobileNav {
    pathname: string
    handleClick: () => void
}

const MobileNav: React.FC<IMobileNav> = ({pathname, handleClick}) => {
    return (
        <div className='fixed w-full h-screen top-0 left-0 bg-main-1 z-[999] text-white opacity-90'>
            <div onClick={handleClick} role='close menu bar' className='flex justify-end text-4xl py-5 px-6'><IoMdClose /></div>
            <div className='flex justify-center flex-col items-center mt-10'>
                <ul className='text-center gap-10 space-y-8'>
                    <li className={pathname === '/' ? 'leading-6 text-main-3' : ''}>
                        <Link href="/">For Individuals</Link>
                    </li>
                    <li className={pathname === '/pages/business' ? 'leading-6 text-main-3' : ''}>
                        <Link href="/pages/business">For Businesses</Link>
                    </li>
                    <li>
                        <button> <Link href="/">About Us</Link></button>
                    </li>
                    <li>
                        <button> <Link href="/">Contact</Link></button>
                    </li>
                    <li>
                        <button> <Link href="/">Login</Link></button>
                    </li>
                    <PrimaryButton />
                </ul>
            </div>
        </div>
    );
};

const Header: React.FC = () => {
    const [viewMobileNav, setViewMobileNav] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <>
            {viewMobileNav && <MobileNav handleClick={() => setViewMobileNav(!viewMobileNav)} pathname={pathname} />}
        <div role='header' className='fixed w-full z-50 h-[90px] bg-main-1 font-poppins'>
            <div className='flex justify-between text-main-2 md:px-10 px-5 items-center h-full'>
                <div className='flex gap-20 items-center'>
                    <Logo />
                    <nav role='navigation links' className='text-base font-semibold'>
                        <ul className='md:flex hidden text-center gap-10'>
                            <li className={pathname === '/' ? 'border-b-[4px] leading-6 border-main-3 w-[139px]' : ''}>
                                <Link href="/">For Individuals</Link>
                            </li>
                            <li className={pathname === '/pages/business' ? 'leading-6 border-b-[4px] border-main-3 w-[139px]' : ''}>
                                <Link href="/pages/business">For Businesses</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='md:flex hidden gap-7 text-base items-center'>
                    <button> <Link href="/">About Us</Link></button>
                    <button><Link href="/">Contact</Link></button>
                    <div className='border-l-2 border-white h-[27px]' />
                    <button><Link href="/">Login</Link></button>
                    <PrimaryButton />
                </div>
                    <div onClick={() => setViewMobileNav(!viewMobileNav)} role='open menu bar' className='md:hidden text-main-3 text-4xl block'>
                        <IoIosMenu />
                </div>
            </div>
            </div>
            </>
    );
};

export default Header;