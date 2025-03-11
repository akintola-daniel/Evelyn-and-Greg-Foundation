import React from 'react'

const ProjectsCard = ({ icon, label, text }) => {
  return (
    <div className='bg-white mb-10 rounded-xl p-10 shadow-inner max-w-[600px] mx-auto md:mb-5 md:max-w-[500px]  duration-100'>
    
          <div className=' mb-1 rounded-full bg-amber-50 p-2 text-amber-900 text-[40px] w-fit mx-auto mt-3 '>{React.createElement(icon)} </div>
    
          <h3 className='font-semibold text-[21px] sm:text-[24px] mb-3 text-center'>{label}</h3>
    
          <p className='text-gray-800'>{text}</p>
    
   </div>
  )
}

export default ProjectsCard
