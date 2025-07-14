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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <div key={facility.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={facility.image}
                alt={t(`facilities.${facility.id}.title`)}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {t(`facilities.${facility.id}.name`)}
              </h3>
              <Link
                to={`/facility/${facility.id}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#003B59] text-white rounded-lg transition-colors duration-200 hover:bg-[#004d73] transform hover:scale-105"
              >
                <span>{t("facilities.details")}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
