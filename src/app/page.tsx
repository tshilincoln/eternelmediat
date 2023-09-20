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
  //<section className='top-0 sticky z-30'><Navig/></section>
  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>
      <main className='relative block'>
        
        <section id='home' className='sticky top-0 w-full md:w-11/12 p-3 z-30 justify-center items-center'><Navig/></section>
        <section className='absolute md:-top-1 z-10'>
          <section id='home' ><Header/></section>
          <section id='about'><About/></section>
          <section id='service' className='mt-7'><Service/></section>
          <section id="skils"><Skils/></section>
          <section id='portfolio'><Portfolio/></section>
          <section id='contact'><Contact/></section>
          <section><Copyright/></section>
        </section>

        <Script src='scripttt.js'></Script>

      </main>
    </>
    
  )
}
