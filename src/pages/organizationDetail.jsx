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
  const { t } = useTranslation();

  const [activeImage, setActiveImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const mapUrl = maps[id];

  // Görsel isimlerini burada oluşturuyoruz (varsayılan 3 görsel)
  const imageList = [
    `/photo/org${id}.1.jpg`,
    `/photo/org${id}.2.jpg`,
    `/photo/org${id}.3.jpg`
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Ana Görsel ve Galeri */}
          <div className="relative aspect-video">
            <img
              src={imageList[activeImage]}
              alt={`Salon ${id} Ana Görsel`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {imageList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeImage === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Bilgiler */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl font-bold text-[#003B59] mb-4">
                  {`${id}. Salon`}
                </h1>
                <p className="text-gray-600 mb-6">
                  Alanya Belediyesi'nin modern ve konforlu düğün salonlarından biri.
                  Geniş kapasitesi ve merkezi konumu ile sizin için ideal mekan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Alanya, Antalya</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Kapasite: 500 Kişi</span>
                  </div>
                </div>
              </div>

              {/* Harita */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Salon ${id} Harita`}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Özellikler */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#003B59] mb-4">Salon Özellikleri</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Klima', 'Otopark', 'Ses Sistemi', 'Projeksiyon', 'Mutfak', 'Güvenlik', 'Wi-Fi', 'Vestiyer'].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* İletişim Butonu */}
            <div className="mt-8">
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto bg-[#003B59] text-white px-8 py-3 rounded-lg hover:bg-[#004466] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Rezervasyon İçin İletişime Geçin</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetail;