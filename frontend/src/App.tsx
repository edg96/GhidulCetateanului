import "./App.css";
import "./assets/css/base.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/herosection/HeroSection";
import { OverviewSection } from "./components/features/OverviewSection";
import { RepresentativesSection } from "./components/representatives/RepresentativesSection";
import { InstitutionsSection } from "./components/institutions/InstitutionsSection";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/about-us/AboutUs";
import { FakeNews } from "./components/fake-news/FakeNews";
import { SingUp } from "./components/sing-up/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OverviewSection />
              <RepresentativesSection />
              <InstitutionsSection />
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fake-news" element={<FakeNews />} />
        <Route path="/sing-up" element={<SingUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
