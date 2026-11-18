import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Servicios y especialidades",
  description:
    "Nutrición clínica, deportiva y materno-infantil, psicología clínica, medicina general, bariatría y valoración de composición corporal con InBody.",
};

export default function Servicios() {
  const areas = Array.from(new Set(services.map((s) => s.area)));
  return (
    <section className="wrap pb-10 pt-14 lg:pt-24">
      <p className="eyebrow">Servicios y especialidades</p>
      <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Encuentra la atención que necesitas</h1>

      <div className="mt-16 space-y-16">
        {areas.map((area) => (
          <div key={area}>
            <h2 className="eyebrow border-b border-line pb-3">{area}</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.area === area)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-paper p-7 transition-colors hover:border-olive"
                    >
                      <div>
                        <h3 className="text-3xl transition-colors group-hover:text-olive">{s.name}</h3>
                        <p className="mt-3 text-sm text-stone">{s.short}</p>
                      </div>
                      <span className="mt-8 text-sm uppercase tracking-[0.14em] text-olive">
                        Ver servicio <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
