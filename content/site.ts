/**
 * Datos generales del sitio. Todo lo que está en `null` aparece en la página
 * como "Por confirmar" hasta que se capture el dato real.
 * Fuente de los datos ya llenos: perfil de Instagram @alignhealthmx.
 */
export const site = {
  name: "Align Health",
  descriptor: "Nutrición, Medicina y Psicología",
  // Dominio pendiente. Definir NEXT_PUBLIC_SITE_URL al publicar.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // El sitio no se indexa hasta definir NEXT_PUBLIC_INDEXABLE=true.
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === "true",
  tagline: null as string | null, // Lema definitivo pendiente
  contact: {
    whatsappDisplay: "81 3125 2109",
    whatsappE164: "528131252109",
    phone: null as string | null,
    email: null as string | null,
    hours: null as string | null,
    zone: "Plaza Sienna, Av. Fundadores",
    fullAddress: null as string | null, // Dirección exacta pendiente
    mapsUrl: "https://maps.app.goo.gl/YefaRsqvFqqytZ899",
    instagram: "alignhealthmx",
  },
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.contact.whatsappE164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const instagramUrl = `https://www.instagram.com/${site.contact.instagram}`;
