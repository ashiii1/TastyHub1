import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const Featured = () => {
  const sliders = [
    {
      url: 'https://media.istockphoto.com/id/1010677810/photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-for-the-new-year.jpg?s=612x612&w=0&k=20&c=bCezyNqQUeYWFbodrf2kloJJBPPOeXbr4Fwd6B-wfxM='
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
    },
    {
      url: 'https://images.slurrp.com/prodarticles/s4zylcjorte.webp',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
    },
    {
      url: 'https://www.thestatesman.com/wp-content/uploads/2022/01/Eating-on-banana-leaves-photo-stock-1.jpg',
    },
    {
      url: 'https://png.pngtree.com/background/20210711/original/pngtree-colorful-delicious-ice-cream-background-picture-image_1128318.jpg',
    },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically move to the next slide every 1 second
    const intervalId = setInterval(nextSlider, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, );

  return (
    <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-300 flex items-center'
    style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
  >
  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
      <AiOutlineSearch size={25} />
      <input
        className="bg-transparent p-2 w-full focus:outline-none"
        type="text"
        placeholder="search meals"
      />
    </div>
  

      </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={nextSlider} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-2xl ${slideIndex === currentIndex ? 'text-orange-700' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
