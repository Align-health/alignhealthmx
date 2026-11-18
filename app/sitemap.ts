import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { specialists } from "@/content/specialists";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const fixed = [
    "",
    "/quienes-somos",
    "/servicios",
    "/especialistas",
    "/nuestro-espacio",
    "/soy-especialista",
    "/preguntas-frecuentes",
    "/contacto",
    ...(posts.length > 0 ? ["/blog"] : []),
  ];
  const urls = [
    ...fixed,
    ...services.map((s) => `/servicios/${s.slug}`),
    // Las fichas de ejemplo no se incluyen.
    ...specialists.filter((s) => !s.placeholder).map((s) => `/especialistas/${s.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return urls.map((path) => ({ url: `${base}${path}` }));
}
