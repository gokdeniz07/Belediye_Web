import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855.8790978920402!2d31.993234436388118!3d36.555635324026674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc98803bf069df%3A0x6218aedec7299ab1!2zRcWfZ2lsaWsgRMO8xJ_DvG4gU2Fsb251!5e0!3m2!1str!2str!4v1752232801061!5m2!1str!2str", //eşgilik
  2: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d274.4946186028629!2d31.984265418113285!3d36.5551950968328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zRMO8xJ_DvG4gU2Fsb251!5e0!3m2!1str!2str!4v1751965644184!5m2!1str!2str", //şoför
  3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.57860088321814!2d32.04949661193214!3d36.56306210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc990018e591d9%3A0x1ab7385852dada7e!2zQWxhbnlhIEJlbGVkaXllc2kgw4fEsXBsYWtsxLEgRMO8xJ_DvG4gU2Fsb251!5e0!3m2!1str!2str!4v1751965725341!5m2!1str!2str", //çıplaklı
  4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.3771873180529!2d31.870514749598694!3d36.60188760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca5634e1a4cc9%3A0x322bfa43b5d7d0db!2sAlanya%20Belediyesi%20Konakl%C4%B1%20K%C3%BClt%C3%BCr%20Merkezi!5e0!3m2!1str!2str!4v1751965825652!5m2!1str!2str", //konaklı
  5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.2619271961076!2d32.19426444959869!3d36.43107539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc8f76144f733b%3A0x2111fac65c698c67!2zRGVtaXJ0YcWfIGTDvMSfw7xuIHNhbG9udQ!5e0!3m2!1str!2str!4v1751965878232!5m2!1str!2str", //demirtaş
  6: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d17924.603154489312!2d32.247449500901624!3d36.43974095294048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2sAlanya%2C%20Antalya!3m2!1d36.544443!2d31.995407999999998!4m3!3m2!1d36.4380337!2d32.264708999999996!5e0!3m2!1str!2str!4v1751966119141!5m2!1str!2str", //çamlıca
  7: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d708.3419645304573!2d31.72919363710811!3d36.64239642254457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2sAlanya%2C%20Antalya!3m2!1d36.544443!2d31.995407999999998!4m3!3m2!1d36.642593399999996!2d31.7299993!5e0!3m2!1str!2str!4v1751966747720!5m2!1str!2str", //incekum
  8: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d840.4029643042098!2d32.070654295041244!3d36.50943543375117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2sAlanya%2C%20Antalya!3m2!1d36.544443!2d31.995407999999998!4m3!3m2!1d36.509648999999996!2d32.0714767!5e0!3m2!1str!2str!4v1751966882259!5m2!1str!2str", //kestel 
  9: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d457.1882360996526!2d31.89047525391962!3d36.678985395885384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x14dca73f8b06183f%3A0x4332fcf04043bd2f!2zR8O8bmV5IChIw7xkZG_En2x1KSBEw7zEn8O8biBTYWxvbnUsIEfDvG5leSwgR8O8emVsYmHEnyBQYXlhbGxhciBZb2x1LCBBbGFueWEvQW50YWx5YQ!3m2!1d36.6792511!2d31.8905133!4m3!3m2!1d36.509648999999996!2d32.0714767!5e0!3m2!1str!2str!4v1751972775522!5m2!1str!2str", //güney 
  10: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1064.062675390443!2d32.03603249770356!3d36.545122817538896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc98fe6a229b7f%3A0x77d58c700280491f!2zQ2lrY2lsbGkgRMO8xJ_DvG4gU2FyYXnEsSBTYWxvbnU!5e0!3m2!1str!2str!4v1751972848521!5m2!1str!2str", //cikcilli 
  11: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.7732758646275!2d31.988623319475085!3d36.54487257259396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca29cc1354979%3A0x85d9ae536bef6e3d!2sAlanya%20Belediyesi%20Nikah%20Salonu!5e0!3m2!1str!2str!4v1751972937654!5m2!1str!2str", //nikah
};

const OrganizationDetail = () => {
  const { id } = useParams();

  // Görsel isimlerini burada oluşturuyoruz (varsayılan 3 görsel)
  const imageList = [
    `/photo/org${id}.1.jpg`,
    `/photo/org${id}.2.jpg`,
    `/photo/org${id}.3.jpg`
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4"> </h1>
      <p className="mb-6">Etkinlik mekanı hakkında detaylı bilgiler burada gösterilecek.</p>

      {/* Görseller */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Salon ${id} Görsel ${index + 1}`}
            className="w-full h-64 object-cover rounded shadow"
          />
        ))}
      </div>

      {/* Harita */}
      <iframe
        src={maps[id]}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Salon ${id} Harita`}
        className="rounded shadow"
      ></iframe>
    </div>
  );
};

export default OrganizationDetail;