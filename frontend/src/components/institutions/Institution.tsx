import "./Institution.css";
import { useEffect } from "react";
import { categoriesIcons } from "../../utils/constants/institutions-helper";
import { iconComponents } from "../../utils/constants/institutions-helper";
import {
  Layers,
  MapPinHouse,
  BookUser,
  ClipboardPaste,
  Info,
} from "lucide-react";
import type { InstitutionData } from "../../types/institution";

interface InstitutionProps {
  data: InstitutionData;
}

export function Institution({ data }: InstitutionProps) {
  const iconName = categoriesIcons[data.category];
  const Icon = iconComponents[iconName] ?? Layers;

  useEffect(() => {
    const cards = document.querySelectorAll(".flip__card-inner");

    let maxHeight = 0;

    cards.forEach((card) => {
      const front = card.querySelector(".flip__card-front") as HTMLElement;
      const back = card.querySelector(".flip__card-back") as HTMLElement;

      const cardMaxHeight = Math.max(front?.scrollHeight, back?.scrollHeight);
      if (cardMaxHeight > maxHeight) maxHeight = cardMaxHeight;
    });

    cards.forEach((card) => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div className="flip__card">
      <div className="flip__card-inner">
        <div className="flip__card-front">
          <div className="card__badge">
            <Icon className="card__badge-icon" />
          </div>

          <div className="front__content">
            <p className="institution__title">{data.name}</p>
            <div className="back__content">
              <div className="institution__description">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flip__card-back">
          <div className="card__badge">
            <BookUser className="card__badge-icon" />
          </div>

          <div className="back__content">
            <div className="institution__icon-text">
              <MapPinHouse className="institution__icon" />
              {data.address}
            </div>

            <div className="institution__icon-text">
              <Info className="institution__icon" />
              Vezi detalii despre institutia curenta
            </div>

            <div className="institution__icon-text">
              <ClipboardPaste className="institution__icon" />
              {data.website}
            </div>

            <div className="institution__website-link">
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                Viziteaza site-ul oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
