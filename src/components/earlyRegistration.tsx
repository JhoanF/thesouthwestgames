import React, { useState, useEffect } from 'react'
import swGamesLogo from "../../public/img/logo/sw_logo_1.png";
import Image from 'next/image';

function EarlyRegistration() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-26`) - +new Date();
        let timeLeft: any = {};

        if (difference > 0) {
            timeLeft = {
                months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen p-10'>
            <Image src={swGamesLogo} alt="Southwest Games Logo" width="500" height="500" />
            <h2 className='text-2xl mt-6'></h2>
            <h1 className='text-8xl font-bold'>Oct 26th, 2024</h1>

            <h2 className='text-2xl mt-6 hidden lg:flex'>
                {timeLeft.months > 1 ? `${timeLeft.months} Months : ` : ''}
                {`${timeLeft.days} Days : 
                ${timeLeft.hours} Hours : 
                ${timeLeft.minutes} Minutes : 
                ${timeLeft.seconds} Seconds`}
            </h2>
            <div className='flex flex-row items-center justify-center'>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="mt-4 p-2 border rounded-lg max-w-80 text-center"
                />
                <button className="mt-4 mx-2 p-2 bg-gray-500 text-white border rounded">
                    Register
                </button>
            </div>
        </div>
    )
}

export default EarlyRegistration