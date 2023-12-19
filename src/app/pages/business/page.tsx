'use client'
import React from 'react';
import PrimaryButton from '@/components/Button/PrimaryButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/Card';
import phone from '@/public/svgs/phone.svg';
import secure from '@/public/svgs/secure.svg';
import currency from '@/public/svgs/currency.svg';
import cal from '@/public/svgs/cal.svg';
import Banner from '@/components/Card/Banner';
import TabComponent from '@/components/TabComponent';
import Image from 'next/image';
import business from '@/public/images/business.png';
import cirle from '@/public/svgs/half-circle.svg';
import { AnimateSlider } from '@/components/motion/Animate';

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

const Business = () => {
    return (
        <div className='font-poppins overflow-x-hidden'>
            <Header />
            <div className='bg-main-1 h-screen relative text-white'>
                <div className='flex items-center h-full justify-center flex-col'>
                    <AnimateSlider>
                        <div className='text-[46px] flex justify-center text-center w-full leading-[64px] font-semibold'>
                            <h1 className='w-[65%]'>Manage payroll, compliance & HR in real time</h1>
                        </div>
                    </AnimateSlider>
                    <AnimateSlider><div className='text-lg flex justify-center w-full mt-6 mb-10 text-center'>
                        <p className='flex justify-center w-[60%]'>Make income tax remittances to the state internal revenue service for your employees.</p>
                    </div></AnimateSlider>
                <AnimateSlider><PrimaryButton /></AnimateSlider>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Image src={cirle} alt='taxit business page' />
                </div>
            </div>
            <AnimateSlider>
                <div className='w-[70%] relative mx-auto h-[544px] -mt-52'>
                    <Image className='w-full h-full rounded-md bg-cover bg-no-repeat object-fill' src={business} alt='taxit business banner' />
                </div>
            </AnimateSlider>
            <div className='w-[90%] mx-auto pt-20'>
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
                <TabComponent tabs={tabs} img={cal} />
                <Banner />
            </div>
            <Footer />
        </div>
    );
};

export default Business;