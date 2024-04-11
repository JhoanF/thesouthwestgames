import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Card(props: { title: string; description: string; image: string; }) {

    const { image, title, description } = props
    return (
        <div className="bg-white rounded-lg">
            <div className="flex items-center justify-center">
                <Image
                    src={image}
                    alt="N"
                    width="200"
                    height="200"
                    className="card-image"
                    loader={({ src }) => src}
                />
            </div>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 mt-4">{title}</h2>
                <p className="mb-4">
                    {description}
                </p>
                <div className="flex">
                    <Link href="/contact">
                        <button className="bg-yellow-400 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card