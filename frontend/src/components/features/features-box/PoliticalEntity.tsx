import "./PoliticalEntity.css";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleSharp,
} from "react-icons/io5";

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
      <h1 className="entity__title">
        <IoInformationCircleSharp className="entity__icon" />
        {title}
      </h1>
      <p className="entity__description">{description}</p>

      {/* Can Do */}
      <section className="entity__responsibilities">
        <div className="entity__responsibilities-container">
          <div className="entity__list entity__list--can">
            <h3 className="entity__list-title">Ce poate să facă {title}:</h3>
            <ul className="entity__ul">
              {canDo.map((item, index) => (
                <li className="entity__li" key={index}>
                  <IoCheckmarkCircleOutline
                    className="entity__icon"
                    color="#27ae60"
                    size={25}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cannot Do */}
          <div className="entity__list entity__list--cannot">
            <h3 className="entity__list-title">Ce nu poate să facă {title}:</h3>
            <ul className="entity__ul">
              {cannotDo.map((item, index) => (
                <li className="entity__li" key={index}>
                  <IoCloseCircleOutline
                    className="entity__icon"
                    color="#c0392b"
                    size={25}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
