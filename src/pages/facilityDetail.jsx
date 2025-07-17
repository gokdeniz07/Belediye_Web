import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.884046172576!2d32.00091002619793!3d36.541934859943694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc9900490917f3%3A0x837fbdd3dca6e03d!2sAlanya%20Belediyesi%20Sosyal%20Tesisleri%20%C4%B0skele%20%C3%87ay%20Bah%C3%A7esi!5e0!3m2!1str!2str!4v1752232229005!5m2!1str!2str", 
  2: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d335.75458071562724!2d31.996931467968885!3d36.54558162528267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1752675651997!5m2!1str!2str", 
  3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.1271434788536!2d31.99622185436022!3d36.5487905750325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc99cab529996d%3A0xf4134a36026cdb1!2sTevfik%20Hoca%20Alanya%20Evi!5e0!3m2!1str!2str!4v1752232568589!5m2!1str!2str", 
  4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.8994352172502!2d32.0358435762297!3d36.5422428162901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc987abc4ecf8d%3A0xa569368226e96c68!2sAlanya%20Belediyesi!5e0!3m2!1str!2str!4v1752232671960!5m2!1str!2str", 
  5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.82277930247807!2d31.99390394586651!3d36.53359424970403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc997e1f97fa15%3A0x90a2b227df78b9ed!2zTXV0ZmFrIEvDvGx0w7xyw7wgRXZp!5e0!3m2!1str!2str!4v1752232723185!5m2!1str!2str", 
 }


const FacilityDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const mapSrc = maps[id];
  const title = t(`facilities.${id}.title`);
  const description = t(`facilities.${id}.description`);

  const images = [1, 2, 3].map(
    (n) => `/photo/slider${id}-${n}.jpg`
  );

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">

      {/* Hero Section with Main Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl mb-6">
        <img
          src={images[0]}
          alt={`${title} - Ana Görsel`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4"></h1>
          <p className="text-lg text-white/90 max-w-3xl"></p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {images.map((src, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={src}
              alt={`${title} - ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">
                    {t(`facilities.${id}.gallery.${i + 1}`, `Görsel ${i + 1}`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description & Details */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-[#003B59] mb-4">Tesis Hakkında</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Harita */}
      {mapSrc && (
        <div>
          <iframe
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${title} Harita`}
            className="rounded shadow"
          />
        </div>
      )}
    </div>
  );
};

export default FacilityDetail;