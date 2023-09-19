import Link from "next/link";


export default function Navig(){

    return ( 
        <>
            <nav className="max-w-5xl mx-auto relative py-2">
                    
                    <div className="absolute w-full text-left md:text-center"><Link href='' aria-label="Eternet-Mediat" className=" text-2xl md:text-3xl titre m-5">Eternet-Mediat</Link></div>
                    <div className="absolute w-full flex items-center justify-between text-sm md:text-base font-semibold text-shad z-20">
                        <ul className="md:flex hidden top-0 items-center gap-1 text-xl">
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-2">
                                <Link href="#home" className="w-full navigation">Home</Link>
                            </li>
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                <Link href="#about" className="w-full navigation">About</Link>
                            </li>
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                <Link href="#service" className="w-full navigation">service</Link>
                            </li>
                        </ul>
                        <ul className="hidden top-0 md:flex items-center gap-1  text-xl">
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                <Link href="#skils" className=" w-full navigation">Skils</Link>
                            </li>
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                <Link href="#portfolio" className=" w-full navigation">Portfolio</Link>
                            </li>
                            <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-2">
                                <Link href="#contact" className=" w-full navigation">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )

}


