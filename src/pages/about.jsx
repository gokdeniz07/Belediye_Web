import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/pageLayout";

const About = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#003B59] tracking-tight">
          {t('about.title')}
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#003B59]">
                  {t('about.mission.title')}
                </h3>
                <p className="text-gray-700">
                  {t('about.mission.description')}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#003B59]">
                  {t('about.vision.title')}
                </h3>
                <p className="text-gray-700">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="/photo/tesis1.jpg"
                alt="Tesis"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/photo/tesis2.jpg"
                alt="Tesis"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
