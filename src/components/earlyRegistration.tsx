import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import swGamesLogo from "../../public/img/logo/sw_logo_1.png";
import ContactForm from '@/components/contactForm';
import { Container } from 'postcss';

type EarlyRegistrationProps = {
    type: RegistrationType
}

// registration type enum
export enum RegistrationType {
    VOLUNTEER = 'Volunteer',
    ATHLETE = 'Athlete',
    VENDOR = 'Vendor',
}

function EarlyRegistration({ type }: EarlyRegistrationProps) {
    return (
        <div className='flex flex-col items-center justify-center h-screen p-5 bg-black text-white'>
            <Image src={swGamesLogo} alt="Southwest Games Logo" width="500" height="500" />
            <h2 className='text-3xl mt-6 mb-2'>{type} Contact Form</h2>
            <h1 className='lg:text-8xl text-4xl font-bold mb-5'>Oct 26th, 2024</h1>
            <div className='flex justify-center'>
                <div className="lg:w-[800px] w-[360px]">
                    <ContactForm type={type} />
                </div>
            </div>
        </div>
    )
}


export default EarlyRegistration