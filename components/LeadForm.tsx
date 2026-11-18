"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/lib/actions";

type Kind = "contacto" | "especialista";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-stone/60 focus:border-olive";

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (obligatorio)</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-stone">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-[#8a3b2a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function LeadForm({ kind }: { kind: Kind }) {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, null);
  const e = state?.errors ?? {};
  const isSpec = kind === "especialista";
  const describe = (id: string) => (e[id] ? `${id}-error` : undefined);

  if (state?.ok) {
    return (
      <div role="status" className="rounded-2xl border border-olive/30 bg-paper p-8">
        <p className="font-serif text-2xl text-olive-deep">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5" aria-describedby="form-status">
      <input type="hidden" name="kind" value={kind} />
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">No llenar este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="nombre" label="Nombre completo" required error={e.nombre}>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          className={inputCls}
          aria-invalid={!!e.nombre}
          aria-describedby={describe("nombre")}
        />
      </Field>

      {isSpec && (
        <Field id="profesion" label="Profesión y especialidad" required error={e.profesion}>
          <input
            id="profesion"
            name="profesion"
            type="text"
            className={inputCls}
            aria-invalid={!!e.profesion}
            aria-describedby={describe("profesion")}
          />
        </Field>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="telefono" label="Teléfono" required={isSpec} error={e.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputCls}
            aria-invalid={!!e.telefono}
            aria-describedby={describe("telefono")}
          />
        </Field>
        <Field id="correo" label="Correo electrónico" required={isSpec} error={e.correo}>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            className={inputCls}
            aria-invalid={!!e.correo}
            aria-describedby={describe("correo")}
          />
        </Field>
      </div>

      {isSpec && (
        <Field
          id="uso"
          label="Modalidad o necesidades de uso del consultorio"
          hint="Por ejemplo: días y horarios que te interesan."
        >
          <input id="uso" name="uso" type="text" className={inputCls} />
        </Field>
      )}

      <Field
        id="mensaje"
        label={isSpec ? "Mensaje adicional" : "Mensaje"}
        required={!isSpec}
        error={e.mensaje}
        hint={isSpec ? undefined : "Por favor no incluyas información clínica en este formulario."}
      >
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          className={inputCls}
          aria-invalid={!!e.mensaje}
          aria-describedby={describe("mensaje")}
        />
      </Field>

      <div id="form-status" aria-live="polite">
        {state && !state.ok ? <p className="text-sm text-[#8a3b2a]">{state.message}</p> : null}
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
        {pending ? "Enviando…" : isSpec ? "Solicitar información" : "Enviar mensaje"}
      </button>
      <p className="text-xs text-stone">
        Al enviar este formulario aceptas el aviso de privacidad, que está pendiente de publicación.
      </p>
    </form>
  );
}
