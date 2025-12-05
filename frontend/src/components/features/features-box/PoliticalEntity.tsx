import "./PoliticalEntity.css";
import { BookText, CheckCheck, X } from "lucide-react";

type PoliticalEntityProps = {
  title: string;
  description: string;
  canDo: string[];
  cannotDo: string[];
};

export function PoliticalEntity({
  title,
  description,
  canDo,
  cannotDo,
}: PoliticalEntityProps) {
  return (
    <article className="entity">
      <h1 className="entity__heading">
        <BookText className="entity__icon" />
        {title}
      </h1>
      <p className="entity__description">{description}</p>

      <section className="entity__groups">
        <div className="entity__group entity__group--can">
          <h3 className="entity__group-title">Ce poate să facă {title}:</h3>
          <ul className="entity__items">
            {canDo.map((item, index) => (
              <li key={index}>
                <CheckCheck
                  className="entity__icon"
                  color="#27ae60"
                  size={24}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="entity__group entity__group--cannot">
          <h3 className="entity__group-title">Ce nu poate să facă {title}:</h3>
          <ul className="entity__items">
            {cannotDo.map((item, index) => (
              <li key={index}>
                <X className="entity__icon" color="#c0392b" size={24} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
