import { useLanguage } from "./hooks/useLanguage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import CarInspection from "./components/CarInspection";
import CheckItems from "./components/CheckItems";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        t={t}
      />
      <Hero t={t} />
      <AboutUs t={t} />
      <Services t={t} />
      <Pricing t={t} />
      <CarInspection t={t} />
      <CheckItems t={t} />
      <Gallery t={t} />
      <Contact t={t} />
    </div>
  );
}

export default App;
