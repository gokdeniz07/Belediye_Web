import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ["tr", "en"],
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/data/ceviriler/{{lng}}.json", // Türkçe klasör ismi
    },
  });

export default i18n;
