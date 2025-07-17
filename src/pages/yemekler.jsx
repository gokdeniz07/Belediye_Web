import React, { useState } from "react";
import meals from "../data/yemekler";
import { useTranslation } from "react-i18next";

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center text-[#003B59] tracking-tight">
          {t('meals.title')}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {meals?.length > 0 &&
            meals.map((meal, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleImageClick(meal)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#003B59]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl font-bold text-white text-shadow">
                    {meal.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>

        {/* Modern Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500" />
            <div 
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:rotate-90"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative bg-gradient-to-b from-gray-50 to-white">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-full h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white tracking-wide">
                      {selectedImage.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Yemekler;
