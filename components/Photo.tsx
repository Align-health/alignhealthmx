/** Espacio reservado para una fotografía real. Reemplazar con <Image> al recibirlas. */
export default function Photo({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Fotografía pendiente: ${label}`}
      className={`relative overflow-hidden bg-sage/45 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,253,245,0.55),transparent_60%)]" />
      <span className="absolute bottom-3 left-4 right-4 text-[0.68rem] uppercase tracking-[0.18em] text-olive-deep/70">
        Fotografía pendiente · {label}
      </span>
    </div>
  );
}
