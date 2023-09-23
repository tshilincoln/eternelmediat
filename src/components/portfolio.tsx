import Link from "next/link";


export default function Portfolio(){

    return (
        <>
            <div className="p-8 sec-bg">
                <div className="text-center">
                    <p className="uppercase text-gray-500">mes realisations</p>
                    <br />
                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Portfolio</h1>
                    <br />
                </div>
                <div className="container">
                    <div className="flit-button text-center m-8">
                        <button className="btn bg-none outline-none cursor-pointer text-xl ">Tous</button>
                        <button className="btn">Videos</button>
                        <button className="btn">Photos</button>
                        <button className="btn">Design</button>
                        <button className="btn">Impression</button>
                    </div>
                </div>
                <div className="gallery grid">
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
                    <div className="port-box">
                        <div className="port-image">
                            <img src="/illustration/grphismesurbois.svg" alt=""/>
                        </div>
                        <div className="port-contenu">
                            <h3>photo</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea culpa assumenda placeat reprehenderit et mollitia dolorem, beatae eligendi ipsa possimus adipisci molestiae rem sed earum voluptas a odio soluta.</p>
                            <Link href={""}>icone du lien de l'image</Link>
                        </div>
                    </div>
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
                    <div className="port-box">
                        <div className="port-image">
                            <img src="/illustration/grphismesurbois.svg" alt=""/>
                        </div>
                        <div className="port-contenu">
                            <h3>photo</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea culpa assumenda placeat reprehenderit et mollitia dolorem, beatae eligendi ipsa possimus adipisci molestiae rem sed earum voluptas a odio soluta.</p>
                            <Link href={""}>icone du lien de l'image</Link>
                        </div>
                    </div>
                    <div className="port-box">
                        <div className="port-image">
                            <img src="/illustration/grphismesurbois.svg" alt=""/>
                        </div>
                        <div className="port-contenu">
                            <h3>impression</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea culpa assumenda placeat reprehenderit et mollitia dolorem, beatae eligendi ipsa possimus adipisci molestiae rem sed earum voluptas a odio soluta.</p>
                            <Link href={""}>icone du lien de l'image</Link>
                        </div>
                    </div>
                    <div className="port-box">
                        <div className="port-image">
                            <img src="/illustration/grphismesurbois.svg" alt=""/>
                        </div>
                        <div className="port-contenu">
                            <h3>design</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ea culpa assumenda placeat reprehenderit et mollitia dolorem, beatae eligendi ipsa possimus adipisci molestiae rem sed earum voluptas a odio soluta.</p>
                            <Link href={""}>icone du lien de l'image</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}