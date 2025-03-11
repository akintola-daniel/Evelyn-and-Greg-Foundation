import React from 'react'

const Footerlink = ({label,links}) => {
  return (
    <div>
      <h4 className='text-[20px] sm:text-[21px]'>{label}</h4>

      <ul className='mt-2'>
       {links.map((link)=>(
        <li className='text-gray-300 leading-8 sm:leading-7 hover:text-coral-red sm:text-[17px] '>
          <a href={link.link} className=' hover:text-white'> {link.name} </a>
        </li>
       ))}
      </ul>
    </div>
  )
}

export default Footerlink
