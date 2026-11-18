/**
 * LOGOTIPO PROVISIONAL (solo texto). Reemplazar por el SVG oficial de Align Health
 * cuando se reciba el archivo. No es el logotipo oficial.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`} aria-label="Align Health">
      <span className="font-serif text-[1.7em] italic leading-none text-olive-deep">Align</span>
      <span className="text-[1.05em] font-light tracking-wide text-olive-deep">health</span>
    </span>
  );
}
