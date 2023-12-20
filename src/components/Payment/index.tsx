import React from 'react'
import { AnimateSlider } from '../motion/Animate'
import Card from '../Card'
import phone from '@/public/svgs/phone.svg';
import secure from '@/public/svgs/secure.svg';
import currency from '@/public/svgs/currency.svg';

const Payment: React.FC = () => {
  return (
      <div>
          <AnimateSlider><h2 className='mt-14 text-center md:text-4xl text-3xl leading-[44px] text-main-6 font-semibold'>Payments tools designed for you</h2></AnimateSlider>
        <AnimateSlider><p className='text-center md:text-lg text-base md:mt-0 mt-3 leading-[28.8px] text-main-6'>Explore payment features that provides you with every possible solution</p></AnimateSlider>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
          <Card
            icon={phone}
            title='User Friendly'
            description='Highly responsive and easy to navigate'
          />
          <Card
            icon={secure}
            title='Secure'
            description='Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.'
          />
          <Card
            icon={currency}
            title='Fast'
            description="Transacting takes only a few seconds - it's convenient and safe."
          />
        </div>
    </div>
  )
}

export default Payment;