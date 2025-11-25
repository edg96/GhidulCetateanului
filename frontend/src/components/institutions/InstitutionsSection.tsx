import "./InstitutionsSection.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Institution } from "./Institution";
import { LoadingPage } from "../common/LoadingPage";
import { categoriesIcons } from "../../utils/constants/institutions-helper";
import {
  Layers,
  Landmark,
  Vote,
  Briefcase,
  ShieldCheck,
  Gavel,
  Building,
  Shield,
} from "lucide-react";
import type { InstitutionData } from "../../types/institution";

async function fetchInstitutionsAndCategories(): Promise<{
  institutions: InstitutionData[];
  categories: string[];
}> {
  const [institutionsRes, categoriesRes] = await Promise.all([
    axios.get("http://localhost:5000/api/institutions"),
    axios.get("http://localhost:5000/api/institutions/categories"),
  ]);

  return { institutions: institutionsRes.data, categories: categoriesRes.data };
}

export function InstitutionsSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["institutions-and-categories"],
    queryFn: fetchInstitutionsAndCategories,
  });

  if (isLoading) return <LoadingPage />;
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const categories: string[] = [];
  for (const category of data!.categories) {
    categories.push(categoriesIcons[category]);
  }

  return (
    <section className="institutions__section">
      <div className="institutions__section-header">
        <h1 className="institutions__section-title">
          Instituțiile Publice din România
        </h1>

        <p className="institutions__section-subtitle">
          Această secțiune îți oferă un ghid complet al instituțiilor publice
          din România, explicate într-un limbaj simplu și concret. Scopul nostru
          este să te ajutăm să înțelegi cum funcționează statul, ce
          responsabilități are fiecare instituție și cum îți influențează în mod
          direct viața — prin servicii, decizii sau politici publice.
        </p>
        <p className="institutions__section-subtitle">
          Fiecare instituție este prezentată printr-un card interactiv, conceput
          pentru a-ți oferi informația într-un mod clar și ușor de parcurs:
        </p>

        <p className="institutions__section-subtitle">
          <strong>Pe fața cardului</strong>, găsești:
        </p>

        <ul className="institutions__section-categories-list">
          <li>denumirea instituției</li>
          <li>o descriere scurtă, concretă și ușor de înțeles a rolului său</li>
          <li>
            o imagine de ansamblu despre ce face instituția zi de zi și cum
            impactează viața cetățenilor
          </li>
          <li>ce servicii oferă sau ce domenii reglementează</li>
        </ul>

        <p className="institutions__section-subtitle">
          <strong>
            <strong>Pe spatele cardului</strong>, ai informațiile suplimentare
            și utile în practică:
          </strong>
        </p>

        <ul className="institutions__section-categories-list">
          <li>link direct către site-ul oficial al instituției (clickabil)</li>
          <li>adresa exactă, în format text, pentru a putea copia rapid</li>
          <li>
            o opțiune care te duce la o pagină dedicată instituției, în cadrul
            site-ului
          </li>
        </ul>

        <p className="institutions__section-subtitle">
          Această pagină detaliată conține explicații mult mai ample despre:
        </p>

        <ul className="institutions__section-categories-list">
          <li>atribuțiile și responsabilitățile concrete ale instituției</li>
          <li>
            modul în care activitatea ei afectează cetățeanul și societatea
          </li>
          <li>
            o scală de risc („cât de grav este pentru cetățean dacă instituția
            este coruptă”), care te ajută să înțelegi importanța ei în
            funcționarea statului
          </li>
        </ul>

        <p className="institutions__section-subtitle">
          Acest ghid este creat pentru a fi util oricui: cetățeni care vor
          răspunsuri rapide, persoane active civic, elevi sau studenți care
          învață despre instituțiile statului, cât și profesioniști care au
          nevoie de o imagine clară asupra mecanismelor administrației publice.
        </p>
      </div>

      <div className="institutions__section-navbar">
        <button className="institutions__section-btn">
          <Layers />
        </button>
        <button className="institutions__section-btn">
          <Landmark />
        </button>
        <button className="institutions__section-btn">
          <Vote />
        </button>
        <button className="institutions__section-btn">
          <Briefcase />
        </button>
        <button className="institutions__section-btn">
          <ShieldCheck />
        </button>
        <button className="institutions__section-btn">
          <Gavel />
        </button>
        <button className="institutions__section-btn">
          <Building />
        </button>
        <button className="institutions__section-btn">
          <Shield />
        </button>
      </div>
      <div className="institutions__section-grid">
        {data?.institutions!.map((institution) => (
          <Institution key={institution._id} data={institution} />
        ))}
      </div>
    </section>
  );
}
