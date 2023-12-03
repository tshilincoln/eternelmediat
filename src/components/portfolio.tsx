import Link from "next/link";
import ReactPlayer from 'react-player'

export default function Portfolio(){

    function Photo({Photo="jj"}){

        return <>
            <div className="port-box">
                <img width='100%' src={Photo} /> 
            </div>
        </>
    }

    return (
        <>
            <div className="p-8 sec-bg">
                <div className="text-center">
                    <p className="uppercase text-gray-500">mes realisations</p>
                    <br />
                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Portfolio</h1>
                    <br />
                </div>
                <div className="container hidden">
                    <div className="flit-button text-center m-8">
                        <button className="btn bg-none outline-none cursor-pointer text-xl ">Tous</button>
                        <button className="btn">Videos</button>
                        <button className="btn">Photos</button>
                        <button className="btn">Design</button>
                        <button className="btn">Impression</button>
                    </div>
                </div>
                <div className="gallery grid mb-6">
                    <div className="port-box">

                        <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=TEw688lS_fA' /> 

                    </div>
                    <div className="port-box">

                        <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=jqSHOivVcV4' /> 

                    </div>
                    <div className="port-box">

                        <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=YBQugkCgzUk' /> 

                    </div>
                    <div className="port-box">

                        <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=cgpLT1lVkRc' /> 

                    </div>
                    <div className="port-box">

                        <ReactPlayer width='100%' url='https://youtu.be/wxk_eRixjsI?si=l3SPbbC75fEnr69-Nous' /> 

                    </div>
                </div>
                <div className="gallery grid">
                    
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/IMG_2741.JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/IMG_3575 copie.JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/IMG_3537 copie.JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/IMG_2110 copie 2.JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/MAK (7).JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/DJI_0087.JPG" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/mesphotos/DJI_0072.JPG" /> 

                    </div>
                </div>
            </div>

        </>
    )

}

/* 

presentatin initiale 
                    <div className="port-box">
                        <div className="port-image">
                            <img src="/illustration/grphismesurbois.svg" alt=""/>
                        </div>
                        <div className="port-contenu">
                            <h3>video</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea culpa assumenda placeat reprehenderit et mollitia dolorem, beatae eligendi ipsa possimus adipisci molestiae rem sed earum voluptas a odio soluta.</p>
                            <Link href={""}>icone du lien de l'image</Link>
                        </div>
                    </div>
                    */