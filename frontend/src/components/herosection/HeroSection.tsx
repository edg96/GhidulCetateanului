import "./HeroSection.css";
import "../../assets/css/utilities.css";
import img1 from "../../assets/images/hero/undraw_choose_5kz4.svg";
import img2 from "../../assets/images/hero/undraw_verify-data_k0y1.svg";
import img3 from "../../assets/images/hero/undraw_respond_o54z.svg";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__stack">
          <h1 className="hero__stack-heading">Alegere informată</h1>
          <h3 className="hero__stack-title">
            Alegerile bune se construiesc pe înțelegere, nu pe rumoare.
          </h3>
          <p className="hero__stack-description">
            Într-o lume plină de opinii, zvonuri și mesaje contradictorii, ai
            nevoie de informație clară și echilibrată pentru a decide ce crezi
            și ce alegi. Îți oferim o privire transparentă asupra instituțiilor
            statului și a celor care te reprezintă, ca tu să poți lua decizii în
            cunoștință de cauză — liniștit, informat și fără presiune.
          </p>
          <img key={img1} src={img1} alt="Something" />
        </div>
        <div className="hero__stack">
          <h1 className="hero__stack-heading">Date verificate</h1>
          <h3 className="hero__stack-title">
            Când datele sunt clare, realitatea devine mai ușor de înțeles.
          </h3>
          <p className="hero__stack-description">
            Îți punem la dispoziție statistici, structuri și informații
            verificate despre politicieni, instituții și funcționarea statului.
            Nu pentru a te influența, ci pentru a-ți oferi contextul necesar să
            înțelegi cum stau lucrurile cu adevărat. Cu cifre reale și
            fact-checking riguros, poți interpreta singur impactul deciziilor
            politice asupra vieții tale.
          </p>
          <img key={img2} src={img2} alt="Something" />
        </div>
        <div className="hero__stack">
          <h1 className="hero__stack-heading">Dialog civic</h1>
          <h3 className="hero__stack-title">
            Tăcerea nu aduce schimbare — conversația, da.
          </h3>
          <p className="hero__stack-description">
            Viața politică nu este un spectacol la care privim din depărtare. Ea
            ne afectează în fiecare zi, iar înțelegerea ei ne ajută să fim
            cetățeni mai conștienți și mai implicați. Prin informații clare și
            discuții deschise, putem sparge cercul indiferenței și putem
            transforma dialogul civic într-o normalitate. Totul începe cu o
            întrebare simplă: „Ce face statul pentru mine — și ce pot face eu
            pentru societate?”
          </p>
        </div>
        <img key={img3} src={img3} alt="Something" />
      </div>
    </section>
  );
}
