import React, { useState } from "react";
import meals from "../data/yemekler";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/pageLayout";

const Yemekler = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (meal) => {
    setSelectedImage(meal);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#003B59] tracking-tight">
          {t('meals.title')}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 sm:gap-2">
        {meals?.length > 0 &&
          meals.map((meal, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1 cursor-pointer touch-manipulation"
              onClick={() => handleImageClick(meal)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#003B59]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-sm sm:text-base font-bold text-white text-shadow truncate">
                    {meal.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Responsive Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500" />
          <div 
            className="relative w-full h-full bg-white overflow-hidden shadow-2xl transform transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 z-50 bg-black/50 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:rotate-90 touch-manipulation"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full bg-gradient-to-b from-gray-50 to-white">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {selectedImage.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Yemekler;
