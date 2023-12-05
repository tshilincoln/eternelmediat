'use client'
import { useForm } from 'react-hook-form';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


export default function Contact(){
  async function envoieMail(event:any) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const data ={
      name: String(event.target.name.value),
      phone: String(event.target.phone.value),
      email: String(event.target.email.value),
      subject: String(event.target.subject.value),
      message: String(event.target.message.value),
    };
    const response = await fetch ('/api/sendmail', {method:'POST', headers:{'Content-Type': 'application/json'},})
    if (response.ok){
      console.log("le message a été bien envoyé")
    }
    if (!response.ok){
      console.log("le message n'a pa été bien envoyé")
    }

  }

    return (
        <>
            <div className="mt-7 hcontact">
                <div className="text-center">
                    
                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Contact</h1>
                    <br />
                </div>
                <br /><br /><br />

                <div className='absolute m-0 p-0 text-center items-center justify-center w-full'>
                  <div className=" flex text-7xl md:text-9xl text-center items-center justify-center w-full gap-2">
                    <a href="https://wa.me/243979589879" className="navigation "><FaWhatsapp/></a>
                    <a href="mailto:eternelmedia3@gmail.com" className="navigation "><SiGmail/></a>     
                    <a href="tel:+243850438160" className="navigation text-6xl md:text-8xl"><BsFillTelephoneOutboundFill/></a>                   
                  </div>
                  <br />
                  <p className="uppercase text-sm md:text-lg text-gray-500 text-center justify-center">contacter nous sur whatsapp, Gmail ou appeler</p>
                </div>
                
            </div>
        </>
    )

}

/*


<div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-7">

<form
  action={envoieMail} method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
  <div>
    
    <div className="mt-1">
      <input required
        placeholder="Votre Nom" type="text" name="first-name" id="name" autoComplete="name"
        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 champs border-warm-gray-300 rounded-md sec-bg"/>
    </div>
  </div>
  <div>
    
    <div className="mt-1">
      <input 
        placeholder="Votre Num Phone" type="text" name="phone" id="phone" autoComplete="tel"
        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 champs border-warm-gray-300 rounded-md sec-bg"
        aria-describedby="phone-optional"/>
    </div>
  </div>
  <div>
    <div className="mt-1">
      <input required
        placeholder="Votre Email" id="email" name="email" type="email" autoComplete="email"
        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 champs border-warm-gray-300 rounded-md sec-bg"/>
    </div>
  </div>
  <div>
    
    <div className="mt-1">
      <input required
        placeholder="Votre Sujet" type="text" name="subject" id="subject"
        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 champs border-warm-gray-300 rounded-md sec-bg"/>
    </div>
  </div>
  
  <div className="sm:col-span-2">
    
    <div className="mt-1">
      <textarea required
        placeholder="Entrer votre message - Max. 500 characters" id="message" name="message"
        rows={4} className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 champs border border-warm-gray-300 rounded-md sec-bg"
        aria-describedby="message-max" defaultValue={""}/>
    </div>
  </div>
  <div className="sm:col-span-2 sm:flex sm:justify-end">
    <button type="submit" className="btn-x mt-2 px-6 py-3 w-full inline-flex items-center justify-center border border-transparent rounded-md shadow-sm text-lg font-medium sec-text-colore hover-col neo-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
      Envoyer le message
    </button>
  </div>
</form>
</div>
*/