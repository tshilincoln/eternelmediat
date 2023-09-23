'use client'
import { useForm } from 'react-hook-form';


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
            <div className="p-8">
                <div className="text-center">
                    <p className="uppercase text-gray-500">what we can do for you</p>
                    <br />
                    <h1 className="primarri-coor-text font-extrabold text-3xl md:text-5xl">Contact</h1>
                    <br />
                </div>

                {/* Contact form */}
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
                      <button type="submit" className="mt-2  w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium sec-text-colore hover-col neo-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                </div>
            </div>
        </>
    )

}