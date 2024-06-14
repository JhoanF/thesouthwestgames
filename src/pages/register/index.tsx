import EarlyRegistration, { RegistrationType } from '@/components/earlyRegistration'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Register() {
    return (
        <div className='flex justify-center center bg-black min-h-screen'>
            <div className='flex flex-col items-center justify-center p-5 bg-black text-white'>
                <div className='flex md:flex-row flex-col items-center justify-evenly md:space-x-24 md:space-y-0'>
                    <div className='text-4xl cursor-pointer border border-white border-solid p-10 my-5'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3968">Athletes</Link>
                    </div>
                    <div className='text-4xl cursor-pointer border border-solid p-10 my-5'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3969">Vendors</Link>
                    </div>
                    <div className='text-4xl cursor-pointer border border-solid p-10 my-5'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3969">Sponsors</Link>
                    </div>
                    <div className='text-4xl cursor-pointer border border-solid p-10 my-5'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3969">Spectators</Link>
                    </div>
                    <div className='text-2xl cursor-pointer border border-solid p-10 my-5'>
                        <Link href="https://podium.boxtribe.io/reg/index_open.php?event_id=3969">Photo Packages</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register
