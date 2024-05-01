import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Divisions() {
    const images = ['/img/divisions/1.png', '/img/divisions/2.png', '/img/divisions/3.png', '/img/divisions/4.png', '/img/divisions/5.png',];

    return (
        <div className='flex flex-col items-center justify-center h-screen p-10 bg-black'>
            <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true}>
                {images.map((img, index) => (
                    <div key={index}>
                        <Image src={img} alt={`Southwest Games Divisions ${index + 1}`} width="750" height="750" style={{ maxHeight: "750px", maxWidth: "750px" }} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Divisions