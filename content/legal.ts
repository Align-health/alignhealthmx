/**
 * Páginas legales. El contenido definitivo debe ser redactado y aprobado
 * por la persona responsable. No publicar sin esa revisión.
 */
export const legalPages = [
  { slug: "aviso-de-privacidad", title: "Aviso de privacidad" },
  { slug: "terminos-y-condiciones", title: "Términos y condiciones" },
  { slug: "politicas-de-uso", title: "Políticas de uso del sitio web" },
] as const;

export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug);
