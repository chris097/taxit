'use client'
import { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import hero from '@/public/svgs/hero.svg';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Card from '@/components/Card';
import phone from '@/public/svgs/phone.svg';
import secure from '@/public/svgs/secure.svg';
import currency from '@/public/svgs/currency.svg';
import payBill from '@/public/svgs/pay-bill.svg';
import heroPhone from '@/public/svgs/hero-phone.svg';
import apple from '@/public/svgs/apple.svg';
import google from '@/public/svgs/google.svg';
import bannerLogo from '@/public/images/banner-logos.png';
import Banner from '@/components/Card/Banner';
import TabComponent from '@/components/TabComponent';

interface ITabs {
  title: string
  description: string
}

const tabs: ITabs[] = [
  { title: 'Pay bills', description: 'Paying your bills has never been so easy.' },
  { title: 'Buy Airtime & Data', description: 'Never get caught with low airtime and data again!' },
  { title: 'Money Transfer', description: 'Transferring money is now hassle-free.' },
  { title: 'Pay Toll Fee', description: 'Never worry about getting a toll ticket again.' },
];

export default function Home() {
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <main className='font-poppins'>
      <Header />
      <div className='bg-main-1 h-screen'>
        <div className='items-center flex justify-between h-full w-[90%] mx-auto'>
          <div className='font-poppins text-white w-[40%]'>
            <h1 className='text-[46px] font-semibold leading-[64px]'>Secure & seamless online transactions</h1>
            <p className='text-lg leading-[28.8px] mt-5 mb-8'>Providing you with the best online payment experience</p>
            <PrimaryButton extraClassName='w-[190px] h-[56px] flex items-center text-base leading-6' />
          </div>
          <div className='mt-32'>
            <Image className='w-full h-full' src={hero} alt='taxit banner' />
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto'>
        <h2 className='mt-14 text-center text-4xl leading-[44px] text-main-6 font-semibold'>Payments tools designed for you</h2>
        <p className='text-center text-lg leading-[28.8px] text-main-6'>Explore payment features that provides you with every possible solution</p>
        <div className='grid grid-cols-3 gap-10 mt-10'>
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
        <TabComponent tabs={tabs} img={payBill} />
        <div className='flex gap-16 items-center'>
         <div><Image src={heroPhone} alt='taxit hero phone background' /></div>
          <div>
            <h1 className='text-[36px] leading-[44px] font-semibold text-main-6'>Transact on the go</h1>
            <p className='mb-8 text-main-6 text-lg w-[80%] leading-[28.8px]'>Stay on top of your business with our easy-to-use app</p>
            <PrimaryButton
              extraClassName='text-white w-[190px] text-center'
              buttonName='Get Started' />
            <div className='flex gap-5 mt-8'>
              <Image src={apple} alt='apple icon' />
              <Image src={google} alt='google icon' />
            </div>
          </div>
        </div>
        <Banner />
      </div>
      <Footer />
    </main>
  );
};
