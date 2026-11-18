import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Nuestro espacio",
  description:
    "Conoce las instalaciones de Align Health: un entorno profesional, moderno y acogedor para tu atención.",
};

const areas = [
  { label: "Recepción", wide: true },
  { label: "Sala de espera" },
  { label: "Consultorios" },
  { label: "Áreas comunes" },
  { label: "Accesos" },
  { label: "Exterior del edificio", wide: true },
  { label: "Estacionamiento" },
];

export default function NuestroEspacio() {
  return (
    <>
      <section className="wrap pb-10 pt-14 lg:pt-24">
        <p className="eyebrow">Nuestro espacio</p>
        <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Un entorno profesional, moderno y acogedor</h1>
        <p className="mt-6 max-w-2xl text-lg text-stone">
          Diseñado para que tu atención sea cómoda, privada y cercana.
        </p>
      </section>

      <section className="wrap" aria-label="Galería de instalaciones">
        <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.label} className={a.wide ? "lg:col-span-2" : ""}>
              <Reveal>
                <Photo label={a.label} className="aspect-[4/3] rounded-2xl" />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap mt-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl">Cómo llegar</h2>
          <p className="mt-4 text-stone">
            {site.contact.fullAddress ?? site.contact.zone}. La dirección exacta, los puntos de referencia y la
            información de estacionamiento se agregarán cuando estén confirmados.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.contact.mapsUrl} className="btn btn-primary" rel="noopener noreferrer">
              Abrir en Google Maps
            </a>
            <Link href="/contacto" className="btn btn-ghost">
              Contacto
            </Link>
          </div>
        </div>
        <div
          role="img"
          aria-label="Mapa interactivo pendiente"
          className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-olive/50 bg-paper text-center text-xs uppercase tracking-[0.18em] text-stone"
        >
          Mapa interactivo pendiente
        </div>
      </section>
    </>
  );
}
