import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAllFacilities } from "../admin/services/adminApi";

const Facilities = () => {
  const { t } = useTranslation();
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        setLoading(true);
        const data = await getAllFacilities();
        setFacilities(data);
        setError(null);
      } catch (error) {
        console.error("Tesisler yüklenirken hata:", error);
        setError(error.message || "Tesisler yüklenirken bir hata oluştu");
        setFacilities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-lg text-gray-600">{t("loading")}</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-red-600">{error}</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#003B59] mb-8">{t("tesisler")}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Link
            key={facility.id}
            to={`/facilities/${facility.id}`}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
              {facility.images?.card ? (
                <img
                  src={facility.images.card}
                  alt={facility.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{t("noImage")}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#003B59] mb-2 group-hover:text-[#004d73] transition-colors">
                {facility.name}
              </h2>
              <p className="text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors">
                {facility.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
