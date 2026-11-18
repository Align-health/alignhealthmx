"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";
import { whatsappLink } from "@/content/site";

const nav = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/especialistas", label: "Especialistas" },
  { href: "/nuestro-espacio", label: "Nuestro espacio" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" onClick={close} className="text-xl lg:text-2xl" aria-label="Align Health, inicio">
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="whitespace-nowrap text-sm tracking-wide text-ink/80 transition-colors hover:text-olive"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/soy-especialista" className="btn btn-ghost">
            Soy especialista
          </Link>
          <a
            href={whatsappLink("Hola, me gustaría solicitar una cita en Align Health.")}
            className="btn btn-primary"
          >
            Solicitar cita
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-line/70 bg-cream xl:hidden"
        >
          <div className="wrap flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                className="border-b border-line/60 py-3.5 font-serif text-2xl"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/soy-especialista" onClick={close} className="btn btn-ghost">
                Soy especialista
              </Link>
              <a
                href={whatsappLink("Hola, me gustaría solicitar una cita en Align Health.")}
                className="btn btn-primary"
              >
                Solicitar cita
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
