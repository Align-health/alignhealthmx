import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Pending from "@/components/Pending";
import Photo from "@/components/Photo";
import { site, instagramUrl, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Align Health por WhatsApp, encuentra nuestra ubicación y solicita tu cita.",
};

export default function Contacto() {
  const c = site.contact;
  return (
    <>
      <section className="wrap pb-12 pt-14 lg:pt-24">
        <p className="eyebrow">Contacto</p>
        <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Hablemos</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hola, me gustaría solicitar una cita en Align Health.")}
            className="btn btn-primary"
          >
            Escribir por WhatsApp
          </a>
          <a href={c.mapsUrl} className="btn btn-ghost" rel="noopener noreferrer">
            Cómo llegar
          </a>
        </div>
      </section>

      <section className="wrap grid gap-14 pb-20 lg:grid-cols-12">
        <dl className="space-y-6 lg:col-span-5">
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Ubicación</dt>
            <dd className="mt-2">{c.fullAddress ?? c.zone}</dd>
            {!c.fullAddress && <dd className="mt-2"><Pending label="Dirección exacta por confirmar" /></dd>}
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">WhatsApp</dt>
            <dd className="mt-2">
              <a href={whatsappLink()} className="underline underline-offset-4">
                {c.whatsappDisplay}
              </a>
            </dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Teléfono</dt>
            <dd className="mt-2">{c.phone ?? <Pending />}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Correo electrónico</dt>
            <dd className="mt-2">{c.email ?? <Pending />}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Horarios de atención</dt>
            <dd className="mt-2">{c.hours ?? <Pending />}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="eyebrow">Instagram</dt>
            <dd className="mt-2">
              <a href={instagramUrl} className="underline underline-offset-4" rel="noopener noreferrer">
                @{c.instagram}
              </a>
            </dd>
          </div>
        </dl>

        <div className="lg:col-span-7">
          <h2 className="text-3xl">Envíanos un mensaje</h2>
          <div className="mt-6">
            <LeadForm kind="contacto" />
          </div>
        </div>
      </section>

      <section className="wrap pb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <div
            role="img"
            aria-label="Mapa interactivo pendiente"
            className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-olive/50 bg-paper text-center text-xs uppercase tracking-[0.18em] text-stone sm:col-span-1"
          >
            Mapa interactivo pendiente
          </div>
          <Photo label="exterior del edificio" className="aspect-[4/3] rounded-2xl" />
          <Photo label="acceso" className="aspect-[4/3] rounded-2xl" />
        </div>
      </section>
    </>
  );
}
