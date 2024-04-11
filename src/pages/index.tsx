import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/hero'
import EarlyRegistration from '@/components/earlyRegistration'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  return (
    <div className='flex justify-center center'>
      <Head>
        <title>Southwest Games</title>
        <meta name="description" content="Southwest Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center justify-center h-screen p-10'>
        <Image src='/img/logo/sw_logo_1.png' alt="Southwest Games Logo" width="500" height="500" />
        {/* animated loader */}
      </div>
    </div>
  )
}

export default Home;