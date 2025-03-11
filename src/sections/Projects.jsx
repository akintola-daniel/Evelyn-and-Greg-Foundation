import React from 'react'
import { projects } from '../constants'
import {  ProjectsCard } from '../components'

const Projects = () => {
 return (
  <div className=' bg-pale-amber py-16'>

    <div className='flex flex-col items-center text-center mb-14 gap-3 px-5 max-w-[600px] mx-auto md:max-w-[700px]'>

    <h2 className='font-bold text-[30px] md:text-[35px] lg:text-[40px]'>Our Projects and Outreach Impact</h2>

    <p className='text-gray-800 text-[18px] md:text-[19px] lg:text-[20px]'>With faith, dedication, and your support, we are on a mission to transform the lives of orphans. This is the future we are striving for and we won't stop until we get there.</p>
    </div>

    <div className='px-5 grid md:grid-cols-2 md:gap-5 md:px-8'>
    {projects.map((project, index)=> (
      <ProjectsCard
      key={index}
      {...project}
      />
    ))}
    </div>

    
  


  </div>
)
}

export default Projects
