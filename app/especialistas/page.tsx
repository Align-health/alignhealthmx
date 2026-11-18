import type { Metadata } from "next";
import SpecialistGrid from "@/components/SpecialistGrid";
import { specialists } from "@/content/specialists";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Catálogo de especialistas",
  description:
    "Conoce a los especialistas de Align Health, consulta su trayectoria y solicita una cita a través de nuestros canales oficiales.",
};

export default function Especialistas() {
  const filters = services.map((s) => ({ slug: s.slug, name: s.name }));
  return (
    <section className="wrap pb-10 pt-14 lg:pt-24">
      <p className="eyebrow">Especialistas</p>
      <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Encuentra a tu especialista</h1>
      <p className="mt-6 max-w-2xl text-lg text-stone">
        Consulta la trayectoria de cada profesional. Para solicitar una cita, contáctanos por los canales oficiales de
        Align Health.
      </p>
      <div className="mt-12">
        <SpecialistGrid specialists={specialists} filters={filters} />
      </div>
    </section>
  );
}
