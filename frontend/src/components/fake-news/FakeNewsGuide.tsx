import "./FakeNewsGuide.css";
import Guide from "../../assets/images/fake-news/fake-news-guide/undraw_visual-explanation_vd4l.svg";

export function FakeNewsGuide() {
  return (
    <section className="fake-news-guide">
      <img className="fake-news__image" src={Guide} alt="something" />

      <h1 className="fake-news__title">
        Ghid practic: Cum identifici un fake news?
      </h1>

      {/* 1 */}
      <h2 className="fake-news__question">1. Este sursa una de încredere?</h2>
      <p className="fake-news__answer">
        Întrebare: De pe ce site / pagină / canal provine informația? Este
        recunoscut? Este transparent?
      </p>
      <p className="fake-news__answer">
        Dacă răspunsul este DA &rarr; Poate fi o informație reală, dar verifică
        și alte elemente.
      </p>
      <p className="fake-news__answer">
        Dacă răspunsul este NU &rarr; Posibil fake news.
      </p>

      {/* 2 */}
      <h2 className="fake-news__question">2. Autorul este menționat?</h2>
      <p className="fake-news__answer">
        Există un nume real? Poți vedea cine a scris articolul?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Verifică istoricul autorului pentru credibilitate.
      </p>
      <p className="fake-news__answer">
        NU &rarr; Semnal de alarmă. Creatorii de fake news nu își asumă
        identitatea.
      </p>

      {/* 3 */}
      <h2 className="fake-news__question">
        3. Titlul este foarte emoțional sau șocant?
      </h2>
      <p className="fake-news__answer">
        Titlul pare făcut să te sperie, să te enerveze sau să te șocheze?
      </p>
      <p className="fake-news__answer">
        DA &rarr; E posibil să fie manipulare emoțională.
      </p>
      <p className="fake-news__answer">NU &rarr; Trecem la pasul următor.</p>

      {/* 4 */}
      <h2 className="fake-news__question">4. Conținutul confirmă titlul?</h2>
      <p className="fake-news__answer">
        Articolul spune ce promite titlul sau este doar clickbait?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Bun, dar verifică informațiile din text.
      </p>
      <p className="fake-news__answer">
        NU &rarr; Manipulare prin titlu. Posibil fake news.
      </p>

      {/* 5 */}
      <h2 className="fake-news__question">
        5. Verifici informația în alte surse?
      </h2>
      <p className="fake-news__answer">
        Mai raportează și alte site-uri cunoscute aceeași informație?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Informația este probabil reală.
      </p>
      <p className="fake-news__answer">NU &rarr; Foarte probabil fake news.</p>

      {/* 6 */}
      <h2 className="fake-news__question">
        6. Există dovezi clare, verificabile?
      </h2>
      <p className="fake-news__answer">
        Se oferă date, documente, declarații oficiale, studii?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Analizează dacă dovezile sunt reale.
      </p>
      <p className="fake-news__answer">
        NU &rarr; Probabil informația este inventată.
      </p>

      {/* 7 */}
      <h2 className="fake-news__question">
        7. Verifici imaginile sau videoclipurile?
      </h2>
      <p className="fake-news__answer">
        Par imaginile ciudate, rupte din context, modificate sau prea dramatice?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Folosește verificare reversă (Google Images, TinEye).
      </p>
      <p className="fake-news__answer">NU &rarr; Mergi mai departe.</p>

      {/* 8 */}
      <h2 className="fake-news__question">
        8. Limbajul folosit este extrem, agresiv sau conspiraționist?
      </h2>
      <p className="fake-news__answer">
        Textul folosește expresii de tipul „adevărul pe care NU ȚI-L SPUNE
        NIMENI”, „toți te mint”, „e totul o conspirație”?
      </p>
      <p className="fake-news__answer">
        DA &rarr; Indicator puternic de fake news.
      </p>
      <p className="fake-news__answer">NU &rarr; Continuă analiza.</p>

      {/* 9 */}
      <h2 className="fake-news__question">9. Lipsesc detaliile importante?</h2>
      <p className="fake-news__answer">
        Sunt menționate instituții, experți sau cifre fără referințe reale?
      </p>
      <p className="fake-news__answer">DA &rarr; Probabil manipulare.</p>
      <p className="fake-news__answer">NU &rarr; Treci la ultimul pas.</p>

      {/* 10 */}
      <h2 className="fake-news__question">10. Ce spune logica?</h2>
      <p className="fake-news__answer">
        Informația are sens sau pare exagerată / imposibilă?
      </p>
      <p className="fake-news__answer">
        NU ARE SENS &rarr; Fake news foarte probabil.
      </p>
      <p className="fake-news__answer">
        ARE SENS &rarr; Totuși, verifică mereu din minimum două surse sigure.
      </p>

      {/* Concluzie */}
      <h2 className="fake-news__title">Concluzie rapidă (checklist practic)</h2>
      <ul className="fake-news__checklist">
        <li>nu are sursă clară</li>
        <li>nu are autor</li>
        <li>este emoțional sau alarmist</li>
        <li>nu apare nicăieri în presa serioasă</li>
        <li>nu are dovezi</li>
        <li>folosește conspirații</li>
        <li>are imagini dubioase</li>
        <li>promite „adevărul ascuns”</li>
      </ul>

      <p className="fake-news__description">
        Dacă bifezi 2–3 dintre acestea, probabil e fake news.
        <br />
        Dacă bifezi 4 sau mai multe, aproape sigur e fake news.
      </p>
    </section>
  );
}
