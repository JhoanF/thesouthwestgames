import { Inter } from 'next/font/google'
import Head from 'next/head'
import Register, { RegistrationType } from '@/components/earlyRegistration'
import Link from 'next/link'
import EarlyRegistration from '@/components/earlyRegistration'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  return (<>
    <Head>
      <title>Southwest Games</title>
      <meta name="description" content="Southwest Games" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <EarlyRegistration type={RegistrationType.ATHLETE} />
  </>
  )
}

export default Home;