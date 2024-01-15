import { FaInstagramSquare} from "react-icons/fa";
import { ImFacebook2} from "react-icons/im";


export default function RSociaux(){

    return (
        <>
            <div className=" z-30 block text-3xl ml-4 mb-4 md:text-4xl md:ml-16 md:mb-16 ">
                <a href="https://www.facebook.com/profile.php?id=100089783714720&mibextid=LQQJ4d" className="navigation hover:text-3xl hover:md:text-5xl "><ImFacebook2/></a>
                <a href="https://instagram.com/eternel_media?igshid=OGQ5ZDc2ODk2ZA==" className="navigation hover:text-3xl hover:md:text-5xl  "><FaInstagramSquare/></a>
            </div>

        </>
    )
}

