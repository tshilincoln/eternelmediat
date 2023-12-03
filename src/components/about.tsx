


export default function About(){

    return(
        <>
            <div className="block relative">
                <div className="w-full items-center justify-center text-center relative ">
                    <div className="px-10"> 
                        <p className="uppercase text-gray-500">laisse moi me presenté</p>
                        <br />
                        <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">A propos de nous</h1>
                    </div>        
                </div>
                <div className="sm:flex ">
                    <div className="w-full sm:w-2/6">
                        <img className="sm:w-11/12 sm:h-full w-4/6 block m-auto" src="./camera.png" alt="" />
                    </div>
                    <div className="w-full sm:w-4/6 items-center justify-center text-center md:text-justify relative ">
                        <div className=" mt-6 py-1 px-10"> 
                            <br />
                            <h1 className="primarri-coor-text font-extrabold text-2xl md:text-4xl">Gédeon Tshibangu</h1>
                            <br />
                            <p className="text-sm text-justify md:text-lg">Informaticien <span className="primarri-coor-text">Photographe</span> Vidéastre <span className="primarri-coor-text">Designer</span> pilote de drone</p>
                            <p className="text-sm text-justify md:text-lg"> Responsable Fondateur de la poite multimédia <span className="primarri-coor-text">Eternel Mediat</span></p>
                            <p className="text-sm text-justify md:text-lg"> passionné par le multimédia, l'événementiel, le milieux périurbains et brousse</p>
                        </div>
                        <div className=" mt-6 py-1 px-10"> 
                            <h1 className=" font-extrabold text-lg md:text-xl uppercase primarri-coor-text">Mon parcoures dans le médiat</h1>
                            <br />
                            <ul className="px-10">
                                <li>designer, photographe, videastre chez 2Kdesign</li>
                                <li className="primarri-coor-text">consultan photographe chez PROSANI USAID</li>
                                <li>designer, photographe, videastre indépendant</li>

                            </ul>
                            <p className="text-sm text-justify md:text-lg"></p>
                        </div>
                        
                        
                    </div>
                    
 
                </div>
                <div className=" mt-6 py-5 px-10"> 
                    <h1 className=" font-extrabold text-2xl md:text-4xl primarri-coor-text">Eternal Mediat</h1>
                    <br />
                    <p className="text-sm text-justify md:text-lg"> Nous somme une agence de multimédia basée à Kinshasa, qui vous offre des services de qualité dans les domaines de la prise de photos, de vidéos, de l'animation 3D et du design.</p>
                    <p className="text-sm text-justify md:text-lg">Que vous soyez un particulier, une entreprise, une association ou une institution, nous vous proposons des solutions adaptées à vos besoins et à votre budget.</p>
                    <p className="text-sm text-justify md:text-lg">Nous disposons d'une équipe de professionnels passionnés et expérimentés, qui maîtrisent les dernières technologies et les tendances du marché.</p>
                    <p className="text-sm text-justify md:text-lg">Nous vous accompagnons de la conception à la réalisation de vos projets, en respectant vos délais et vos exigences.</p>
                    <p className="text-sm text-justify md:text-lg">Sur notre site, vous pourrez découvrir nos réalisations, nos tarifs, nos références et nos coordonnées. N'hésitez pas à nous contacter pour nous faire part de vos idées, nous vous répondrons dans les plus brefs délais.</p>
                    <p className="text-sm text-justify md:text-lg"></p>
                </div>
                
                
            </div>
        </>
    )
}