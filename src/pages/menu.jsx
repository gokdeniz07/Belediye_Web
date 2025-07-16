import React from "react";
import { useTranslation } from "react-i18next";
import { PictureAsPdf, MenuBook } from "@mui/icons-material";

const menus = [
  { title: "İskele Çay Bahçesi", file: "/data/menu1.pdf" },
  { title: "Hacı Karanfil Kafe", file: "/data/menu2.pdf" },
  { title: "Tevfik Hoca Alanya Evi", file: "/data/menu3.pdf" },
  { title: "Belediye Kafe", file: "/data/menu4.pdf" },
  { title: "Mutfak Kültür Evi", file: "/data/menu5.pdf" },
];

const Menu = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#003B59]">
        {t("menu.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menus.map((menu, i) => (
          <a
            key={i}
            href={menu.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#003B59] transition-colors">
                  {menu.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">Menüyü görüntülemek için tıklayın</p>
              </div>
              <div className="ml-4 transform transition-transform duration-300 group-hover:scale-110">
                <PictureAsPdf sx={{ fontSize: 36, color: '#dc2626' }} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
