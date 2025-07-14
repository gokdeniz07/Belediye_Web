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
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Davet & Organizasyon</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {organizationList.map((item) => (
          <div className="card border rounded shadow" key={item.id}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body p-4">
              <h5 className="card-title text-xl font-semibold">{item.name}</h5>
              <p className="card-text text-gray-600">{item.description}</p>
              <Link
                to={`/organization/${item.id}`}
                className="btn btn-primary mt-2"
              >
                Detaylar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organization;
