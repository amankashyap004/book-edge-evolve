import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import { useTheme } from "./components/context/ThemeProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/home/HomePage";

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const aosAnimation = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        anchorPlacement: "top-bottom",
      });
    };
    aosAnimation();
  }, []);
  
  return (
    <main
      className={
        isDarkMode
          ? "bg-gradient-to-br from-[#1e0533] to-[#110a1f] text-white"
          : "bg-white text-black"
      }
    >
      <Header />
      <div className="pt-16 lg:pt-20"></div>
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;
