import "./Institution.css";
import { useEffect, useRef, useState } from "react";
import { categoriesIcons } from "../../utils/constants/institutions-helper";
import { iconComponents } from "../../utils/constants/institutions-helper";
import { MapPinHouse, Info, SendHorizontal } from "lucide-react";
interface InstitutionProps {
  data: InstitutionData;
  filter: string;
}
import type { InstitutionData } from "../../types/institution";

export function Institution({ data, filter }: InstitutionProps) {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const category = categoriesIcons[data.category];
  const Icon = iconComponents[category];

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (visible) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0";
    }
  }, [visible]);

  function toggleCollapsible() {
    setVisible((prev) => !prev);
  }

  if (filter != "layers" && filter != data.category) return null;

  return (
    <div className="institution_collapsible">
      <button type="button" className="collapsible" onClick={toggleCollapsible}>
        <Icon /> {data.name}
      </button>
      <div className={`content ${visible ? "active" : ""}`} ref={contentRef}>
        <p className="collapsible-text">{data.description}</p>
        <p className="collapsible-address">
          <MapPinHouse /> {data.address}
        </p>
        <p className="collapsible-website-text">
          <Info /> {data.website}
        </p>
        <a className="collapsible-send-to-page">
          <SendHorizontal /> Afla mai multe informatii pe pagina dedicata a
          site-ului nostru
        </a>
        <a className="collapsible-website" href={data.website}>
          Viziteaza site-ul oficial
        </a>
      </div>
    </div>
  );
}
