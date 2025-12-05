import "./AboutUs.css";
import thankYou from "../../assets/images/about-us/undraw_a-whole-year_aniy.svg";
import team from "../../assets/images/about-us/undraw_team-spirit_18vw.svg";

export function AboutUs() {
  return (
    <section className="about-us">
      <article className="about-us__header">
        <h1 className="about-us__title">Despre Proiect</h1>
        <p className="about-us__description">
          Transparență, accesibilitate și informații clare pentru toți. Am creat
          această platformă pentru a face datele politice ușor de înțeles, de
          încredere și prezentate într-un mod modern.
        </p>
        <img
          src={team}
          alt="Thank You Illustration"
          className="about-us__cta-image"
        />
      </article>

      {/* Mission Section */}
      <article className="about-us__mission">
        <h2 className="about-us__mission-title">Misiunea Noastră</h2>
        <p className="about-us__mission-description">
          Misiunea noastră este simplă: să oferim oamenilor informații politice
          actuale, structurate și intuitive. Indiferent dacă ești elev, student,
          profesionist sau cetățean implicat, credem că accesul la informație de
          calitate trebuie să fie rapid și ușor.
        </p>
        <p className="about-us__mission-description">
          Platforma reunește date despre reprezentanți, instituții și structuri
          politice, organizate în componente vizuale clare care te ajută să
          explorezi, să compari și să înțelegi imaginea de ansamblu.
        </p>
      </article>

      {/* Values Section */}
      <article className="about-us__values">
        <h2 className="about-us__values-title about-us__values-title--center">
          Valorile Care Ne Ghidează
        </h2>

        <div className="about-us__values-grid">
          <div className="about-us__values-card">
            <h3 className="about-us__values-title">Transparență</h3>
            <p className="about-us__values-text">
              Informația trebuie să fie clară și accesibilă. Ne concentrăm pe
              prezentarea datelor fără bias și fără complicații.
            </p>
          </div>

          <div className="about-us__values-card">
            <h3 className="about-us__values-title">Accesibilitate</h3>
            <p className="about-us__values-text">
              Oricine ar trebui să poată înțelege date politice. Fără jargon,
              fără bariere.
            </p>
          </div>

          <div className="about-us__values-card">
            <h3 className="about-us__values-title">Acuratețe</h3>
            <p className="about-us__values-text">
              Integritatea datelor este esențială. Actualizăm constant platforma
              pentru a menține informații corecte și relevante.
            </p>
          </div>
        </div>
      </article>

      {/* Story Section */}
      <article className="about-us__story">
        <h2 className="about-us__story-title">Povestea Noastră</h2>
        <p className="about-us__description">
          Proiectul a început de la o întrebare simplă:
          <em>
            „Cum ar fi dacă înțelegerea vieții politice ar putea fi regândită
            complet, punând pe primul loc designul, claritatea și
            accesibilitatea?”
          </em>
        </p>
        <p className="about-us__description">
          Această idee a evoluat într-o platformă care combină date, interfețe
          moderne și responsabilitate civică. Scopul nostru este să oferim un
          instrument util oricui vrea să înțeleagă mai bine lumea politică.
        </p>
      </article>

      {/* CTA Section */}
      <article className="about-us__cta">
        <h2 className="about-us__cta-title">Suntem Abia la Început</h2>
        <p className="about-us__cta-text">
          Mai multe date. Mai multe funcționalități. Mai multă transparență.
          Alătură-te nouă pe măsură ce dezvoltăm platforma pentru toți cei
          interesați. Iti mulțumim că ne susții în această misiune si pentru
          faptul ca ai vizitat site-ul nostru!
        </p>
        <img
          src={thankYou}
          alt="Thank You Illustration"
          className="about-us__cta-image"
        />
      </article>
    </section>
  );
}

export default AboutUs;
