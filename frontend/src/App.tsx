import "./App.css";
import "./assets/css/base.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/herosection/HeroSection";
import { OverviewSection } from "./components/features/OverviewSection";
import { RepresentativesSection } from "./components/politicians/RepresentativesSection";
import { InstitutionsSection } from "./components/institutions/InstitutionsSection";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <OverviewSection />
      <RepresentativesSection />
      <InstitutionsSection />
      <Footer />
    </>
  );
}

export default App;
