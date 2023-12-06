import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export default function Copyright(){
  return(
    <>
      <hr  className=" text-center flex items-center" />
      <div className='relative w-full h-14 md:h-28 pt-6 md:pt-12 px-6 md:px-10 flex justify-between text-sm py-1'>
        <p>Copyright © 2023 ClassDev-A_Tshibangu</p>
        <div className="left-0 z-30 flex text-lg md:text-2xl md:ml-16 md:mb-16 gap-3">
          <a href="mailto:tshiabraham@gmail.com" className=" "><SiGmail/></a>
          <a href="https://www.linkedin.com/in/abraham-tshibangu-92a5371a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" "><FaLinkedinIn/></a>
          <a href="https://wa.me/243811666472" className=" "><FaWhatsapp/></a>
          <a href="tel:+243811666472" className=" "><BsTelephone/></a>           
        </div>
      </div>
    </>
  )
}