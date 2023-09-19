import About from '@/components/about'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Navig from '@/components/nav'
import Portfolio from '@/components/portfolio'
import Service from '@/components/service'
import Skils from '@/components/skils'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  //<section className='top-0 sticky z-30'><Navig/></section>
  return (
    <>
      
      <main className='relative block'>
        <Head>
          <title>Eternel-Mediat</title>
        </Head>
        <section id='home' className='absolute md:mt-10 w-full md:w-11/12 p-3 z-30 text-center justify-center items-center'><Navig/></section>
        <section className='absolute top-0 z-10'>
          <section id='home' ><Header/></section>
          <section id='about'><About/></section>
          <section id='service' className='mt-7'><Service/></section>
          <section id="skils"><Skils/></section>
          <section id='portfolio'><Portfolio/></section>
          <section id='contact'><Contact/></section>
          <section className='relative bottom-0 w-full h-auto flex justify-between bg-gray-950 text-white text-sm py-1 px-2'>
            <p>copyriht 2023</p>
            <p>By Abraham Tshibangu</p>
          </section>
        </section>
        
        <Script src='scripttt.js'></Script>
        
      </main>
    </>
    
  )
}
