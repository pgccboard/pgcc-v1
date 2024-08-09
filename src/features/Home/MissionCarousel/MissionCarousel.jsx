// Carousel.jsx
import React, { useEffect, useRef, useState } from "react";

import PGCC1 from "../../../assets/pgcc-1.jpg";
import PGCC2 from "../../../assets/pgcc-2.jpg";
import PGCC3 from "../../../assets/pgcc-3.jpg";
import PGCC4 from "../../../assets/pgcc-4.jpg";
import PGCC5 from "../../../assets/pgcc-5.jpg";
import PGCC6 from "../../../assets/pgcc-6.jpg";

const title = "Our Mission";

const contentPara1 = `Penn Graduate Consulting Club (PGCC) is one of the largest student-run consulting
              clubs for non-MBA graduate students (PhDs, MDs, JDs, master's, etc.) and post-docs at
              the University of Pennsylvania. The mission of PGCC is to educate the community about
              the consulting industry and to help advanced degree candidates prepare for a career in
              consulting.`;

const contentPara2 = `PGCC currently has 500+ members and a strong impact on the broader Penn Community.
              More than 80% of our members show great passion for a consulting career, and more than
              200 members will be applying for full-time jobs or internships in the next recruiting
              cycle.`;

const imageList = [PGCC1, PGCC2, PGCC3, PGCC4, PGCC5, PGCC6];

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
      <h2 className="text-4xl font-bold text-center">{title}</h2>
      <div className="relative w-full max-w-5xl my-4 mx-auto p-4">
        <div className="relative">
          <div
            className="w-full h-96 bg-cover bg-center overflow-auto rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${imageList[currentImageIndex]})`,
              transform: `none`,
            }}
          >
            <div className="bg-gradient-to-br from-cello to-transparent h-96 max-w-5xl">
              <div className="p-4 text-white max-w-2xl">
                <p className="md:text-lg xxs:text-xs">{contentPara1}</p>
                <br />
                <p className="md:text-lg xxs:text-xs">{contentPara2}</p>
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
