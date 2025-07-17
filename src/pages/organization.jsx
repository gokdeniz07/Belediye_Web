import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/pageLayout";

const Organization = () => {
  const { t } = useTranslation();
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetch('/data/organizations.json')
      .then(response => response.json())
      .then(data => setOrganizations(data))
      .catch(error => console.error('Error loading organizations:', error));
  }, []);

  return (
    <PageLayout>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-4 text-center text-[#003B59] tracking-tight">
        {t('organization.title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
        {organizations.map((org) => (
          <Link
            to={`/organization/${org.id}`}
            key={org.id}
            className="group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1 cursor-pointer touch-manipulation"
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={org.image}
                alt={org.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#003B59]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {org.name}
                  </h2>
                  {org.description && (
                    <p className="text-xs sm:text-sm text-white/90 mt-1 line-clamp-2">
                      {org.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Organization;
