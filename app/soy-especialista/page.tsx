import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Pending from "@/components/Pending";
import Photo from "@/components/Photo";
import { faqGroups } from "@/content/faq";

export const metadata: Metadata = {
  title: "Soy especialista: consultorios en Align Health",
  description:
    "Conoce Align Health, un espacio multidisciplinario de salud, y solicita información sobre la renta de consultorios.",
};

const benefits = [
  {
    title: "Comunidad multidisciplinaria",
    text: "Forma parte de un grupo de especialistas que colaboran entre sí.",
  },
  {
    title: "Entorno profesional",
    text: "Un espacio moderno y acogedor para recibir a tus pacientes.",
  },
  {
    title: "Visibilidad",
    text: "Tu perfil dentro del catálogo de especialistas de Align Health.",
  },
];

export default function SoyEspecialista() {
  const faqs = faqGroups.find((g) => g.id === "profesionales")?.items ?? [];
  return (
    <>
      <section className="wrap grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">Soy especialista</p>
          <h1 className="mt-5 text-5xl sm:text-6xl">Haz crecer tu práctica dentro de una comunidad de salud</h1>
          <p className="mt-6 max-w-xl text-lg text-stone">
            Align Health es un espacio multidisciplinario donde profesionales de distintas especialidades colaboran
            con una visión integral de la salud.
          </p>
          <a href="#solicitar-informacion" className="btn btn-primary mt-8">
            Solicitar información
          </a>
        </div>
        <div className="lg:col-span-5">
          <Photo label="consultorio" className="aspect-[4/5] rounded-t-[999px] rounded-b-3xl" />
        </div>
      </section>

      <section className="border-y border-line bg-paper/60 py-16">
        <div className="wrap grid gap-10 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border-t border-olive pt-5">
              <h2 className="text-2xl">{b.title}</h2>
              <p className="mt-3 text-sm text-stone">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-10 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl">Los consultorios</h2>
          <p className="mt-4 text-stone">
            Conoce las instalaciones en <Link href="/nuestro-espacio" className="text-olive-deep underline underline-offset-4">Nuestro espacio</Link>.
          </p>
        </div>
        <dl className="space-y-5 text-sm">
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Características de los consultorios</dt>
            <dd className="mt-2"><Pending /></dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Modelo de renta</dt>
            <dd className="mt-2"><Pending label="Pendiente de autorización" /></dd>
          </div>
        </dl>
      </section>

      <section className="wrap pb-20">
        <h2 className="text-4xl">Preguntas frecuentes para profesionales</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="faq py-5">
              <summary className="flex items-center justify-between gap-4 font-serif text-2xl">
                {f.q}
                <span aria-hidden="true" className="faq-icon text-olive transition-transform">+</span>
              </summary>
              <div className="mt-3 max-w-2xl text-stone">{f.answer ?? <Pending />}</div>
            </details>
          ))}
        </div>
      </section>

      <section id="solicitar-informacion" className="bg-butter/50 py-20">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl">Solicita información</h2>
            <p className="mt-5 text-stone">
              Déjanos tus datos y nos pondremos en contacto contigo para platicar sobre el espacio.
            </p>
          </div>
          <div className="lg:col-span-7">
            <LeadForm kind="especialista" />
          </div>
        </div>
      </section>
    </>
  );
}
