import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllFacilities } from '../admin/services/adminApi';

const FacilityDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const facilities = await getAllFacilities();
        const foundFacility = facilities.find(f => f.id === id);
        
        if (foundFacility) {
          setFacility(foundFacility);
          setError(null);
        } else {
          setError(t('facilityNotFound'));
        }
      } catch (error) {
        console.error('Error loading facility details:', error);
        setError(t('errorLoadingFacility'));
      } finally {
        setLoading(false);
      }
    };

    fetchFacility();
  }, [id, t]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-lg text-gray-600">{t('loading')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg text-gray-600">{t('facilityNotFound')}</div>
      </div>
    );
  }

  // Galeri için görselleri hazırla (card görselini hariç tut)
  const images = [];
  if (facility.images) {
    if (facility.images.main) images.push(facility.images.main);
    if (facility.images.second) images.push(facility.images.second);
    if (facility.images.third) images.push(facility.images.third);
  }

  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-8">
      {/* Tesis Başlığı */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#003B59] mb-8">{facility.name}</h1>

      {/* Görsel Galerisi */}
      <section className={`relative mb-8 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
        <div className={`aspect-w-16 aspect-h-9 mb-4 ${isFullscreen ? 'h-screen' : ''}`}>
          {images.length > 0 ? (
            <div className="relative group" onClick={handleImageClick}>
              <img
                src={images[activeImage]}
                alt={`${facility.name} - ${activeImage + 1}`}
                className={`w-full h-full object-contain rounded-lg cursor-pointer 
                  ${isFullscreen ? 'max-h-screen' : 'object-cover'}`}
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 
                             bg-black/50 text-white p-2 rounded-r opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                    aria-label="Previous image"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 
                             bg-black/50 text-white p-2 rounded-l opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                    aria-label="Next image"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">{t('noImage')}</span>
            </div>
          )}
        </div>

        {/* Küçük Görseller */}
        {!isFullscreen && images.length > 1 && (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-w-16 aspect-h-9 transition-all duration-300 transform hover:scale-105
                  ${activeImage === index ? 'ring-2 ring-[#003B59] scale-105' : ''}`}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${facility.name} - ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Tesis Detayları */}
      <section className="space-y-8">
        {/* Açıklama */}
        <div>
          <h2 className="text-2xl font-semibold text-[#003B59] mb-3">{t("description")}</h2>
          <p className="text-gray-700 whitespace-pre-line">{facility.description}</p>
        </div>

        {/* Adres */}
        {facility.address && (
          <div>
            <h2 className="text-2xl font-semibold text-[#003B59] mb-3">{t("address")}</h2>
            <p className="text-gray-700">{facility.address}</p>
          </div>
        )}

        {/* Harita */}
        {facility.mapEmbed && (
          <div>
            <h2 className="text-2xl font-semibold text-[#003B59] mb-3">{t("location")}</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={facility.mapEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${facility.name} ${t("location")}`}
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default FacilityDetail;
