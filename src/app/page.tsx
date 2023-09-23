import About from '@/components/about'
import Contact from '@/components/contact'
import Copyright from '@/components/copyright'
import Header from '@/components/header'
import Navig from '@/components/nav'
import Portfolio from '@/components/portfolio'
import Service from '@/components/service'
import Skils from '@/components/skils'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
          //prim-bg <section id='home' className='sticky h-auto top-0 w-full z-30 justify-center items-center'><Navig/></section>

  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>
      <main>
        
        <section className='s sticky z-30 h-12 md:h-14 top-0 py-3'><Navig/></section>
        <section id='home' className='absolute w-full top-0' ><Header/></section>
        <section className='h-screen w-full'></section> 
        <section className='w-full sticky top-0 prim-bg h-12 md:h-14 z-10'></section>       
        <section id='about'><About/></section>
        <section id='service' className='mt-7'><Service/></section>
        <section id="skils"><Skils/></section>
        <section id='portfolio'><Portfolio/></section>
        <section id='contact'><Contact/></section>
        <section><Copyright/></section>

        <Script src='script.js'></Script>

      </main>
    </>
    
  )
}
