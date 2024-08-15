import "./App.css";
import { useTheme } from "./components/context/ThemeProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/home/HomePage";

function App() {
  const { isDarkMode } = useTheme();
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
