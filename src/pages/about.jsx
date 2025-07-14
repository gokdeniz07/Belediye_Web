import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t("about.title")}</h1>
      <p className="text-lg leading-relaxed text-gray-700" style={{ whiteSpace: "pre-line" }}>
        {t("about.description")}
      </p>
    </div>
  );
};

export default About;
