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

                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Portfolio</h1>
                    <br />
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

                        <img width='100%' src="/services/2.jpg"/> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/3.jpg" /> 

                    </div>
                    
                    <div className="port-box">

                        <img width='100%' src="/services/6.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/7.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/4.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/22.jpg" /> 

                    </div>
                    
                    <div className="port-box">

                        <img width='100%' src="/services/9.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/11.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/12.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/14.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/16.jpg" /> 

                    </div>
                    
                    <div className="port-box">

                        <img width='100%' src="/services/18.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/23.jpeg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/24.jpeg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/8.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/19.jpg" /> 

                    </div>
                    <div className="port-box">

                        <img width='100%' src="/services/21.jpg" /> 

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










                    <div className="container hidden">
                    <div className="flit-button text-center m-8">
                        <button className="btn bg-none outline-none cursor-pointer text-xl ">Tous</button>
                        <button className="btn">Videos</button>
                        <button className="btn">Photos</button>
                        <button className="btn">Design</button>
                        <button className="btn">Impression</button>
                    </div>
                </div>
                    */