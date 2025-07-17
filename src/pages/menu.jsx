import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/pageLayout";

const Menu = () => {
  const { t } = useTranslation();

  const menus = [
    { id: 1, pdf: "/data/menu1.pdf", title: "Kahvaltı Menüsü", image: "/photo/menu.jpg", description: "Güne güzel bir başlangıç için kahvaltı menümüzü inceleyin." },
    { id: 2, pdf: "/data/menu2.pdf", title: "Öğle Yemeği Menüsü", image: "/photo/menu.jpg", description: "Günün en özel öğününde sizler için hazırladığımız lezzetler." },
    { id: 3, pdf: "/data/menu3.pdf", title: "Akşam Yemeği Menüsü", image: "/photo/menu.jpg", description: "Günü güzel bir akşam yemeği ile sonlandırın." },
    { id: 4, pdf: "/data/menu4.pdf", title: "Özel Menü", image: "/photo/menu.jpg", description: "Özel günleriniz için hazırladığımız menüler." },
    { id: 5, pdf: "/data/menu5.pdf", title: "İçecek Menüsü", image: "/photo/menu.jpg", description: "Yemeklerinize eşlik edecek içecekler." }
  ];

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#003B59] tracking-tight">
          {t('menu.title')}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {menus.map((menu) => (
            <div
              key={menu.id}
              onClick={() => window.open(menu.pdf, '_blank')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row cursor-pointer transform hover:-translate-y-1"
            >
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 bg-[#003B59] opacity-0 hover:opacity-20 transition-opacity duration-300" />
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "250px" }}
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-semibold text-[#003B59] mb-4">
                    {menu.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{menu.description}</p>
                </div>
                <div className="mt-auto">
                  <button className="bg-[#003B59] text-white px-6 py-2 rounded-lg hover:bg-[#004466] transition-colors duration-300 inline-flex items-center gap-2">
                    <span>Menüyü Görüntüle</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </PageLayout>
  );
};

export default Menu;
