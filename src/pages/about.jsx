import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    { src: "./photo/tesis1.jpg" },
    { src: "./photo/tesis2.jpg" },
    { src: "./photo/tesis3.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#003B59] mb-8">
            {t("about.title")}
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8 relative">
            {/* Decorative Element */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003B59] to-transparent rounded-full opacity-20"></div>
            
            {/* Mission Section */}
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#003B59] mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-[#003B59] opacity-10"></span>
                {t("about.mission_title", "Misyonumuz")}
              </h3>
              <div className="pl-11">
                <p className="text-lg leading-relaxed text-gray-700 bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                  {t("about.mission")}
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#003B59] mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-[#003B59] opacity-10"></span>
                {t("about.vision_title", "Vizyonumuz")}
              </h3>
              <div className="pl-11">
                <p className="text-lg leading-relaxed text-gray-700 bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                  {t("about.vision")}
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-[#003B59] mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-[#003B59] opacity-10"></span>
                {t("about.values_title", "Değerlerimiz")}
              </h3>
              <div className="pl-11">
                <p className="text-lg leading-relaxed text-gray-700 bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                  {t("about.values")}
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 gap-4 sticky top-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-white ${
                  index === 2 ? "col-span-2" : ""
                }`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
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
              </button>
              <div className="bg-gradient-to-b from-gray-50 to-white w-full h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
