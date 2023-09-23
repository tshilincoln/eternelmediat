'use client'

import { Link } from "react-scroll/modules";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";


export default function Navig(){
    const [navbar, setNavbar] = useState(false)
    //<a href="" className="navigation hover:text-3xl hover:md:text-5xl "><RiMenu4Fill/></a>
    //<a href="" className="navigation hover:text-3xl hover:md:text-5xl "><FaTimes/></a>
    let menu = document.querySelectorAll('acti')
    let section = document.querySelectorAll('section')
    function activeM(){
        let len = section.length;
        //while(--len && window.scrollY + 97 < section[len].offsetTop){}
        menu.forEach(sec => sec.classList.remove('active'));
        //menu[len].classList.add('active');
    }
    activeM();
    window.addEventListener('scroll', activeM)

    return ( 
        <>
            <nav id="navig" className="max-w-5xl mx-auto relative z-30 justify-between flex "> 
                   
                    <div className="md:absolute w-full text-left md:text-center">
                        <Link to="home" smooth={true} spy={true} offset={0} className=" text-2xl md:text-3xl titre m-5">Eternet-Mediat</Link></div>
                    <button aria-label="toggle button" aria-expanded="false" id="menu-btn"
                        className="cursor-pointer w-7 md:hidden text-4xl navigation mr-3"
                        onClick={() => setNavbar(!navbar)}>
                        {navbar ? (<a className="navigation hover:md:text-5xl "><FaTimes/></a>)
                        :(<a className="navigation hover:md:text-5xl "><RiMenu4Fill/></a> )}
                    </button>
                    <div className={ navbar ? 'block absolute w-full' : 'hidden md:block '}>
                    <div id="toggled-menu"
                    className="absolute mt-12 md:mt-auto opacity-75 bg-menu rounded-2xl w-full md:flex items-center justify-center md:justify-between text-sm md:text-base font-semibold text-shad z-20 gap-1 md:gap-0 duration-500">
                        <ul className="md:flex  top-0 items-center gap-1 text-xl w-full md:w-auto text-center">
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-2">
                                <Link to="home" smooth={true} spy={true} offset={0} className="acti w-full navigation duration-400">Home</Link>
                            </li>
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-1">
                                <Link to="about" smooth={true} spy={true} offset={-55} className="acti w-full navigation duration-400">About</Link>
                            </li>
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-1">
                                <Link to="service" smooth={true} spy={true} offset={-40} className="acti w-full navigation duration-400">service</Link>
                            </li> 
                        </ul>
                        <ul className=" top-0 md:flex items-center gap-1  text-xl w-full md:w-auto text-center">
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-1">
                                <Link to="skils" smooth={true} spy={true} offset={-40} className="acti w-full navigation duration-400">Skils</Link>
                            </li>
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-1">
                                <Link to="portfolio" smooth={true} spy={true} offset={-40} className="acti w-full navigation duration-400">Portfolio</Link>
                            </li>
                            <li 
                            onClick={() => setNavbar(!navbar)}
                            className="py-4 md:py-0 md:mr-2 p-1 m-2">
                                <Link to="contact" smooth={true} spy={true} offset={-40} className="acti w-full navigation duration-400">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </nav>
        </>
    )

}


