import React, { useState } from 'react';
import Slide from '../components/Slide';

const slides = [
  { imageSrc: 'img/AMAVI (36 x 24 in).png', altText: 'Slide 1' },
  { imageSrc: 'img/AMAVI (36 x 24 in) (1).png', altText: 'Slide 2' },
  { imageSrc: 'img/AMAVI (36 x 24 in) (2).png', altText: 'Slide 3' },
];

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {slides.map((slide, index) => (
          <Slide key={index} imageSrc={slide.imageSrc} altText={slide.altText} />
        ))}
        <div className="nav-manual">
          {slides.map((slide, index) => (
            <label key={index} htmlFor={`radio${index + 1}`} className="manual-btn" onClick={() => handleSlideChange(index)}>
              {/* Add radio button functionality here if needed */}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;