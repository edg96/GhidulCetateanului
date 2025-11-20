import "./OverviewSection.css";
import { PoliticalEntity } from "./features-box/PoliticalEntity";

export function OverviewSection() {
  const data = [
    {
      title: "Președintele",
      description:
        "Președintele este șeful statului și are rolul de a reprezenta România atât în interior, cât și în afara țării. El veghează la respectarea Constituției și la buna funcționare a instituțiilor statului. Printre atribuțiile sale principale se numără numirea prim-ministrului, promulgarea legilor, conducerea armatei și reprezentarea României în relațiile internaționale. Președintele este ales prin vot direct de către cetățeni, pentru un mandat de 5 ani.",
      canDo: [
        "Reprezintă România în relațiile internaționale",
        "Promulgă legile",
        "Numeste un prim-ministru (după consultarea partidelor)",
        "Conduce armata și apără securitatea națională",
        "Poate cere Parlamentului reexaminarea unei legi",
        "Poate organiza referendumuri",
      ],
      cannotDo: [
        "Nu poate conduce direct Guvernul",
        "Nu poate adopta legi",
        "Nu poate modifica singur Constituția",
        "Nu poate da ordonanțe sau hotărâri",
      ],
    },
    {
      title: "Senatul",
      description:
        "Senatul este una dintre cele două camere ale Parlamentului. Rolul său este de a dezbate și adopta legi, alături de Camera Deputaților. Senatorii sunt aleși prin vot direct de către cetățeni și reprezintă interesele acestora la nivel național. Senatul are competențe speciale în anumite domenii, cum ar fi aprobarea unor tratate internaționale sau desemnarea unor funcții importante în stat. Senatul este o componentă esențială a procesului legislativ în România.",
      canDo: [
        "Dezbate și adoptă legi",
        "Aprobă tratate internaționale",
        "Participă la numirea unor persoane în funcții importante",
        "Controlează activitatea Guvernului",
      ],
      cannotDo: [
        "Nu poate decide singur asupra legilor",
        "Nu poate numi Guvernul",
        "Nu poate bloca singur un proiect de lege",
      ],
    },
    {
      title: "Camera Deputaților",
      description:
        "Camera Deputaților este cealaltă cameră a Parlamentului României. Deputații, aleși prin vot direct, au rolul de a iniția, dezbate și vota legile care privesc viața de zi cu zi a cetățenilor. Camera Deputaților are atribuții în special în ceea ce privește bugetul de stat, politicile publice și controlul asupra activității Guvernului. Împreună cu Senatul, Camera Deputaților formează Parlamentul, adică organul suprem de legiferare în România.",
      canDo: [
        "Votează și adoptă legi",
        "Poate iniția proiecte legislative",
        "Adoptă bugetul de stat",
        "Controlează activitatea Guvernului prin comisii și moțiuni",
        "Poate vota moțiuni de cenzură împreună cu Senatul",
      ],
      cannotDo: [
        "Nu poate modifica legi fără acordul Senatului",
        "Nu poate dizolva singură Guvernul",
        "Nu poate interveni în atribuțiile Președintelui sau Guvernului",
      ],
    },
  ];

  return (
    <section className="overview">
      <div className="overview__grid">
        {data.map((feature, index) => (
          <PoliticalEntity key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
