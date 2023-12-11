
import { FaInstagramSquare} from "react-icons/fa";
import { ImFacebook2} from "react-icons/im";


export default function Header(){

    return (
        <>
            <div className="min-h-screen bg-[url('/mariage.jpg')] relative">   
                
                <div className="absolute h-full w-full flex justify-center items-center p-3" >
                    
                    <div className="bg-sky-200 w-full h-full absolute z-10 opacity-40 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl shadow-2xl"></div>
                    <div className="w-full h-full absolute z-20 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl">
                        
                        <div className="w-full h-full md:w-4/6 lg:3/6 relative float-right flex items-center justify-center ">
                            <div className="block absolute justify-center text-xl font-bold md:text-4xl text-center">
                                <h1 className="text-center text-5xl md:text-6xl">Bienvenu chez</h1>
                                <br />
                               <img className="text-red-700 w-60 md:w-80 md:flex md:items-center block m-auto md:justify-center" src="/mesphotos/logoeternel.svg"/>
                               
                                <br />
                                <p className="uppercase  text-center text-sm md:text-lg">l'agence de multimédia qui vous accompagne dans tous vos projets visuels.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-30 block text-2xl ml-8 mb-8 md:text-3xl md:ml-16 md:mb-16 ">
                        
                        <a href="https://www.facebook.com/profile.php?id=100089783714720&mibextid=LQQJ4d" className="navigation hover:text-3xl hover:md:text-5xl "><ImFacebook2/></a>
                        <a href="https://instagram.com/eternel_media?igshid=OGQ5ZDc2ODk2ZA==" className="navigation hover:text-3xl hover:md:text-5xl  "><FaInstagramSquare/></a>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

/**
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><FaLinkedin/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><SiGmail/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl "><FaTwitterSquare/></a>
                        <a href="" className="navigation hover:text-3xl hover:md:text-5xl  "><BsFillTelephoneOutboundFill/></a>
 */