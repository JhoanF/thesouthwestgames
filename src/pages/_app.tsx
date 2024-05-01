import { ThemeProvider } from 'next-themes'
import '@/css/tailwind.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  const navigation = [
    { link: "/", text: "Register" },
    { link: "/register", text: "More Info" },
    { link: "/divisions", text: "Divisions" },
  ];
  return (
    <ThemeProvider attribute="class" defaultTheme='light'>
      <Navbar navigation={navigation} />
      <Component {...pageProps} />
      <Footer navigation={navigation} />
    </ThemeProvider>
  )
}
