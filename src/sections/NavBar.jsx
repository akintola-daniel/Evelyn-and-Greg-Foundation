import React, {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { reactLogo } from '../assets/images';

import { NavLinkCards } from '../components';
import { navLinks } from '../constants';


const NavBar = () => {
  //Sliding Nav
  const[menuOpen, setMenuOpen]= useState(false);
  const toggleMenu= () => {setMenuOpen(!menuOpen)};  


 


  return (
    <nav className={'bg-gray-50 border-b border-b-gray-200 fixed w-full top-0 left-0  mx-auto px-8 sm:px-12 z-50 '}>

      <div className='flex justify-between items-center my-auto h-[70px] md:h-[80px] max-w-[1050px] mx-auto'>
  
      <img src={reactLogo} alt="Logo" className='z-20' width={40}/>

      <div onClick={toggleMenu} className='cursor-pointer md:hidden z-20'>{menuOpen ? <MdCancel size={27} className='text-amber-700 hover:scale-110' /> : <IoIosMenu size={27} className='text-amber-700 hover:scale-110' />}</div>

      <div className= {menuOpen ? 
        'fixed flex flex-col pt-[120px] gap-[45px] h-[100%] w-full  top-0 left-0 ease-in-out duration-200 bg-gray-50  md:hidden rounded-b-xl items-center mt-10'
         : 
        'fixed h-full w-full  top-[-100%] left-0 ease-in duration-200 md:hidden rounded-b-xl'}>     
      
      {navLinks.map((link, index) => (
  <NavLinkCards
    key={index}
    {...link}
    customClass={link.label === "Contact Us" 
      ? "border bg-amber-700 text-white  py-0.5 px-[50px] rounded-2xl hover:text-white  hover:duration-150 hover:font-semibold hover:px-[53px]" 
      : ""
    }
    toggleMenu={toggleMenu} // ✅ Ensure toggleMenu is passed to all links
  />
))}

      </div>



      <div className='hidden md:flex gap-8 lg:gap-9'>
      {navLinks.map((link, index) => (

link.label === "Contact Us" ? 
(   <NavLinkCards
    key={index}
    {...link}
    customClass="border bg-black text-white py-1 px-[15px] rounded-lg hover:text-white hover:scale-105 duration-150 hover:font-semibold"
    
  />
) 
: 
(
  <NavLinkCards
    key={index}
    {...link}
  />
)
))}
      </div>

      </div>

      </nav>
    
  )
}

export default NavBar
