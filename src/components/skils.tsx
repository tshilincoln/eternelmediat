import { Zen_Dots } from "next/font/google";
import Link from "next/link";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAudacity, SiCinema4D, SiGmail } from "react-icons/si";

export default function Skils(){


    function Cercle({marked=50, children="", dots =80, icons=<SiAdobephotoshop/>}){
        let dotsTab=[...Array(dots)];
        let percent = Math.trunc(dots*marked/100); 
        let tt = [...Array(percent)];
        let rotat = 360/dots

        return <>
            <div className="box my-2 mx-0 flex-auto relative items-center justify-center">
                <div className="circle flex">
                    {dotsTab.map((dotsTab,k) =>  <div key={k} className="points" style={{"--i": k, '--rot': rotat + 'deg'} as React.CSSProperties}></div>)}
                    {tt.map((e,k) => <div key={k} className="points2" style={{"--i": k , '--rot': rotat + 'deg'} as React.CSSProperties}></div>)}
                    <Link href={"#"} className="absolute text-3xl text-col p-1 rounded-lm">{icons}</Link>
                
                </div>
            </div>
        </>
    }

    return (
        <>
            <div className=" w-full p-8">
                <div className="text-center">
                    <p className="uppercase text-gray-500">De quoi suis capable </p>
                    <br />
                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Compétance</h1>
                    <br />
                    
                </div>
                <div className="skill-main w-full grid md:grid-cols-2 gap-y-5 gap-x-5">
                    <div className="skill-left">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-3 md:mb-5">Competance Professionnel </h3>
                        <div className=" justify-between block h-full">
                            <div className="mb-3 md:mb-5">
                                <div className=" w-full flex mb-2 justify-between">
                                    <h3>Vidéos</h3>
                                    <h3>87%</h3>
                                </div>
                                <div className="h-2.5 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-full hover-col neo-shadow animat-video" style={{ width: "87%" }}></div></div>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <div className=" w-full flex mb-2 justify-between">
                                    <h3>Photos</h3>
                                    <h3>95%</h3>
                                </div>
                                <div className="h-2.5 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-full hover-col neo-shadow animat-photo" style={{ width: "95%" }}></div></div>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <div className=" w-full flex mb-2 justify-between">
                                    <h3>Animations</h3>
                                    <h3>75%</h3>
                                </div>
                                <div className="h-2.5 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-full hover-col neo-shadow animat-animation" style={{ width: "75%" }}></div></div>
                            </div>
                            <div className="mb-3 md:mb-5">
                                <div className=" w-full flex mb-2 justify-between">
                                    <h3>Impressions</h3>
                                    <h3>81%</h3>
                                </div>
                                <div className="h-2.5 w-full bg-neutral-200 dark:bg-neutral-600">
                                    <div className="h-full hover-col neo-shadow animat-impression" style={{ width: "81%" }}></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-rigth text-center">
                        <h3  className="text-2xl md:text-3xl font-extrabold text-center mb-3 md:mb-5">Compétance technique</h3>
                        
                        <div className="professional grid p-1">
                            <Cercle marked={50} dots={80} icons={<SiAdobephotoshop/>}></Cercle>
                            <Cercle marked={65} dots={60} icons={<SiCinema4D/>}></Cercle>
                            <Cercle marked={80} dots={50} icons={<SiAdobepremierepro/>}></Cercle>
                            <Cercle marked={90} dots={40} icons={<SiAdobeaftereffects/>}></Cercle>
                            <Cercle marked={73} dots={30} icons={<SiAdobeillustrator/>}></Cercle>
                            <Cercle marked={73} dots={30} icons={<SiAudacity/>}></Cercle>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
