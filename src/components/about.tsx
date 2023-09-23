


export default function About(){

    return(
        <>
            <div className="block relative">
                <div className="w-full items-center justify-center text-center relative ">
                    <div className="px-10"> 
                        <p className="uppercase text-gray-500">let me introduce myself</p>
                        <br />
                        <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">About us</h1>
                    </div>        
                </div>
                <div className="sm:flex ">
                    <div className="w-full sm:w-2/6">
                        <img className="sm:w-11/12 sm:h-full w-4/6 block m-auto" src="./camera.png" alt="" />
                    </div>
                    <div className="w-full sm:w-4/6 items-center justify-center text-center md:text-justify relative ">
                        <div className=" mt-6 py-5 px-10"> 
                            <br />
                            <h1 className=" font-extrabold text-2xl md:text-4xl">Eternal Mediat</h1>
                            <br />
                            <p className="text-sm text-justify md:text-lg">Capture the eternal moments with Eternel Mediat 
                                - your go-to media company in Kinshasa for stunning 
                                photography, captivating video, event coverage, wedding 
                                memorabilia and creative woodblock graphic designs. </p>
                        </div>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}