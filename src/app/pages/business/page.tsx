'use client'
import React from 'react';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import cal from '@/public/svgs/cal.svg';
import Banner from '@/components/Card/Banner';
import TabComponent from '@/components/TabComponent';
import Image from 'next/image';
import business from '@/public/images/business.png';
import cirle from '@/public/svgs/half-circle.svg';
import { AnimateSlider } from '@/components/motion/Animate';
import Payment from '@/components/Payment';

interface ITabs {
  title: string
  description: string
}

const tabs: ITabs[] = [
  { title: 'Payment', description: 'No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere' },
  { title: 'Payroll', description: 'End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.' },
  { title: 'Payslip', description: 'Generates automated TaxiTPaySlip email notifications for each employee/user.' },
  { title: 'Reports', description: 'Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.' },
];

const Business:React.FC = () => {
    return (
        <main className='font-poppins overflow-x-hidden'>
            <Header />
            <div role='business page' className='bg-main-1 h-auto relative text-white'>
                <div className='flex items-center h-full justify-center flex-col py-48'>
                    <AnimateSlider>
                        <div className='md:text-[46px] text-4xl flex justify-center text-center w-full md:leading-[64px] leading-[44px] font-semibold'>
                            <h1 className='md:w-[65%] w-[90%]'>Manage payroll, compliance & HR in real time</h1>
                        </div>
                    </AnimateSlider>
                    <AnimateSlider><div className='md:text-lg text-base flex justify-center w-full mt-6 mb-10 text-center'>
                        <p className='flex justify-center md:w-[60%] w-[90%]'>Make income tax remittances to the state internal revenue service for your employees.</p>
                    </div></AnimateSlider>
                <AnimateSlider><PrimaryButton /></AnimateSlider>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Image src={cirle} alt='taxit business page' />
                </div>
            </div>
            <AnimateSlider>
                <div className='md:w-[70%] w-[85%] relative mx-auto md:h-[544px] h-[320px] md:-mt-36 -mt-36'>
                    <Image className='w-full h-full rounded-md bg-cover bg-no-repeat object-cover' src={business} alt='taxit business banner' />
                </div>
            </AnimateSlider>
            <div className='w-[90%] mx-auto pt-20'>
                <Payment />
                <TabComponent tabs={tabs} img={cal} />
                <Banner />
            </div>
            <Footer />
        </main>
    );
};

export default Business;