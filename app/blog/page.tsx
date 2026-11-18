import type { Metadata } from "next";
import { posts } from "@/content/blog";

// Sin artículos todavía: la página no se indexa hasta que exista contenido.
export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos de salud y bienestar escritos por los especialistas de Align Health.",
  robots: posts.length > 0 ? { index: true, follow: true } : { index: false, follow: true },
};

export default function Blog() {
  return (
    <section className="wrap pb-10 pt-14 lg:pt-24">
      <p className="eyebrow">Blog</p>
      <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl">Salud y bienestar</h1>
      {posts.length === 0 ? (
        <p className="mt-8 max-w-xl text-lg text-stone">
          Estamos preparando los primeros artículos de nuestros especialistas.
        </p>
      ) : null}
    </section>
  );
}
