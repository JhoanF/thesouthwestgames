import Image from 'next/image'
import React from 'react'

export const Benefit = (props: any) => {
    const { title, description, image, reverse, noRotation } = props
    return (
        <div className="bg-white rounded-lg p-8">
            <h2 className={`text-2xl font-bold z-10 ${reverse ? 'text-right' : 'text-left'}`}>{title}</h2>
            <div className={`flex flex-col justify-between ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className='w-full md:w-1/2 z-10'>
                    <p className={`${reverse ? 'text-right' : 'text-left'}`}>
                        {description}
                    </p>
                </div>
                {image &&
                    <div className={`w-full md:w-1/2 mt-4 md:mt-0 md:transform ${reverse ? noRotation ? '' : 'md:rotate-45' : noRotation ? '' : 'md:-rotate-45'} z-0`}>
                        <Image
                            src={image}
                            alt="Health Benefits"
                            height="500"
                            width="500"
                            className={`shadow-2xl rounded-lg ${reverse ? 'float-left' : 'float-right'}`}
                        />
                    </div>
                }
            </div>
        </div >
    )
}
