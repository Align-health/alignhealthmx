import type { Metadata } from "next";
import Pending from "@/components/Pending";
import { faqGroups } from "@/content/faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas a las preguntas más comunes de pacientes y profesionales sobre Align Health.",
};

export default function Preguntas() {
  return (
    <section className="wrap pb-10 pt-14 lg:pt-24">
      <p className="eyebrow">Preguntas frecuentes</p>
      <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Resolvemos tus dudas</h1>

      <div className="mt-14 space-y-16">
        {faqGroups.map((g) => (
          <div key={g.id} id={g.id}>
            <h2 className="text-3xl text-olive">{g.title}</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {g.items.map((f) => (
                <details key={f.q} className="faq py-5">
                  <summary className="flex items-center justify-between gap-4 font-serif text-2xl">
                    {f.q}
                    <span aria-hidden="true" className="faq-icon text-olive transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-3 max-w-2xl text-stone">{f.answer ?? <Pending label="Respuesta por confirmar" />}</div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
