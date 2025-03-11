import React, { useState, useEffect } from 'react';
import { certificate, EnG1, EnG2, jasmine, together1, together2, together3 } from '../assets/images';
import { SlHeart } from "react-icons/sl";
  

const About = () => {const images = [together1, together2, together3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
  <div className='mt-[80px] md:mt-[90px] px-5 sm:px-12 mb-10'>

{/* About Jasmine */}     
      <div>

        <div className='my-9 max-md:mt-12'>
        
           
        
          <div className='grid md:grid-cols-2 md:mt-4 items-center  md:items-start max-w-[1100px] mx-auto'>
            
        
          <div className="relative mt-[20px]  w-fit mx-auto">
  {/* Image with highest z-index */}
  <img 
    src={jasmine}  
    alt="Greg and Evelyn" 
    className="relative z-20 rounded-lg h-[450px] md:h-[480px] w-full  max-w-[500px] bg-white" 
  />

  {/* Top-left square (behind image) */}
  <div className="absolute top-0 left-0 -translate-x-3 -translate-y-3 w-[87px] h-[80px] bg-transparent border-2 border-pink-200 z-10 rounded-md"></div>

  {/* Bottom-right square (behind image) */}
  <div className="absolute bottom-0 right-0 translate-x-3 translate-y-3 w-[80px] h-[80px] bg-pink-200 z-10 rounded-md"></div>
</div>







            <div> 
              <h2 className='font-bold text-[32px] sm:text-[35px] md:text-[32px] lg:text-[40px] text-center mt-5 md:mt-0 '>About Jasmine</h2>
        
              <p className='text-center mt-2  md:text-left sm:text-[17px] md:text-[17px] lg:text-[18px] text-gray-900 md:ml-10 lg:ml-0 '>Jasmine Alofoje knows what it means to long for love. Losing her mother in 2016 and her father in 2017 left a void no child should ever have to endure. Their deaths reshaped her world, but instead of letting grief consume her, she chose to turn her pain into purpose.

              The Evelyn and Greg Foundation was born from her deepest desire — to give orphans the love, care, and support she once longed for. Jasmine believes that every child deserves to feel seen, cherished, and empowered. She refuses to let orphans feel forgotten because she knows firsthand what it’s like to search for comfort in loss. Through this foundation, she is on a mission to remind orphans around the world that they are deeply loved, not just by people, but by God, who has a special place for them in His heart.

              Jasmine’s story is a testament to resilience, faith, and the power of love. What was once her greatest sorrow has now become her greatest calling—to bring hope to those who need it most.
        
              </p>
            </div>

          </div>
        </div>
      </div>     



{/* Memory of Evelyn and Greg */}
      <div className='bg-pale-amber py-10 '>
        
        <div>
            <h2 className='font-bold text-[25px] sm:text-[29px] md:text-[33px] lg:text-[37px] text-center '>In Loving Memory of Evelyn and Greg
            </h2>

            <p className='border-2 border-red-600 w-[120px] mx-auto mt-3 '></p>
        </div>

{/*1st image*/}
        
        <div className='grid md:grid-cols-2 mt-4 md:mt-8 items-center max-w-[1100px] mx-auto '>
        
            <img src={EnG1} alt="Greg and Evelyn" className='mt-2 rounded-lg max-md:mt-5 h-[500px] lg:h-[600px] mx-auto shadow-xl' />

          <div className=' md:ml-8 lg:ml-10 '>

            <h2 className='font-bold text-[27px] sm:text-[30px] md:text-[30px] lg:text-[32px] text-left mt-5 md:mt-0 '>A Heart of Gold</h2>
        
            <div className=' mt-1 text-left md:mt-2   sm:text-[17px] lg:text-[18px] text-gray-900 '>
              <p>Evelyn was a woman of grace, kindness, and unwavering love. She had a heart that embraced everyone, and her warmth could light up even the darkest days.</p>

            <p className='mt-3'>She loved deeply, gave selflessly, and believed in the power of faith and family. Her compassion knew no bounds, and her gentle spirit continues to inspire the work of this foundation.</p>
        
            </div>
          </div>           
        </div>

{/*2nd image*/}

        <div className='grid md:grid-cols-2 mt-7 md:mt-4 items-center max-w-[1100px] mx-auto'>
        
          <div className=' md:mr-8 lg:mr-10 '>

            <h2 className='font-bold text-[27px] sm:text-[30px] md:text-[30px] lg:text-[32px] text-left mt-5 md:mt-0 '>A Life of Strength and Generosity</h2>
        
            <div className=' mt-1 text-left md:mt-2 sm:text-[17px] lg:text-[18px] text-gray-900 '>
            
            <p>Greg was a pillar of strength, wisdom, and endless generosity. He lived with purpose, always putting others before himself.</p>

            <p className='mt-3'>His love for his family was undeniable, and his belief in the potential of every child fuels the mission of this foundation. His kindness, laughter, and unwavering faith left a mark on everyone who knew him.</p>
        
            </div>

          </div>

          <img src={EnG2} alt="Greg and Evelyn" className='max-md:mt-7 rounded-lg  h-[500px] lg:h-[600px] mx-auto shadow-xl' />

        
        
        </div>
    

{/* Together, a Love That Lives On */}

      <div className='mt-20 '>
        
            <h2 className='font-bold text-[25px] sm:text-[29px] md:text-[33px] lg:text-[37px] text-center '>Together, a Love That Lives On
            </h2>

            <p className='border-2 border-red-600 w-[120px] mx-auto mt-3 md:mt-2 '></p>

            <div className='text-[55px] sm:text-[65px] lg:text-[70px] w-fit mx-auto mt-4 text-red-300'>{React.createElement(SlHeart)}</div>

            <p className='mt-6  text-[18px]  sm:text-[19px] lg:text-[20px] text-gray-800 text-center max-w-[900px] mx-auto'>Evelyn and Greg were more than husband and wife—they were soulmates, partners in faith, and an example of unconditional love. Their love for each other and those around them was a reflection of God's love. </p>

            <img
          src={images[currentImage]}
          alt="/"
          className='mt-8 rounded-md w-full max-w-[800px] mx-auto transition-opacity duration-1000 h-[330px] md:h-[400px] lg:h-[420px]'
          />

          <p className='mt-4  text-[18px]  sm:text-[19px] lg:text-[20px] text-gray-600 text-center max-w-[800px] mx-auto italic'>"Though they are no longer here, their spirit lives on in every child we help, every smile we create, and every life we touch."</p>
      </div>
    </div>



{/* We Are Certified */}
      <div className='mt-10 '>
        <h2 className='font-bold text-[30px] sm:text-[33px] md:text-[35px] lg:text-[37px] text-center' >We Are Certified</h2>

        <div className='grid md:grid-cols-2 max-w-[1100px] mx-auto items-center mt-6'>
        
            <img src={certificate} alt="certificate" className=' h-[450px] md:h-[500px]  mx-auto ' />

          <div className=' md:ml-8 lg:ml-10 '>

            <h2 className='font-bold text-[27px] sm:text-[30px] md:text-[30px] lg:text-[32px] text-left mt-5 md:mt-0 text-gray-800'>Our Certifications</h2>
        
            <div className=' mt-2 text-left md:mt-2   sm:text-[17px] lg:text-[18px] text-gray-900 '>
              <p>The Evelyn and Greg Foundation is proudly registered with the Corporate Affairs Commission (CAC) of Nigeria. Our registration number serves as a testament to our legitimacy and commitment to transparency.</p>

            <p className='mt-2'>We maintain strict compliance with all regulatory requirements and regularly submit detailed reports of our activities and financial statements to relevant authorities.</p>
        
            </div>
          </div>           
        </div>

      </div>
      
  </div>
  )
}

export default About
