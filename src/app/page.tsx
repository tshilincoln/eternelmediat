"use client"

import About from '@/components/about'
import Contact from '@/components/contact'
import Copyright from '@/components/copyright'
import Header from '@/components/header'
import Navig from '@/components/nav'
import Portfolio from '@/components/portfolio'
import Service from '@/components/service'
import Skils from '@/components/skils'
import Head from 'next/head'
import Script from 'next/script'
import { MutableRefObject, useEffect, useRef, useState } from 'react';



export default function Home() {
  
  
  const sectionRef = useRef() as MutableRefObject<HTMLInputElement>;
  
  /*
  useEffect(() => {
    const observer =new IntersectionObserver (entries=>{
      if(entries[0].isIntersecting) {
        sectionRef.current.classList.add("show-intem ");
        observer.unobserve(sectionRef.current)
      }
    })
    observer.observe(sectionRef.current);
    if (sectionRef?.current) {
      observer.observe(sectionRef.current);
    }
  }, []);


*/
  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>

      <main> 
        <section className='md:mt-12 sticky z-30 h-12 md:h-14 top-0 py-2'><Navig/></section>
        <section id='home' ref={sectionRef} className='scroll-scale absolute w-full top-0 z-20'><Header/></section>
        <section className='h-screen w-full'></section> 
        <section className='w-full sticky top-0 prim-bg h-12 md:h-14 z-10'></section>       
        <section id='about' ref={sectionRef} className='scroll-scale'><About/></section>
        <section id='portfolio' ref={sectionRef} className='scrool-bottom'><Portfolio/></section>
        <section id="skils" ref={sectionRef} className='scroll-scale'><Skils/></section>
        <section id='service' ref={sectionRef} className='scrool-bottom mt-7'><Service/></section>
        <section id='contact' ref={sectionRef} className='scrool-bottom'><Contact/></section>
        <section><Copyright/></section>

        <Script src='script.js'></Script>

      </main>
    </>
    
  )
}
