/** Marca visible de dato pendiente de confirmar. */
export default function Pending({ label = "Por confirmar" }: { label?: string }) {
  return (
    <span className="inline-block rounded-full border border-dashed border-olive/60 px-3 py-0.5 text-xs uppercase tracking-wider text-stone">
      {label}
    </span>
  );
}

/** Muestra el valor si existe; si no, la marca de pendiente. */
export function Val({ v }: { v: string | null | undefined }) {
  return v ? <>{v}</> : <Pending />;
}

export function ListOrPending({ items }: { items: string[] | null | undefined }) {
  if (!items || items.length === 0) return <Pending />;
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-olive">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
