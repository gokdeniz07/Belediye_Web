import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      id: 1,
      image: "/photo/tesis1.jpg",
    },
    {
      id: 2,
      image: "/photo/tesis2.jpg",
    },
    {
      id: 3,
      image: "/photo/tesis3.jpg",
    },
    {
      id: 4,
      image: "/photo/tesis4.jpg",
    },
    {
      id: 5,
      image: "/photo/tesis5.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#003B59] relative">
        <span className="relative inline-block">
          {t("facilities.title")}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#003B59] rounded-full"></div>
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <Link 
            to={`/facility/${facility.id}`}
            key={facility.id}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden">
              <img 
                src={facility.image} 
                alt={t(`facilities.${facility.id}.name`)}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform">
                {t(`facilities.${facility.id}.name`)}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-white/90 transform group-hover:-translate-y-1 transition-transform delay-100">
                <span className="text-sm font-medium">Detaylar</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
