/**
 * Servicios. Los campos en `null` se muestran como "Por confirmar".
 * No agregar tratamientos, precios ni afirmaciones clínicas sin confirmación.
 */
export type Service = {
  slug: string;
  name: string;
  area: "Nutrición" | "Psicología" | "Medicina" | "Valoración";
  short: string; // Texto breve provisional
  description: string | null;
  scope: string | null;
  needs: string[] | null;
  audience: string | null;
  benefits: string[] | null;
  firstVisit: string | null;
  price: string | null; // Ej. "$900 MXN". Editable.
  modality: string;
};

const base = {
  description: null,
  scope: null,
  needs: null,
  audience: null,
  benefits: null,
  firstVisit: null,
  price: null,
  modality: "Presencial",
};

export const services: Service[] = [
  {
    ...base,
    slug: "nutricion-clinica",
    name: "Nutrición clínica",
    area: "Nutrición",
    short: "Atención nutricional individualizada con enfoque clínico.",
  },
  {
    ...base,
    slug: "nutricion-deportiva",
    name: "Nutrición deportiva",
    area: "Nutrición",
    short: "Nutrición orientada a la actividad física y al deporte.",
  },
  {
    ...base,
    slug: "nutricion-materno-infantil",
    name: "Nutrición materno-infantil",
    area: "Nutrición",
    short: "Atención nutricional en el ámbito materno-infantil.",
  },
  {
    ...base,
    slug: "psicologia-clinica",
    name: "Psicología clínica",
    area: "Psicología",
    short: "Atención psicológica con enfoque clínico.",
  },
  {
    ...base,
    slug: "medicina-general",
    name: "Medicina general",
    area: "Medicina",
    short: "Consulta de medicina general.",
  },
  {
    ...base,
    slug: "bariatria-y-obesidad",
    name: "Bariatría y obesidad",
    area: "Medicina",
    short: "Atención de especialistas en bariatría y obesidad.",
  },
  {
    ...base,
    slug: "valoracion-inbody",
    name: "Valoración de composición corporal InBody",
    area: "Valoración",
    short: "Valoración de composición corporal mediante InBody.",
    // Alcance exacto del servicio pendiente de confirmar.
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
