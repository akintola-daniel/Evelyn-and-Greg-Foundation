import React, { useState, useEffect } from 'react';
import { award1, donation1, donation2, people1 } from '../assets/images';
import { FaArrowCircleRight, FaArrowCircleLeft, FaRegPlayCircle } from 'react-icons/fa';
import { FaRegCirclePause } from "react-icons/fa6";
import Purpose from './Purpose';
import Impact from './impact';
import Help from './Help';
import Donation from './Donation';
import Projects from './Projects';



const images = [award1, donation1, donation2, people1];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };



  return (

    <div className='mt-[70px] '>
    <div className=' bg-black relative '>

      <div className="relative h-[75vh] overflow-hidden  mx-auto max-w-[1400px] ">
        <img 
          src={images[currentIndex]} 
          alt="Foundation" 
          className="w-full h-full object-cover object-top rounded-md transition-opacity duration-500" 
        />


        {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)} 
        className="absolute top-4 md:top-6 right-4 text-white text-3xl drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] hover:scale-110 duration-200">
        {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
      </button>



        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] hover:scale-110 duration-100 md:scale-110 md:hover:scale-125 lg:scale-125 lg:hover:scale-150">
          <FaArrowCircleLeft />
        </button>

        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] hover:scale-110 duration-100 md:scale-110 md:hover:scale-125 lg:scale-125 lg:hover:scale-150">
          <FaArrowCircleRight />
        </button>

        {/* Text Content */}
        <div className="absolute bottom-2 text-white rounded-lg py-4 px-5">
          <h1 className='text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px] font-bold drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)]'>
            The Evelyn and Greg Foundation
          </h1>
          <p className='sm:mt-2 sm:text-[18px] md:text-[20px] lg:text-[22px] drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] italic'>
          "A father of the fatherless, a defender of widows, is God in His holy habitation."
          <br /> Psalms 68:5
          </p>
        </div>
      </div>
    </div>
    <Purpose/>
    <Impact/>
    <Help/>
    <Donation/>
    <Projects/>
    </div>
  );
};

export default Hero;
