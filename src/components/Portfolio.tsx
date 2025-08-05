import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  //rotate previous
  const handlePrev = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setIsFadingOut(false);
    }, 600);
  };

  //rotate next
  const handleNext = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => 
        (prevIndex + 1) % projects.length
      );
      setIsFadingOut(false);
    }, 600);
  };

  //getting active project based on index
  const currentProject = projects[activeIndex];

  return (
    <section id='portfolio' className='bg-gray-700 text-white py-16 px-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Portfolio</h2>

        {/* Carousel container */}
        <div className='relative flex items-center justify-center'>
          {/* Left button */}
          <button
            onClick={handlePrev}
            className='absolute left-0 top-1/2 -translate-y-1/2 p-4 text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300 z-10'
          >
            <FaArrowLeft />
          </button>

          {/* Project Cards */}
          <a
            href={currentProject.link}
            target='_blank'
            rel='noopener noreferrer'
            className={`block w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-700 ${isFadingOut ? 'opacity-0' : 'opacity-100'} hover:shadow-2xl`}
          >
            <h3 className='text-2xl font-bold mb-2 text-blue-400 text-center'>{currentProject.title}</h3>
            <p className='text-gray-400 text-center'>{currentProject.description}</p>
            <div className='mt-4 text-center'>
              <span className='inline-block text-sm text-blue-400 font-semibold'>
                Zobrazit projekt &rarr;
              </span>
            </div>
          </a>

          {/* Right button */}
          <button
            onClick={handleNext}
            className='absolute right-0 top-1/2 -translate-y-1/2 p-4 texxt-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300 z-10'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section> 
  );

};

export default Portfolio;