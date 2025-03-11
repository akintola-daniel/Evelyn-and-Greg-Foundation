import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FooterLink } from '../components';
import { footerLinks } from '../constants';


const Footer = () => {
  return (
    <div className='bg-amber-700 text-white py-4 px-4'>

      <div className='  mt-6  w-full mx-auto sm:mt-9 '>

        <div className='md:grid grid-cols-3 lg:max-w-[1050px] items-center'>

        <div className='md:ml-2 flex flex-col md:items-start lg:ml-4 md:pr-5'>

        <h3 className='text-[23px] font-semibold sm:text-[25px] '>The Evelyn and Greg Foundation</h3>

        <p className='text-gray-200 mt-4 leading-snug max-w-[500px]  md:mr-4 sm:text-[1.1em]'> Bringing hope, love and a future to every orphan worldwide, because every orphans deserves a brighter tomorrow . </p>

        <p className='font-semibold text-[17px] mt-1 sm:text-[1.1em]'>Psalm 68:5</p>


        </div>


        
        <div className='flex flex-col md:flex-row gap-6  w-full justify-between mx-auto mt-9 sm:mt-11  md:col-span-2 max-w-[650px] md:mt-0
        md:pr-1 md:px-2 md:max-w-[750px] sm:mx-0 '>

          {footerLinks.map((list, index)=>(
            <FooterLink
            key={index}
            {...list}
            />
          ))}
        </div>

      </div>

        <div className='flex items-center justify-center text-center mt-9 border-t pt-4'>

        {React.createElement(FaRegCopyright)}
        <p>2025 Evelyn and Greg Foundation. All rights reserved.</p> 
 
        </div>

      </div>
    </div>
  )
}

export default Footer
