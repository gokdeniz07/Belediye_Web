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
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#003B59]">
        {t('meals.title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {meals?.length > 0 &&
          meals.map((meal, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleImageClick(meal)}
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-12">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-[#003B59] group-hover:text-[#004d73] transition-colors duration-300">
                  {meal.name}
                </h3>
              </div>
            </div>
          ))}
      </div>

      {/* Büyük Görsel Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-4xl w-full mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>              <div className="bg-gradient-to-b from-gray-50 to-white w-full h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-full h-full object-contain"
                />
              </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white p-6">
                {selectedImage.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yemekler;
