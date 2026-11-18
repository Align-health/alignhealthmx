import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { services } from "@/content/services";
import { whatsappLink } from "@/content/site";

const pillars = [
  {
    title: "Colaboración entre especialidades",
    text: "Profesionales de distintas disciplinas que comparten una visión integral de la salud.",
  },
  {
    title: "Atención personalizada",
    text: "Una atención centrada en las necesidades de cada persona, con trato humano y cercano.",
  },
  {
    title: "Actualización constante",
    text: "Especialistas capacitados que se mantienen en formación continua.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="wrap grid items-center gap-12 pb-16 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="eyebrow">Nutrición · Medicina · Psicología</p>
          <h1 className="mt-6 text-[2.75rem] sm:text-6xl lg:text-7xl">
            Un espacio multidisciplinario para tu <em className="text-olive">salud y bienestar</em> integral
          </h1>
          <p className="mt-7 max-w-xl text-lg text-stone">
            Align Health reúne a una comunidad de especialistas que trabajan en conjunto para mejorar tu calidad
            de vida, con atención personalizada y humana.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              href="/servicios"
              className="group rounded-3xl border border-olive bg-olive p-6 text-paper transition-colors hover:bg-olive-deep"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-butter">Primera vez aquí</span>
              <span className="mt-2 block font-serif text-3xl">Soy paciente</span>
              <span className="mt-2 block text-sm text-paper/80">
                Conoce los servicios y encuentra a tu especialista.
              </span>
              <span aria-hidden="true" className="mt-4 block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/soy-especialista"
              className="group rounded-3xl border border-olive/40 bg-paper p-6 transition-colors hover:border-olive"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-olive">Profesionales de la salud</span>
              <span className="mt-2 block font-serif text-3xl text-olive-deep">Soy especialista</span>
              <span className="mt-2 block text-sm text-stone">
                Conoce Align Health y solicita información sobre consultorios.
              </span>
              <span aria-hidden="true" className="mt-4 block text-olive transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Photo label="imagen principal" className="aspect-[5/4] w-full rounded-t-[999px] rounded-b-3xl sm:aspect-[4/5]" />
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="border-y border-line bg-paper/60 py-20 lg:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Especialidades</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Atención para cada necesidad</h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 sm:grid-cols-[4rem_1fr_auto]"
                >
                  <span className="text-sm text-olive">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-serif text-2xl transition-colors group-hover:text-olive sm:text-3xl">
                      {s.name}
                    </span>
                    <span className="mt-1 block text-sm text-stone">{s.short}</span>
                  </span>
                  <span aria-hidden="true" className="text-olive transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ENFOQUE MULTIDISCIPLINARIO */}
      <section className="wrap py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Enfoque multidisciplinario</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">La salud se entiende mejor en equipo</h2>
            <p className="mt-6 text-stone">
              Cuando distintas especialidades colaboran, la atención se vuelve más completa y coherente para cada
              persona.
            </p>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {pillars.map((p) => (
              <Reveal key={p.title}>
                <div className="border-t border-olive pt-5">
                  <h3 className="text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-stone">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDAD DE ESPECIALISTAS */}
      <section className="bg-olive-deep py-20 text-cream lg:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow !text-butter">Comunidad</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Conoce a nuestros especialistas</h2>
            <p className="mt-6 max-w-md text-cream/80">
              Consulta la trayectoria de cada profesional y elige a quien mejor se adapte a lo que necesitas.
            </p>
            <Link href="/especialistas" className="btn mt-8 bg-butter text-olive-deep hover:bg-paper">
              Ver especialistas
            </Link>
          </Reveal>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <Photo
                key={i}
                label="especialista"
                className={`aspect-[3/4] rounded-t-[999px] rounded-b-xl ${i === 1 ? "mt-8" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO ESPACIO */}
      <section className="wrap py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Nuestro espacio</p>
          <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Un entorno profesional, moderno y acogedor</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Photo label="recepción" className="aspect-[4/5] rounded-2xl sm:col-span-2 sm:aspect-[16/10]" />
          <Photo label="consultorio" className="aspect-[4/5] rounded-2xl sm:aspect-auto" />
        </div>
        <Link href="/nuestro-espacio" className="btn btn-ghost mt-10">
          Conoce el espacio
        </Link>
      </section>

      {/* CTA FINAL */}
      <section className="wrap pb-6">
        <div className="rounded-[2rem] bg-butter/60 px-6 py-14 text-center sm:px-12 lg:py-20">
          <h2 className="mx-auto max-w-2xl text-4xl sm:text-5xl">¿Quieres agendar una cita?</h2>
          <p className="mx-auto mt-5 max-w-md text-stone">
            Escríbenos y te ayudamos a encontrar al especialista adecuado.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hola, me gustaría solicitar una cita en Align Health.")}
              className="btn btn-primary"
            >
              Escribir por WhatsApp
            </a>
            <Link href="/contacto" className="btn btn-ghost">
              Ver contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
