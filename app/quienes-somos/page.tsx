import type { Metadata } from "next";
import Pending from "@/components/Pending";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Align Health es una comunidad de especialistas en salud que trabajan en conjunto para mejorar la calidad de vida de las personas.",
};

const pendingBlocks = [
  { title: "Nuestra historia" },
  { title: "Misión" },
  { title: "Visión" },
  { title: "Valores" },
];

export default function QuienesSomos() {
  return (
    <>
      <section className="wrap pb-16 pt-14 lg:pt-24">
        <p className="eyebrow">Quiénes somos</p>
        <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Una comunidad de expertos al servicio de tu bienestar</h1>
        <p className="mt-8 max-w-2xl text-lg text-stone">
          Align Health es un espacio multidisciplinario dedicado a la salud y el bienestar integral, conformado por
          una comunidad de expertos que trabajan en conjunto para mejorar la calidad de vida de las personas.
        </p>
      </section>

      <section className="wrap grid gap-12 pb-20 lg:grid-cols-2 lg:items-center">
        <Photo label="equipo o espacio" className="aspect-[4/3] rounded-3xl" />
        <div className="space-y-5 text-stone">
          <h2 className="text-4xl text-ink">Nuestro enfoque multidisciplinario</h2>
          <p>
            Conectamos a las personas con especialistas capacitados y actualizados, promoviendo una atención
            multidisciplinaria, personalizada y humana.
          </p>
          <p>
            La colaboración entre especialidades permite entender cada caso desde distintas perspectivas y acompañar
            a cada persona de forma más completa.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-paper/60 py-20">
        <div className="wrap grid gap-10 sm:grid-cols-2">
          {pendingBlocks.map((b) => (
            <div key={b.title} className="border-t border-olive pt-5">
              <h2 className="text-3xl">{b.title}</h2>
              <p className="mt-4">
                <Pending label="Texto pendiente de proporcionar" />
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
