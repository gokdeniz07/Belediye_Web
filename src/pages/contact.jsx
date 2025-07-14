import React from "react";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const items = [
    {
      icon: <FaMapMarkerAlt className="text-lg text-gray-700" />,
      label: "Konum: Google Haritalar",
      link: "https://maps.app.goo.gl/PHZm26pDAgHdbeQ87",
    },
    {
      icon: <FaInstagram className="text-lg text-pink-500" />,
      label: "instagram.com/alanyabld",
      link: "https://www.instagram.com/alanyabld",
    },
    {
      icon: <FaYoutube className="text-lg text-red-500" />,
      label: "YouTube Kanalı",
      link: "https://www.youtube.com/channel/UC9s4YdggnW2X-UYo1U0qgvg",
    },
    {
      icon: <FaTwitter className="text-lg text-blue-400" />,
      label: "x.com/alanyabld",
      link: "https://x.com/alanyabld",
    },
    {
      icon: <FaFacebook className="text-lg text-blue-600" />,
      label: "facebook.com/alanyabelediyesi",
      link: "https://www.facebook.com/alanyabelediyesi",
    },
    {
      icon: <FaPhone className="text-lg text-green-600" />,
      label: "444 82 07 - Çözüm Masası",
      link: "tel:4448207",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#003B59]">İletişim</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white shadow-md rounded-lg px-6 py-4 hover:shadow-lg transition"
          >
            <span className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-800 text-sm sm:text-base">{item.label}</span>
            </span>
            <span className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 5v6h6v2h-8V5h2zm1 11h-4v2h4v-2z" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
