import React from 'react'
import { helps } from '../constants'
import {  HelpCard } from '../components'

const Help = () => {
  return (
    <div className=' bg-pale-amber py-16'>

      <div className='flex flex-col items-center text-center mb-14 gap-3 px-5 max-w-[600px] mx-auto md:max-w-[700px]'>

      <h2 className='font-bold text-[30px] md:text-[35px] lg:text-[40px]'>How You Can Help</h2>

      <p className='text-gray-800 text-[18px] md:text-[19px] lg:text-[20px]'>Every contribution, big or small, helps us make a difference in the lives of orphaned children. Here's how you can get involved.</p>
      </div>

      

      <div className='px-5 grid md:grid-cols-2 md:gap-5 md:px-8'>
      {helps.map((help, index)=> (
        <HelpCard
        key={index}
        {...help}
        />
      ))}
      </div>


      <div className='flex justify-center'>

      <button className=' bg-amber-900 rounded-full hover:scale-105 duration-100 gap-2 py-2.5 px-3.5 text-white uppercase md:mt-7 lg:mt-10 md:scale-105 md:hover:scale-110 lg:scale-110 lg:hover:scale-125 '>
      
        <p>Get Involved</p>

    </button>

    </div>
    

      
    


    </div>
  )
}

export default Help
