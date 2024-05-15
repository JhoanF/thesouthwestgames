import EarlyRegistration, { RegistrationType } from '@/components/earlyRegistration'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Register() {
    return (
        <div className='flex justify-center center bg-black'>
            <div className='flex flex-col items-center justify-center h-screen p-5 bg-black text-white'>
                <div className='flex md:flex-row flex-col items-center justify-evenly md:space-x-36 md:space-y-0 space-y-32'>
                    <div className='text-4xl cursor-pointer border border-dashed p-10'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3969">Vendors</Link>
                    </div>
                    <div className='text-4xl cursor-pointer border border-white border-solid p-10'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3968">Athletes</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register
