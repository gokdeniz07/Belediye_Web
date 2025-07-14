import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.884046172576!2d32.00091002619793!3d36.541934859943694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc9900490917f3%3A0x837fbdd3dca6e03d!2sAlanya%20Belediyesi%20Sosyal%20Tesisleri%20%C4%B0skele%20%C3%87ay%20Bah%C3%A7esi!5e0!3m2!1str!2str!4v1752232229005!5m2!1str!2str", 
  2: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d200.33482068063793!2d31.996744304304446!3d36.54550103118848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d36.546224699999996!2d31.9965665!4m5!1s0x14dc98793940c325%3A0x60b26d63513088ea!2s%C5%9Eekerhane%2C%20%C5%9Eevket%20Toku%C5%9F%20Cd.%20No%3A64%2C%2007400%20Alanya%2FAntalya!3m2!1d36.5474238!2d31.996797599999997!5e0!3m2!1str!2str!4v1752232513720!5m2!1str!2str", 
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

      {/* Görseller */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${title} - ${i + 1}`} className="rounded-lg shadow-md w-full h-60 object-cover" />
        ))}
      </div>

      <p className="text-lg">{description}</p>

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