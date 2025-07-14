import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const menus = [
  { title: "İskele Çay Bahçesi", file: "/data/menu1.pdf" },
  { title: "Hacı Karanfil Kafe", file: "/data/menu2.pdf" },
  { title: "Tevfik Hoca Alanya Evi", file: "/data/menu3.pdf" },
  { title: "Belediye Kafe", file: "/data/menu4.pdf" },
  { title: "Mutfak Kültür Evi", file: "/data/menu5.pdf" },
];

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#003B59] text-center">Menülerimiz</h1>
      <ul className="space-y-4">
        {menus.map((menu, i) => (
          <li
            key={i}
            className="flex items-center justify-between bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition"
          >
            <span className="text-lg">{menu.title}</span>
            <a
              href={menu.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 text-2xl"
            >
              <FaFilePdf />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
