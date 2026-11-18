"use client";

import Link from "next/link";
import { useState } from "react";
import Photo from "./Photo";
import type { Specialist } from "@/content/specialists";

type Option = { slug: string; name: string };

export default function SpecialistGrid({
  specialists,
  filters,
}: {
  specialists: Specialist[];
  filters: Option[];
}) {
  const [active, setActive] = useState<string>("todas");
  const visible =
    active === "todas" ? specialists : specialists.filter((s) => s.serviceSlugs.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filtrar por especialidad" className="flex flex-wrap gap-2">
        {[{ slug: "todas", name: "Todas" }, ...filters].map((f) => (
          <button
            key={f.slug}
            type="button"
            aria-pressed={active === f.slug}
            onClick={() => setActive(f.slug)}
            className={`min-h-11 rounded-full border px-4 text-sm transition-colors ${
              active === f.slug
                ? "border-olive bg-olive text-paper"
                : "border-line bg-paper text-ink/80 hover:border-olive"
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <li key={s.slug}>
            <Link href={`/especialistas/${s.slug}`} className="group block">
              <Photo
                label={s.photo ? "foto" : "foto del especialista"}
                className="aspect-[4/5] rounded-t-[999px] rounded-b-2xl"
              />
              <div className="mt-5">
                {s.placeholder && (
                  <p className="eyebrow mb-1">Ficha de ejemplo</p>
                )}
                <h2 className="font-serif text-2xl transition-colors group-hover:text-olive">
                  {s.fullName ?? "Especialista por confirmar"}
                </h2>
                <p className="mt-1 text-sm text-stone">
                  {[s.profession, s.specialty].filter(Boolean).join(" · ") || "Datos por confirmar"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-10 text-stone">
          Aún no hay especialistas en esta categoría. Estamos completando el catálogo.
        </p>
      )}
    </div>
  );
}
