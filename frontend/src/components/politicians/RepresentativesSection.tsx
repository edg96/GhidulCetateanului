import "./RepresentativesSection.css";
import { Representatives } from "./Representatives";

export type PoliticiansType = "deputies" | "senators";

export function RepresentativesSection() {
  return (
    <section className="representatives-section">
      <div className="representatives-section__header">
        <h1 className="representatives-section__title">
          Parlamentarii Romaniei pe Partide Politice
        </h1>
        <p className="representatives-section__description">
          Graficele de mai jos prezinta distributia parlamentarilor pe partide
          politice in cadrul Camerei Deputatilor și Senatului, conform datelor
          disponibile in baza de date. Bara verticala indica numarul total de
          membri pentru fiecare partid, iar diagrama circulara evidentiaza
          proportia acestora in totalul institutiei.
        </p>
      </div>
      <div className="representatives-section__charts">
        <Representatives politiciansType="deputies" />
        <Representatives politiciansType="senators" />
      </div>
      <div className="representatives-section__cta">
        <h2>
          Consulta lista completa a politicienilor romani, organizata pe
          partide, cu linkuri catre profilurile individuale ale fiecarui
          reprezentant.
        </h2>
        <button className="btn">Vezi Lista Politcienilor</button>
      </div>
    </section>
  );
}
