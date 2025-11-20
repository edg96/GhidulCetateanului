import "./App.css";
import "./assets/css/base.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/herosection/HeroSection";
import { OverviewSection } from "./components/features/OverviewSection";
import { RepresentativesSection } from "./components/politicians/RepresentativesSection";
import { InstitutionsSection } from "./components/institutions/InstitutionsSection";

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
    </>
  );
}

export default App;
