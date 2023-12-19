'use client'
import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../Button/PrimaryButton';
import Logo from '../Logo';
import { usePathname} from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <div role='header' className='fixed w-full z-50 h-[90px] bg-main-1 font-poppins'>
            <div className='flex justify-between text-main-2 px-10 items-center h-full'>
                <div className='flex gap-20 items-center'>
                    <Logo />
                    <nav className='text-base font-semibold'>
                        <ul className='flex text-center gap-10'>
                            <li className={pathname === '/' ? 'border-b-[4px] leading-6 border-main-3 w-[139px]' : ''}>
                                <Link href="/">For Individuals</Link>
                            </li>
                            <li className={pathname === '/pages/business' ? 'leading-6 border-b-[4px] border-main-3 w-[139px]' : ''}>
                                <Link href="/pages/business">For Businesses</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex gap-7 text-base items-center'>
                    <button> <Link href="/">About Us</Link></button>
                    <button><Link href="/">Contact</Link></button>
                    <div className='border-l-2 border-white h-[27px]' />
                    <button><Link href="/">Login</Link></button>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default Header;