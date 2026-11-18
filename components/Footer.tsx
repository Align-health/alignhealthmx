import Link from "next/link";
import Wordmark from "./Wordmark";
import Pending from "./Pending";
import { site, instagramUrl, whatsappLink } from "@/content/site";
import { legalPages } from "@/content/legal";
import { services } from "@/content/services";

export default function Footer() {
  const c = site.contact;
  return (
    <footer className="mt-24 bg-olive-deep text-cream">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <Wordmark className="text-2xl [&_span]:!text-cream" />
          <p className="max-w-xs text-sm text-cream/75">{site.descriptor}</p>
        </div>

        <div>
          <h2 className="eyebrow !text-butter">Servicios</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-cream/80 hover:text-butter">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow !text-butter">Align Health</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/quienes-somos", "Quiénes somos"],
              ["/especialistas", "Especialistas"],
              ["/nuestro-espacio", "Nuestro espacio"],
              ["/soy-especialista", "Soy especialista"],
              ["/preguntas-frecuentes", "Preguntas frecuentes"],
              ["/blog", "Blog"],
              ["/contacto", "Contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-cream/80 hover:text-butter">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow !text-butter">Contacto</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li>{c.fullAddress ?? c.zone}</li>
            <li>
              <a href={whatsappLink()} className="hover:text-butter">
                WhatsApp {c.whatsappDisplay}
              </a>
            </li>
            <li>{c.email ?? <Pending label="Correo por confirmar" />}</li>
            <li>{c.hours ?? <Pending label="Horarios por confirmar" />}</li>
            <li>
              <a href={instagramUrl} className="hover:text-butter" rel="noopener noreferrer">
                Instagram @{c.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© Align Health. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legalPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/legal/${p.slug}`} className="hover:text-butter">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
