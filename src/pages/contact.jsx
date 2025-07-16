import React from "react";
import {
  LocationOn,
  Instagram,
  YouTube,
  Twitter,
  Facebook,
  Phone,
  Email,
  AccessTime,
} from "@mui/icons-material";

const Contact = () => {
  const items = [
    {
      icon: <LocationOn sx={{ fontSize: 24, color: '#374151' }} />,
      label: "Konum: Google Haritalar",
      link: "https://maps.app.goo.gl/PHZm26pDAgHdbeQ87",
    },
    {
      icon: <Instagram sx={{ fontSize: 24, color: '#ec4899' }} />,
      label: "instagram.com/alanyabld",
      link: "https://www.instagram.com/alanyabld",
    },
    {
      icon: <YouTube sx={{ fontSize: 24, color: '#ef4444' }} />,
      label: "YouTube Kanalı",
      link: "https://www.youtube.com/channel/UC9s4YdggnW2X-UYo1U0qgvg",
    },
    {
      icon: <Twitter sx={{ fontSize: 24, color: '#60a5fa' }} />,
      label: "x.com/alanyabld",
      link: "https://x.com/alanyabld",
    },
    {
      icon: <Facebook sx={{ fontSize: 24, color: '#2563eb' }} />,
      label: "facebook.com/alanyabelediyesi",
      link: "https://www.facebook.com/alanyabelediyesi",
    },
    {
      icon: <Phone sx={{ fontSize: 24, color: '#16a34a' }} />,
      label: "444 82 07 - Çözüm Masası",
      link: "tel:4448207",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#003B59]">
        İletişim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                {React.cloneElement(item.icon, { 
                  className: `text-2xl ${item.icon.props.className}` 
                })}
              </div>
              <div className="flex-1">
                <span className="block text-lg font-medium text-gray-900 group-hover:text-[#003B59] transition-colors">
                  {item.label}
                </span>
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-[#003B59]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003B59] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
