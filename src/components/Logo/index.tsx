import React from 'react';
import Image from 'next/image';
import logo from "@/public/images/logo.png";
import Link from 'next/link';

const Logo = () => {
  return (
      <Link href="/">
          <Image className='md:w-[163px] w-[120px] bg-cover object-cover md:h-[67.1px]' src={logo} alt="taxit logo" />
    </Link>
  )
}

export default Logo