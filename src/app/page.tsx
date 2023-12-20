'use client'
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import hero from '@/public/svgs/hero.svg';
import PrimaryButton from '@/components/Button/PrimaryButton';
import payBill from '@/public/svgs/pay-bill.svg';
import heroPhone from '@/public/svgs/hero-phone.svg';
import apple from '@/public/svgs/apple.svg';
import google from '@/public/svgs/google.svg';
import Banner from '@/components/Card/Banner';
import TabComponent from '@/components/TabComponent';
import { AnimateSlider } from '@/components/motion/Animate';
import Payment from '@/components/Payment';

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
  return (
    <main className='font-poppins overflow-x-hidden'>
      <Header />
      <div className='bg-main-1 md:h-screen h-auto'>
        <div className='items-center md:flex justify-between pt-32 pb-10 h-full w-[90%] mx-auto'>
            <div className='font-poppins text-white md:w-[40%]'>
          <AnimateSlider>
            <h1 className='md:text-[46px] text-4xl font-semibold md:leading-[64px] leading-10'>Secure & seamless online transactions</h1>
          </AnimateSlider>
            <AnimateSlider><p className='text-lg leading-[28.8px] mt-5 mb-8'>Providing you with the best online payment experience</p></AnimateSlider>
            <AnimateSlider><PrimaryButton extraClassName='w-[190px] h-[56px] flex items-center text-base leading-6' /></AnimateSlider>
          </div>
          <AnimateSlider>
            <div className='md:mt-32 mt-20'>
            <Image className='w-full h-full' src={hero} alt='taxit banner' />
          </div>
          </AnimateSlider>
        </div>
      </div>
      <div className='w-[90%] mx-auto'>
        <Payment />
        <TabComponent tabs={tabs} img={payBill} />
        <AnimateSlider>
          <div className='md:flex gap-16 items-center'>
         <div><Image src={heroPhone} alt='taxit hero phone background' /></div>
          <div>
            <h1 className='md:text-[36px] text-3xl leading-[44px] md:mt-0 mt-20 font-semibold text-main-6'>Transact on the go</h1>
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
        </AnimateSlider>
        <Banner />
      </div>
      <Footer />
    </main>
  );
};
