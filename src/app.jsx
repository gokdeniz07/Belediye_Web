import React from "react";
import Header from "./components/header";
import AppRoutes from "./routes";
import Footer from "./components/footer";
import { useTranslation } from "react-i18next";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
