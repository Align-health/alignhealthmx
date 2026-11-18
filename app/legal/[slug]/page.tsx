import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Pending from "@/components/Pending";
import { getLegalPage, legalPages } from "@/content/legal";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  // Contenido pendiente de revisión: no se indexa.
  return page ? { title: page.title, robots: { index: false, follow: true } } : {};
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <section className="wrap pb-10 pt-14 lg:pt-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">{page.title}</h1>
      <p className="mt-8">
        <Pending label="Contenido pendiente de revisión y aprobación" />
      </p>
    </section>
  );
}
