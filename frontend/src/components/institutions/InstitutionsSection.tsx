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
    axios.get("http://localhost:5000/institutions"),
    axios.get("http://localhost:5000/institutions/categories"),
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
    <section className="institutions">
      <div className="institutions__header">
        <h1 className="institutions__title">
          Institutiile Publice din Romania
        </h1>
        <p className="institutions__description">
          Aici gasesti o lista cu principalele institutii publice din Romania,
          impreuna cu informatii relevante despre fiecare dintre ele. Fiecare
          institutie este prezentata printr-un card care include numele,
          descrierea si alte detalii importante.
        </p>
      </div>
      <div className="institutions__navbar">
        <button className="institutions__btn">
          <Layers />
        </button>
        <button className="institutions__btn">
          <Landmark />
        </button>
        <button className="institutions__btn">
          <Vote />
        </button>
        <button className="institutions__btn">
          <Briefcase />
        </button>
        <button className="institutions__btn">
          <ShieldCheck />
        </button>
        <button className="institutions__btn">
          <Gavel />
        </button>
        <button className="institutions__btn">
          <Building />
        </button>
        <button className="institutions__btn">
          <Shield />
        </button>
      </div>
      <div className="institutions__grid">
        {data?.institutions!.map((institution) => (
          <Institution key={institution._id} data={institution} />
        ))}
      </div>
    </section>
  );
}
