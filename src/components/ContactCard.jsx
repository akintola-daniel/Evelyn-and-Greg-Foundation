import React from 'react'

const ContactCard = ({label, info, icon}) => {
  return (
    <div className='bg-white px-4 py-5 lg:py-6 flex max-w-[500px] w-full mx-auto rounded-lg shadow-inner gap-5 items-center overflow-hidden'>

      <div className='bg-amber-200 p-2 rounded-lg text-amber-700 text-[21px] sm:text-[23px]'>
        {React.createElement(icon)}
      </div>

      <div className='flex-1 min-w-0'>
        <h3 className='font-semibold'>{label}</h3>
        <p className='text-gray-700 break-words overflow-hidden'>{info}</p>
      </div>

    </div>
  )
}

export default ContactCard
