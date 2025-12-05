import "./FakeNews.css";
import { FakeNewsGuide } from "./FakeNewsGuide";
import Information from "../../assets/images/fake-news/undraw_annotation_rz2w.svg";
import { ChevronRight } from "lucide-react";

export function FakeNews() {
  return (
    <>
      <section className="fake-news">
        <article>
          <h1 className="fake-news__title">Ce sunt „fake news”?</h1>
          <p className="fake-news__description">
            „Fake news” sunt informații false, manipulate sau scoase din
            context, prezentate intenționat ca fiind adevărate. Acestea pot
            apărea sub forma unor articole, postări, videoclipuri, imagini sau
            chiar meme-uri care par credibile, dar care transmit mesaje
            înșelătoare.
          </p>
          <p className="fake-news__description">
            De cele mai multe ori, fake news nu apar din greșeală, ci sunt
            create deliberat pentru a influența percepțiile, emoțiile și
            comportamentele oamenilor.
          </p>
          <img className="fake-news__image" src={Information} alt="something" />
        </article>

        <article>
          <h1 className="fake-news__title">
            De ce sunt fake news o unealtă atât de folosită?
          </h1>
          <h2 className="fake-news__subheading">
            Sunt ușor de creat și distribuit
          </h2>
          <p className="fake-news__description">
            Oricine poate genera un site fals sau un cont aparent „serios” pe o
            rețea socială. Datorită vitezei internetului, o informație falsă se
            poate răspândi în câteva minute la zeci de mii de persoane.
          </p>
          <h2 className="fake-news__subheading">
            Emoțiile circulă mai repede decât faptele
          </h2>
          <p className="fake-news__description">
            Fake news sunt concepute să provoace frică, furie, indignare sau
            curiozitate — emoții care determină oamenii să distribuie informația
            fără să o verifice.
          </p>
          <h2 className="fake-news__subheading">
            Oamenii tind să creadă informațiile care confirmă opiniile lor
          </h2>
          <p className="fake-news__description">
            Fenomenul de „confirmation bias” îi face pe oameni să accepte mai
            ușor informațiile care susțin ceea ce cred deja, chiar dacă acele
            informații sunt false.
          </p>
        </article>

        <article>
          <h1 className="fake-news__title">
            De ce sunt folosite de actori politici și de forțe externe ostile?
          </h1>
          <h2 className="fake-news__subheading">
            Pentru a influența opinia publică
          </h2>
          <p className="fake-news__description">
            Unele grupări politice folosesc fake news pentru a:
          </p>
          <ul className="fake-news__items">
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              ataca adversari,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              promova propriile mesaje,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              crea confuzie înainte de alegeri.
            </li>
          </ul>
          <h2 className="fake-news__subheading">
            Pentru a destabiliza încrederea în instituții
          </h2>
          <p className="fake-news__description">
            Forțe externe (state sau organizații cu interese geopolitice)
            folosesc fake news pentru a:
          </p>
          <ul className="fake-news__items">
            <li className="fake-news__item">
              slăbi încrederea cetățenilor în guvern, justiție, mass-media,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              crea conflicte sociale,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              polariza comunități,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              reduce stabilitatea țării.
            </li>
          </ul>

          <h2 className="fake-news__subheading">
            Pentru a genera haos în situații de criză
          </h2>
          <p className="fake-news__description">
            În pandemii, războaie sau evenimente economice majore, fake news pot
            amplifica panica și pot afecta deciziile importante ale societății.
          </p>
        </article>

        <article>
          <h1 className="fake-news__title">
            De ce trebuie să fim foarte atenți?
          </h1>
          <p className="fake-news__description">
            Fake news pot avea consecințe reale, precum:
          </p>
          <ul className="fake-news__items">
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              decizii politice greșite,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              răspândirea urii sau discriminării,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              pierderi economice,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              manipularea alegerilor,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              panică în rândul populației,
            </li>
            <li className="fake-news__item">
              <ChevronRight
                className="fake-news__icon"
                color="#333"
                size={24}
              />
              creșterea neîncrederii între oameni.
            </li>
          </ul>
          <p className="fake-news__description">
            În plus, pe măsură ce tehnologia avansează (deepfake, AI,
            manipularea imaginilor), devine din ce în ce mai greu să distingem
            adevărul de fals.
          </p>
          <h3 className="fake-news__subheading">
            De aceea, informarea corectă și spiritul critic sunt esențiale
            pentru protejarea societății.
          </h3>
        </article>
      </section>
      <FakeNewsGuide />
    </>
  );
}
