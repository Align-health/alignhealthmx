# Align Health: sitio web

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build && npm start   # producción
```

## Decisiones técnicas

| Tema | Decisión | Motivo |
|---|---|---|
| Framework | Next.js 16 (App Router) + TypeScript | SEO, páginas estáticas rápidas, URL propia por servicio y especialista |
| Estilos | Tailwind CSS 4, tokens de marca en `app/globals.css` | Cambiar paleta y fuentes en un solo lugar |
| Fuentes | Cormorant Garamond + Jost, autoalojadas (`@fontsource`) | Provisionales; sin dependencia de Google Fonts |
| Contenido | Archivos en `content/` | Editable hasta que exista el panel (Fase 6) |
| Formularios | Server Action en `lib/actions.ts` | Validación en servidor, campo trampa anti-spam, sin claves en el navegador |
| Indexación | Apagada por defecto | Se activa con `NEXT_PUBLIC_INDEXABLE=true` al publicar |

## Dónde editar

- `content/site.ts`: contacto, dirección, horarios, correo, lema.
- `content/services.ts`: servicios, descripciones y precios.
- `content/specialists.ts`: fichas de especialistas (hay una ficha de ejemplo; bórrala al cargar perfiles reales).
- `content/faq.ts`, `content/legal.ts`, `content/blog.ts`.
- Todo dato en `null` aparece en el sitio como "Por confirmar".

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: dominio final.
- `NEXT_PUBLIC_INDEXABLE`: `true` para permitir buscadores.
- `LEADS_WEBHOOK_URL`: destino de los formularios (solo servidor). Sin esto, el formulario avisa que el envío no está activo.

## Provisional (reemplazar)

Logotipo (texto), colores, tipografías y todas las fotografías. Ver `PENDIENTES.md`.
