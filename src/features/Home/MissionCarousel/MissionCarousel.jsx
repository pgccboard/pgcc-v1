// Carousel.jsx
import React, { useEffect, useRef, useState } from "react";

import PGCC1 from "../../../assets/mission-carousel/pgcc-1.jpg";
import PGCC2 from "../../../assets/mission-carousel/pgcc-2.jpg";
import PGCC3 from "../../../assets/mission-carousel/pgcc-3.jpg";
import PGCC4 from "../../../assets/mission-carousel/pgcc-4.jpg";
import PGCC5 from "../../../assets/mission-carousel/pgcc-5.jpg";
import PGCC6 from "../../../assets/mission-carousel/pgcc-6.jpg";
import PGCC7 from "../../../assets/mission-carousel/pgcc-7.jpg";
import PGCC8 from "../../../assets/mission-carousel/pgcc-8.jpg";

import { missionContentParaList } from "../../../pgccConstants";

const imageList = [PGCC1, PGCC2, PGCC3, PGCC4, PGCC5, PGCC6, PGCC7, PGCC8];

const MissionCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetAutoScroll = () => {
    stopAutoScroll();
    startAutoScroll();
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
    resetAutoScroll();
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    resetAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold text-center">Our Mission</h2>
      <div className="relative w-full max-w-5xl my-4 mx-auto p-4">
        <div className="relative">
          <div
            className="w-full h-96 bg-cover bg-center overflow-auto rounded-lg shadow-md transition-transform duration-700 ease-in-out transform"
            style={{
              backgroundImage: `url(${imageList[currentImageIndex]})`,
              transform: `none`,
            }}
          >
            <div className="bg-gradient-to-br from-cello to-transparent h-96 max-w-5xl">
              <div className="p-4 text-white max-w-2xl">
                {missionContentParaList.map((missionContentPara) => {
                  return (
                    <>
                      <p className="md:text-lg xxs:text-xs">
                        {missionContentPara}
                      </p>
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 justify-between">
          <button
            className="text-white bg-black bg-opacity-50 rounded-full w-8 h-8"
            onClick={goToPrevious}
          >
            &#8249;
          </button>
          <button
            className="text-white bg-black bg-opacity-50 rounded-full w-8 h-8"
            onClick={goToNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
};

export default MissionCarousel;
