/**
 * Preguntas frecuentes. `answer: null` se muestra como "Por confirmar".
 * Las respuestas de ubicación, especialidades y contacto salen del perfil
 * público de Instagram; el resto está pendiente.
 */
export type Faq = { q: string; answer: string | null };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "pacientes",
    title: "Pacientes",
    items: [
      {
        q: "¿Dónde está ubicado Align Health?",
        answer:
          "Estamos en Plaza Sienna, sobre Av. Fundadores. Puedes abrir la ubicación en Google Maps desde la página de contacto.",
      },
      {
        q: "¿Qué especialidades ofrecen?",
        answer:
          "Nutrición clínica, nutrición deportiva, nutrición materno-infantil, psicología clínica, medicina general, bariatría y obesidad, y valoración de composición corporal con InBody.",
      },
      {
        q: "¿Cómo puedo agendar una consulta?",
        answer:
          "Escríbenos por WhatsApp al 81 3125 2109 y te ayudamos a encontrar al especialista adecuado.",
      },
      { q: "¿Cómo puedo elegir a mi especialista?", answer: null },
      { q: "¿Cuánto cuesta una consulta?", answer: null },
      { q: "¿Qué debo llevar a mi primera consulta?", answer: null },
      { q: "¿Puedo cancelar o reprogramar mi cita?", answer: null },
      { q: "¿Ofrecen consultas virtuales?", answer: null },
    ],
  },
  {
    id: "profesionales",
    title: "Profesionales",
    items: [
      { q: "¿Cómo puedo formar parte de Align Health?", answer: null },
      { q: "¿Qué especialidades pueden integrarse?", answer: null },
      { q: "¿Cómo funciona la renta de consultorios?", answer: null },
      {
        q: "¿Cómo puedo solicitar información?",
        answer:
          "Completa el formulario de la sección Soy especialista y nos pondremos en contacto contigo.",
      },
    ],
  },
];
