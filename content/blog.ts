/**
 * Estructura del blog. Sin artículos por ahora.
 * Cada artículo contempla categoría, autor (slug de especialista),
 * fecha, imagen y metadatos SEO.
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorSlug: string;
  date: string; // ISO, ej. "2026-12-01"
  image: string | null;
  imageAlt: string | null;
  seoTitle?: string;
  seoDescription?: string;
  body: string;
};

export const blogCategories: string[] = [];
export const posts: Post[] = [];
