export const PARTY_COLORS: Record<string, string> = {
  AUR: "#FFCC00",
  Minoritati: "#af007aff",
  Neafiliati: "#808080",
  PACE: "#00ffe1ff",
  PNL: "#0057B8",
  POT: "#4B0082",
  PSD: "#DC241F",
  "SOS RO": "#003366",
  UDMR: "#007A33",
  USR: "#00AEEF",
};

export const REPRESENTATIVES_TEXT: Record<
  string,
  { title: string; description: string }
> = {
  deputies: {
    title: "Camera Deputaților",
    description: `
      Camera Deputaților este una dintre cele două camere ale Parlamentului României
      și are, potrivit legii, un număr maxim de 330 de deputați, aleși prin vot
      universal direct. Deputații reprezintă cetățenii în procesul legislativ și
      pot iniția, dezbate și adopta legi. În prezent, principalele forțe politice
      sunt Partidul Social Democrat (PSD), Partidul Național Liberal (PNL),
      Alianța pentru Unirea Românilor (AUR) și Uniunea Salvați România (USR),
      alături de reprezentanți ai minorităților naționale și formațiuni mai mici.
      Majoritățile și alianțele parlamentare pot varia în funcție de acordurile
      politice dintre aceste partide.
    `,
  },
  senators: {
    title: "Senatul",
    description: `
      Senatul este cea de-a doua cameră a Parlamentului României și are un număr
      maxim de 136 de senatori, aleși prin vot direct, la nivel județean și în
      circumscripția pentru românii din diaspora. Senatul are rol egal cu Camera
      Deputaților în procesul legislativ, însă în anumite domenii — precum
      apărarea, politica externă sau justiția — are atribuții prioritare.
      Componența sa este dominată, în general, de aceleași partide principale:
      PSD, PNL, AUR, USR și UDMR, care formează coaliții și alianțe parlamentare.
    `,
  },
};
