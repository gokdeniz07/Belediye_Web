import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import PageLayout from "../components/pageLayout";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: "/photo/slider1.jpg" },
    { image: "/photo/slider2.jpg" },
    { image: "/photo/slider3.jpg" },
    { image: "/photo/slider4.jpg" },
    { image: "/photo/slider5.jpg" },
    { image: "/photo/slider6.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <PageLayout>
      <div className="h-[calc(100vh-12rem)] w-full overflow-hidden group bg-[#003B59]">
        {/* Slide Background with Blur */}
        <div
          className="absolute inset-0 transition-transform duration-[1.5s] ease-out scale-110"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            opacity: '0.3',
            transform: `scale(1.1)`,
          }}
        />

        {/* Main Slider */}
        <div className="relative h-full w-full">
          {/* Current Slide */}
          <div className="h-full flex items-center justify-center">
            <div className="relative w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] aspect-[16/9] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className={`w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out ${
                  isTransitioning ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-white text-shadow">
                  {slides[currentSlide].title}
                </h2>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 sm:p-3 md:p-4 rounded-r-xl backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:bg-[#003B59]/70 hover:shadow-lg transform hover:scale-105 touch-manipulation"
          >
            <KeyboardArrowLeft sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 40 } }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 sm:p-3 md:p-4 rounded-l-xl backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:bg-[#003B59]/70 hover:shadow-lg transform hover:scale-105 touch-manipulation"
          >
            <KeyboardArrowRight sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 40 } }} />
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
