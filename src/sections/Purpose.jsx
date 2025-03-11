import React from 'react'
import { couple } from '../assets/images'

const Purpose = () => {
  return (
    <div className='my-9 px-5 sm:px-12 max-md:mt-12'>

    <h2 className='font-bold text-[22px] sm:text-[26px] lg:text-[30px] text-center '>Reason For The Foundation</h2>

    <div className='grid md:grid-cols-2 md:mt-4 items-center max-w-[1100px] mx-auto'>

    <img src={couple} alt="Greg and Evelyn" className='mt-2 rounded-lg max-md:mt-5 mx-auto w-[100%] sm:w-[80%] ' />

    <p className=' mt-3  text-center md:mt-0  md:text-left md:text-[17px] lg:text-[18px] text-gray-900 '>In loving memory of Uncle Greg, whose compassion and dedication to helping orphaned children inspired the creation of this foundation. His legacy lives on through every life we touch and every child we help.

    Uncle Greg believed that every child deserves a chance at a bright future, regardless of their circumstances. His unwavering commitment to this cause has become our guiding light.

    Today, we honor his memory by continuing his mission of providing love, support, and opportunities to orphaned children across the region. His spirit of generosity and kindness continues to inspire everything we do.

    In loving memory of Uncle Greg, whose compassion and dedication to helping orphaned children inspired the creation of this foundation. His legacy lives on through every life we touch and every child we help.

</p>


</div>
    </div>
  )
}



export default Purpose
