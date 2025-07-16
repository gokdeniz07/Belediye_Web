
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: "/photo/slider1.jpg", title: "Sosyal Tesislerimiz" },
    { image: "/photo/slider2.jpg", title: "Modern Mekanlar" },
    { image: "/photo/slider3.jpg", title: "Kaliteli Hizmet" },
    { image: "/photo/slider4.jpg", title: "Eşsiz Lezzetler" },
    { image: "/photo/slider5.jpg", title: "Özel Etkinlikler" },
    { image: "/photo/slider6.jpg", title: "Unutulmaz Anlar" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

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

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-[750px] w-full overflow-hidden group bg-[#003B59]">
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
      <div className="relative h-full max-w-7xl mx-auto px-4">
        {/* Current Slide */}
        <div className="h-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className={`w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out ${
                isTransitioning ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-white text-4xl font-bold tracking-wider">
                {slides[currentSlide].title}
              </h2>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-4 rounded-2xl backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-[#003B59]/70 hover:shadow-lg transform -translate-x-2 group-hover:translate-x-0"
        >
          <ArrowBigLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-4 rounded-2xl backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-[#003B59]/70 hover:shadow-lg transform translate-x-2 group-hover:translate-x-0"
        >
          <ArrowBigRight className="w-8 h-8" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 
