import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pending, { ListOrPending, Val } from "@/components/Pending";
import { getService, services } from "@/content/services";
import { specialists } from "@/content/specialists";
import { whatsappLink } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: `${s.short} Atención presencial en Align Health.`,
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <h2 className="text-3xl">{title}</h2>
      <div className="mt-4 text-stone">{children}</div>
    </div>
  );
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const team = specialists.filter((p) => !p.placeholder && p.serviceSlugs.includes(s.slug));
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <article className="wrap pb-10 pt-12 lg:pt-20">
      <nav aria-label="Ruta de navegación" className="text-sm text-stone">
        <Link href="/servicios" className="hover:text-olive">
          Servicios
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{s.name}</span>
      </nav>

      <header className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow">{s.area}</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">{s.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{s.description ?? s.short}</p>
        </div>
        <aside className="rounded-3xl border border-line bg-paper p-7 lg:col-span-4">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="eyebrow">Modalidad</dt>
              <dd className="mt-1">{s.modality}</dd>
            </div>
            <div>
              <dt className="eyebrow">Precio</dt>
              <dd className="mt-1">
                <Val v={s.price} />
              </dd>
            </div>
          </dl>
          <a
            href={whatsappLink(`Hola, me gustaría solicitar una cita de ${s.name} en Align Health.`)}
            className="btn btn-primary mt-7 w-full"
          >
            Solicitar cita
          </a>
        </aside>
      </header>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Block title="Objetivo y alcance">
          <Val v={s.scope} />
        </Block>
        <Block title="Necesidades que atiende">
          <ListOrPending items={s.needs} />
        </Block>
        <Block title="A quién está dirigido">
          <Val v={s.audience} />
        </Block>
        <Block title="Beneficios y acompañamiento">
          <ListOrPending items={s.benefits} />
        </Block>
        <Block title="Qué esperar de una primera consulta">
          <Val v={s.firstVisit} />
        </Block>
        <Block title="Especialistas que ofrecen este servicio">
          {team.length === 0 ? (
            <Pending label="Especialistas por confirmar" />
          ) : (
            <ul className="space-y-2">
              {team.map((p) => (
                <li key={p.slug}>
                  <Link href={`/especialistas/${p.slug}`} className="text-olive-deep underline underline-offset-4">
                    {p.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Block>
      </div>

      <section className="mt-20 border-t border-line pt-10" aria-labelledby="otros">
        <h2 id="otros" className="text-3xl">
          Otros servicios
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/servicios/${o.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm hover:border-olive"
              >
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
