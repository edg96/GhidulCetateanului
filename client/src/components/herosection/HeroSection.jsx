import { useRef, useEffect } from "react";
import "./HeroSection.css";

function HeroSection() {
  const carouselRef = useRef(null);

  const images = [
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
    let scrollStep = 3;
    let intervalId;

    const autoScroll = () => {
      if (carousel) {
        carousel.scrollTop += scrollStep;
      }
    };
    if (carousel.scrollTop >= carousel.scrollHeight / 2) {
      carousel.scrollTop = 0;
    }
    intervalId = setInterval(autoScroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Înțelege Statul, Înțelege Puterea Ta
            </h1>
            <p className="hero-description">
              Aici găsești informații clare și pe înțelesul tuturor despre
              instituțiile statului român: ce rol are Președintele, ce face
              Senatul, care sunt responsabilitățile Guvernului și ce înseamnă,
              de fapt, votul tău. Pentru că o societate puternică începe cu
              cetățeni informați.
            </p>
            <button className="btn margin-right-sm">Începe Aici</button>
            <button className="btn">Despre Noi</button>
          </div>

          <div className="disclaimer-box">
            <div className="disclaimer-box-container">
              <div className="disclaimer-text-box">
                <h1 className="disclaimer-heading">
                  Cine suntem noi si de ce avem acest proiect?
                </h1>
                <p className="disclaimer-subheading">
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
              <div className="disclaimer-image-box">
                <img
                  src="../../src/assets/images/hero/description_box_image.jpg"
                  alt="Civic"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Hero ${index}`}
                className="hero-image"
              />
            ))}
          </div>
          <div className="fade fade-top"></div>
          <div className="fade fade-bottom"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
