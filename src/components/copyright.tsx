import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaAmilia, FaGithub, FaGithubAlt, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaMailBulk, FaTwitterSquare, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook, ImFacebook2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";



export default function Copyright(){
    return(
        <>
          <hr  className="absolute w-full text-center justify-center items-center"/>
          <section className='relative w-full h-14 md:h-28 pt-6 md:pt-12 px-6 md:px-10 flex justify-between text-sm py-1'>
            <p>Copyright © 2023 ClassDev</p>
            <div className="left-0 z-30 flex text-lg md:text-2xl md:ml-16 md:mb-16 gap-3">
                <a href="" className=" "><SiGmail/></a>
                <a href="" className=" "><ImFacebook/></a>
                <a href="" className=" "><FaLinkedinIn/></a>
                <a href="" className=" "><FaWhatsapp/></a>
                <a href="" className=" "><FaGithub/></a>           
            </div>
          </section>
        </>
    )
}