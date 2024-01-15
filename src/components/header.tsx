
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
                               <img className="text-red-700 w-60 md:w-80 md:flex md:items-center block m-auto md:justify-center" src="logoeternel.png"/>
                               
                                <br />
                                <p className="text-center text-sm md:text-lg spaceLettreMenu">L'agence de multimédia qui vous accompagne dans tous vos projets visuels.</p>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

