import { useRef, useEffect } from "react";
import "./HeroSection.css";
import "../../assets/css/utilities.css";

export function HeroSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const images: string[] = [
    "../../src/assets/images/hero/hero_image_1.jpg",
    "../../src/assets/images/hero/hero_image_2.jpg",
    "../../src/assets/images/hero/hero_image_3.jpg",
    "../../src/assets/images/hero/hero_image_4.jpg",
    "../../src/assets/images/hero/hero_image_5.jpg",
    "../../src/assets/images/hero/hero_image_6.jpg",
    "../../src/assets/images/hero/hero_image_7.jpg",
    "../../src/assets/images/hero/hero_image_8.jpg",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollStep = 3;

    const autoScroll = () => {
      if (carousel) {
        carousel.scrollTop += scrollStep;

        if (carousel.scrollTop >= carousel.scrollHeight / 2) {
          carousel.scrollTop = 0;
        }
      }
    };

    const intervalId = setInterval(autoScroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <div className="hero__text-box">
            <h1 className="hero__heading">
              Înțelege Statul, Înțelege Puterea Ta
            </h1>
            <p className="hero__description">
              Aici găsești informații clare și pe înțelesul tuturor despre
              instituțiile statului român: ce rol are Președintele, ce face
              Senatul, care sunt responsabilitățile Guvernului și ce înseamnă,
              de fapt, votul tău. Pentru că o societate puternică începe cu
              cetățeni informați.
            </p>
            <button className="btn margin-right-sm">Începe Aici</button>
            <button className="btn">Despre Noi</button>
          </div>

          <div className="hero__disclaimer">
            <div className="hero__disclaimer-container">
              <div className="hero__disclaimer-text">
                <h1 className="hero__disclaimer-heading">
                  Cine suntem noi si de ce avem acest proiect?
                </h1>
                <p className="hero__disclaimer-subheading">
                  Acest proiect este în întregime civic și independent. Nu
                  reprezentăm niciun partid politic și nu urmărim să influențăm
                  opiniile cetățenilor pe o anumită direcție ideologică. Scopul
                  nostru este să oferim informații corecte, echilibrate și ușor
                  de înțeles despre instituțiile statului român și despre modul
                  în care acestea funcționează. Credem că o societate
                  democratică sănătoasă are nevoie de cetățeni bine informați,
                  capabili să înțeleagă cine ia decizii, cum sunt acestea puse
                  în practică și care sunt drepturile și responsabilitățile
                  fiecăruia dintre noi. Tot conținutul pe care îl găsești aici
                  are un singur obiectiv: să facă informația publică mai
                  accesibilă, fără interpretări partizane și fără agendă
                  politică.
                </p>
              </div>
              <div
                className="hero__disclaimer-image"
                role="img"
                aria-label="Disclaimer image"
              ></div>
            </div>
          </div>
        </div>

        <div className="hero__carousel">
          <div className="hero__carousel-grid" ref={carouselRef}>
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Hero ${i}`}
                className="hero__image"
              />
            ))}
          </div>
          <div className="hero__fade hero__fade--top"></div>
          <div className="hero__fade hero__fade--bottom"></div>
        </div>
      </div>
    </section>
  );
}
