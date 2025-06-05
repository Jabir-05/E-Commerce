import React from 'react';
import clothes from '../assets/clothes.png';
import food from '../assets/food.png';
import medicine from '../assets/medicine.png'
import household from '../assets/household.png'
const HomeCarousel = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 mt-19">
      <div className="carousel w-full rounded-lg overflow-hidden">
        <div id="item1" className="carousel-item w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src={clothes}
            className="w-full h-full object-full object-cover object-center"
            alt="Slide 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <img
           src={food}
             className="w-full h-full object-full object-cover object-center"
            alt="Slide 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <img
           src={medicine}
             className="w-full h-full object-full object-cover object-center"
            alt="Slide 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <img
           src={household}
            className="w-full h-full object-full object-cover object-center"
            alt="Slide 4"
          />
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex justify-center w-full py-4 gap-2">
        <a href="#item1" className="btn btn-xs sm:btn-sm">1</a>
        <a href="#item2" className="btn btn-xs sm:btn-sm">2</a>
        <a href="#item3" className="btn btn-xs sm:btn-sm">3</a>
        <a href="#item4" className="btn btn-xs sm:btn-sm">4</a>
      </div>
    </div>
  );
};

export default HomeCarousel;
