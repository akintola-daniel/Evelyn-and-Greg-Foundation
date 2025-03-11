import React from 'react'
import { contact } from '../assets/images'
import { contactInfo, contacts } from '../constants'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoIosSend } from "react-icons/io";
import { ContactCard } from '../components';

const Contact = () => {

  

 

  return (
    <div className='mt-[70px] '>

     <div className='bg-black relative flex flex-col items-center'>

      <img src={contact} alt="group Photo" className='max-sm:h-[200px] max-h-[500px] mx-auto rounded-lg'  />

      <h3 className='absolute bottom-2 md:bottom-3 lg:bottom-6 text-white font-semibold bg-black bg-opacity-85 px-3 md:px-5 py-0.5 rounded-md text-[25px] sm:text-[27px] md:text-[32px] lg:text-[35px]'>CONTACT US</h3>

     </div>

     <div className=' md:grid md:grid-cols-2  '>


      {/*Send A Message*/}
    <div className='px-4 pt-2 md:pt-7 md:px-7 pb-7'>
      <h3 className=' mt-7 uppercase text-[25px] text-center lg:text-left font-bold max-w-[500px] mx-auto  md:text-[27px] lg:text-[30px]'>Send us a Message</h3>

      <form className='flex flex-col gap-7 mt-5  max-w-[500px] mx-auto'>

        {contactInfo.map((contactInfo, index)=>
        <ContactInfoCard
        {...contactInfo}
        key={index}
        />
        )}

        <div>
        <label htmlFor="message" className='font-semibold text-gray-700'>Your Message</label><br />

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border p-2 rounded-md w-full mt-2"
        />
        </div>
      

      
      <button type='submit' className=' bg-amber-700 text-white rounded-lg hover:scale-105 duration-100 flex items-center justify-center gap-2 py-2.5  w-[95%] mx-auto '>

        <IoIosSend className='size-[25px]'/>
        <p className='font-semibold'> Send Message</p>
        

    </button>
    

    </form>
    </div>



      {/*Get in Touch*/}
      <div className='bg-amber-50 px-4 pt-10 pb-28 md:pt-7 max-md:mt-10  '>

      <h3 className=' mt-7 uppercase text-[25px] text-center font-bold max-w-[500px] mx-auto md:text-[27px] lg:text-[30px]'>Get in Touch</h3>


      <div className='mt-10 flex flex-col gap-7'>
      {contacts.map((contact, index)=>
      <ContactCard
      key={index}
      {...contact}
      />
      )}
      </div>

      </div>

      
    </div>
    </div>
  )
}

export default Contact
