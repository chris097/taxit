import React from 'react';
import Image from 'next/image';
import logo from "@/public/images/logo.png";

const Logo = () => {
  return (
      <div>
          <Image className='w-[163px] bg-cover object-cover h-[67.1px]' src={logo} alt="taxit logo" />
    </div>
  )
}

export default Logo