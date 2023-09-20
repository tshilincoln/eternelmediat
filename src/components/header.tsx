'use client'

import Link from "next/link";
import styles from '../stylee/header.module.css'
import Image from "next/image";
import { useState } from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export default function Header(){
    const [imagemenu,setimagemenu]= useState(true)

    return (
        <>
            <section className="min-h-screen bg-[url('/mariage.jpg')] relative"> 
                
                <div className="absolute h-full w-full flex justify-center items-center p-3" >
                    
                    <div className="bg-sky-200 w-full h-full absolute z-10 opacity-40 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl shadow-black shadow-2xl"></div>
                    <div className="w-full h-full absolute z-20 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl shadow-black ">
                        
                        <div className="w-full h-full md:w-4/6 lg:3/6 relative float-right flex items-center justify-center ">
                            <div className="block absolute justify-center text-xl font-bold md:text-4xl">
                                <h1 className="text-center text-5xl md:text-7xl">Bienvenu chez</h1><br />
                                <h1 className="titre text-center text-col text-6xl md:text-8xl contouretexte">Eternel Mediat</h1>
                                <br />
                                
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-30 block text-xl ml-8 mb-8 md:text-3xl md:ml-16 md:mb-16">
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl "><ImFacebook2/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><FaInstagramSquare/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><FaLinkedin/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><SiGmail/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl "><FaTwitterSquare/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><BsFillTelephoneOutboundFill/></a>
                    </div>
                </div>

            </section>
        </>
    )
}