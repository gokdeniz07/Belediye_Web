import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const organizationList = [
  {
    id: 1,
    name: "Eşgilik Düğün Salonu",
    description: "Geniş kapasitesiyle muhteşem düğünler için ideal.",
    image: "/photo/org1.jpg"
  },
  {
    id: 2,
    name: "Şoförler Odası Düğün Salonu",
    description: "Doğayla iç içe şık bir mekan.",
    image: "/photo/org2.jpg"
  },
  {
    id: 3,
    name: "Çıplaklı Düğün Salonu",
    description: "Şehir merkezinde kolay ulaşım imkanı.",
    image: "/photo/org3.jpg"
  },
  {
    id: 4,
    name: "Konaklı Düğün Salonu",
    description: "Deniz manzaralı, ferah bir atmosfer.",
    image: "/photo/org4.jpg"
  },
  {
    id: 5,
    name: "Demirtaş Düğün Salonu",
    description: "Kır düğünleri için mükemmel bir seçenek.",
    image: "/photo/org5.jpg"
  },
  {
    id: 6,
    name: "Çamlıca Düğün Salonu",
    description: "Modern mimarisiyle fark yaratan salon.",
    image: "/photo/org6.jpg"
  },
  {
    id: 7,
    name: "İncekum Düğün Salonu",
    description: "Özel organizasyonlar için prestijli bir alan.",
    image: "/photo/org7.jpg"
  },
  {
    id: 8,
    name: "Kestel Düğün Salonu",
    description: "Farklı konseptlerde etkinlikler için uygun alan.",
    image: "/photo/org8.jpg"
  },
  {
    id: 9,
    name: "Güney Düğün Salonu",
    description: "Farklı konseptlerde etkinlikler için uygun alan.",
    image: "/photo/org9.jpg"
  },
  {
    id: 10,
    name: "Cikcilli Düğün Salonu",
    description: "Farklı konseptlerde etkinlikler için uygun alan.",
    image: "/photo/org10.jpg"
  },
  {
    id: 11,
    name: "Belediye Nikah Salonu",
    description: "Farklı konseptlerde etkinlikler için uygun alan.",
    image: "/photo/org11.jpg"
  }
];

const Organization = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#003B59] relative">
        <span className="relative inline-block">
          {t("organization.title")}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#003B59] rounded-full"></div>
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizationList.map((item) => (
          <Link 
            to={`/organization/${item.id}`}
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 transform group-hover:-translate-y-1 transition-transform">
                {item.name}
              </h3>
              <p className="text-gray-200 transform group-hover:-translate-y-1 transition-transform delay-75">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-white/90 transform group-hover:-translate-y-1 transition-transform delay-100">
                <span className="text-sm font-medium">{t("organization.viewDetails")}</span>
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

export default Organization;
