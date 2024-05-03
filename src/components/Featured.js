import './Featured.css'
import React, { useState, useCallback,useEffect, useMemo } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = useMemo(() => [
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
  ], []);

  const nextSlider = useCallback(() => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sliders]);

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className='featured-slider-container'>
      <div
        className='slider-image'
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="search-box">
          <AiOutlineSearch size={25} />
          <input
            className="search-input"
            type="text"
            placeholder="Search meals"
          />
        </div>
      </div>
      
      <div className='slider-controls'>
        <div className='slider-control-left' onClick={nextSlider}>
          <BsChevronCompactLeft />
        </div>
        <div className='slider-control-right' onClick={nextSlider}>
          <BsChevronCompactRight />
        </div>
      </div>
      
      <div className='slider-dots'>
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
