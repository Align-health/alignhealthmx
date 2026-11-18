/**
 * Catálogo de especialistas. Todos los campos de la ficha son opcionales.
 * Mientras no exista el panel administrativo (Fase 6), se edita aquí.
 *
 * `placeholder: true` marca fichas de ejemplo: se muestran con aviso, no se
 * indexan y no entran al sitemap. Reemplazar por perfiles reales confirmados.
 */
export type Specialist = {
  slug: string;
  placeholder?: boolean;
  fullName: string | null;
  photo: string | null; // Ruta en /public, ej. "/especialistas/nombre.jpg"
  profession: string | null;
  specialty: string | null;
  cedula: string | null;
  education: string[] | null;
  certifications: string[] | null;
  experience: string | null;
  careAreas: string[] | null;
  population: string | null;
  serviceSlugs: string[]; // Debe coincidir con slugs de services.ts
  modality: string | null;
  schedule: string | null;
  price: string | null;
  approach: string | null;
  // Reservado para filtros futuros (tipo de paciente, etc.)
  tags?: string[];
};

export const specialists: Specialist[] = [
  {
    slug: "especialista-por-confirmar",
    placeholder: true,
    fullName: null,
    photo: null,
    profession: null,
    specialty: null,
    cedula: null,
    education: null,
    certifications: null,
    experience: null,
    careAreas: null,
    population: null,
    serviceSlugs: [],
    modality: null,
    schedule: null,
    price: null,
    approach: null,
  },
];

export const getSpecialist = (slug: string) => specialists.find((s) => s.slug === slug);
