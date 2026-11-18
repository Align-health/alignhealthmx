import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import Pending, { ListOrPending, Val } from "@/components/Pending";
import { getSpecialist, specialists } from "@/content/specialists";
import { services } from "@/content/services";
import { whatsappLink } from "@/content/site";

export function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialist(slug);
  if (!s) return {};
  if (s.placeholder) {
    return { title: "Ficha de ejemplo", robots: { index: false, follow: false } };
  }
  const name = s.fullName ?? "Especialista";
  return {
    title: name,
    description: [s.profession, s.specialty].filter(Boolean).join(" · ") + " en Align Health.",
  };
}

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-5">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-3 text-ink/85">{children}</div>
    </div>
  );
}

export default async function EspecialistaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSpecialist(slug);
  if (!s) notFound();

  const offered = services.filter((x) => s.serviceSlugs.includes(x.slug));
  const name = s.fullName ?? "Especialista por confirmar";

  return (
    <article className="wrap pb-10 pt-12 lg:pt-20">
      <nav aria-label="Ruta de navegación" className="text-sm text-stone">
        <Link href="/especialistas" className="hover:text-olive">
          Especialistas
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{name}</span>
      </nav>

      {s.placeholder && (
        <p className="mt-6 rounded-2xl border border-dashed border-olive/50 bg-butter/40 px-5 py-3 text-sm">
          Ficha de ejemplo. Muestra la estructura del perfil; los datos reales se agregarán cuando estén confirmados.
        </p>
      )}

      <header className="mt-10 grid gap-10 lg:grid-cols-12">
        <Photo label="foto del especialista" className="aspect-[4/5] rounded-t-[999px] rounded-b-3xl lg:col-span-4" />
        <div className="lg:col-span-8 lg:pt-6">
          <p className="eyebrow">{s.specialty ?? "Especialidad por confirmar"}</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">{name}</h1>
          <p className="mt-3 text-lg text-stone">
            <Val v={s.profession} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                s.fullName
                  ? `Hola, me gustaría solicitar una cita con ${s.fullName} en Align Health.`
                  : "Hola, me gustaría solicitar una cita en Align Health.",
              )}
              className="btn btn-primary"
            >
              Solicitar cita
            </a>
            <Link href="/contacto" className="btn btn-ghost">
              Contacto
            </Link>
          </div>
          <p className="mt-4 text-xs text-stone">
            Las citas se gestionan por los canales oficiales de Align Health.
          </p>
        </div>
      </header>

      <div className="mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
        <Row title="Enfoque profesional">
          <Val v={s.approach} />
        </Row>
        <Row title="Experiencia profesional">
          <Val v={s.experience} />
        </Row>
        <Row title="Formación académica">
          <ListOrPending items={s.education} />
        </Row>
        <Row title="Certificaciones">
          <ListOrPending items={s.certifications} />
        </Row>
        <Row title="Cédula profesional">
          <Val v={s.cedula} />
        </Row>
        <Row title="Áreas de atención">
          <ListOrPending items={s.careAreas} />
        </Row>
        <Row title="Población que atiende">
          <Val v={s.population} />
        </Row>
        <Row title="Servicios que ofrece">
          {offered.length === 0 ? (
            <Pending />
          ) : (
            <ul className="space-y-1">
              {offered.map((o) => (
                <li key={o.slug}>
                  <Link href={`/servicios/${o.slug}`} className="text-olive-deep underline underline-offset-4">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Row>
        <Row title="Modalidad de atención">
          <Val v={s.modality} />
        </Row>
        <Row title="Horarios disponibles">
          <Val v={s.schedule} />
        </Row>
        <Row title="Precio de consulta">
          <Val v={s.price} />
        </Row>
      </div>
    </article>
  );
}
