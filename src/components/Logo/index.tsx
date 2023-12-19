import React from 'react';
import Image from 'next/image';
import logo from "@/public/images/logo.png";
import Link from 'next/link';

const Logo = () => {
  return (
      <Link href="/">
          <Image className='w-[163px] bg-cover object-cover h-[67.1px]' src={logo} alt="taxit logo" />
    </Link>
  )
}

export default Logo