"use server";

/**
 * Recepción de formularios (contacto y renta de consultorios).
 * - Validación en servidor, campo trampa anti-spam y límites de longitud.
 * - No se piden datos clínicos.
 * - El envío usa LEADS_WEBHOOK_URL (variable de entorno, solo servidor).
 *   Puede apuntar a Airtable (vía automatización), Make, Zapier o al panel
 *   administrativo de la Fase 6. Si no está configurada, el formulario lo
 *   avisa en lugar de simular que se envió.
 */

export type LeadState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
} | null;

type Kind = "contacto" | "especialista";

const clean = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 8;

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Campo trampa: los humanos no lo ven ni lo llenan.
  if (clean(formData.get("website"), 200)) {
    return { ok: true, message: "Gracias. Recibimos tu mensaje." };
  }

  const kind: Kind = formData.get("kind") === "especialista" ? "especialista" : "contacto";
  const data = {
    nombre: clean(formData.get("nombre"), 120),
    profesion: clean(formData.get("profesion"), 160),
    telefono: clean(formData.get("telefono"), 30),
    correo: clean(formData.get("correo"), 160),
    uso: clean(formData.get("uso"), 300),
    mensaje: clean(formData.get("mensaje"), 1500),
  };

  const errors: Record<string, string> = {};
  if (data.nombre.length < 2) errors.nombre = "Escribe tu nombre completo.";
  if (data.correo && !emailOk(data.correo)) errors.correo = "Revisa el formato del correo.";
  if (data.telefono && !phoneOk(data.telefono)) errors.telefono = "Escribe un teléfono de al menos 8 dígitos.";

  if (kind === "contacto") {
    if (!data.correo && !data.telefono) {
      errors.correo = "Déjanos un correo o un teléfono para responderte.";
    }
    if (data.mensaje.length < 5) errors.mensaje = "Cuéntanos brevemente en qué podemos ayudarte.";
  } else {
    if (data.profesion.length < 2) errors.profesion = "Indica tu profesión y especialidad.";
    if (!data.telefono) errors.telefono = "Escribe un teléfono de contacto.";
    if (!data.correo) errors.correo = "Escribe un correo de contacto.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Revisa los campos marcados.", errors };
  }

  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) {
    return {
      ok: false,
      message:
        "El envío en línea todavía no está activo. Por ahora escríbenos por WhatsApp y te atendemos.",
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tipo: kind, ...data, recibido: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook respondió ${res.status}`);
    return { ok: true, message: "Gracias. Recibimos tu mensaje y te responderemos pronto." };
  } catch {
    return {
      ok: false,
      message: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
    };
  }
}
