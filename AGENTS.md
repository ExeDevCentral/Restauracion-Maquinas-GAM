# Directiva de Estándares Visuales y de Diseño (AGENTS.md)

Este repositorio sigue reglas estrictas de diseño de interfaces modernas de nivel internacional, inspiradas en los estándares de calidad de shadcn/ui, Vercel y Linear.

## Reglas Obligatorias de Frontend

### 1. Paleta de Color y Contraste
- Base neutra contemporánea (`zinc`/`slate` o marfil atelier limpio).
- Un único color de acento deliberado (`amber` cálido / bronce patrimonial o esmeralda sutil).
- Quedan terminantemente prohibidos:
  - Degradados saturados multicolores.
  - Sombras duras o artificiales de CSS antiguo.
  - Efectos de neón o transparencias sobrecargadas.
- Todo texto debe satisfacer un ratio de contraste mínimo de 4.5:1 (WCAG AA) y 7:1 (WCAG AAA).

### 2. Espaciado y Ritmo
- Escala de espaciado amplia: secciones con `py-16` a `py-24`.
- Separación entre bloques: `gap-6` a `gap-8` en grids.
- Generoso espacio negativo para permitir la respiración del contenido.

### 3. Tipografía
- Fuentes autorizadas: `Plus Jakarta Sans` e `Inter` para interfaz, cuerpo y UI; `Cinzel` reservada para identidad editorial cuando aplique.
- Títulos: `tracking-tight` y pesos firmes (`font-semibold` / `font-bold`).
- Contraste claro de jerarquía: `font-semibold` para títulos frente a `font-normal text-muted-foreground` para párrafos.
- Prohibidas fuentes estándar de sistema sin renderizado moderno (Arial, Times).

### 4. Bordes, Esquinas y Elevación
- Bordes finos y sutiles: `border border-border/40`.
- Esquinas redondeadas modernas: `rounded-xl` y `rounded-2xl` en tarjetas; `rounded-lg` en botones.
- Sombras difusas y elegantes: `shadow-sm` o `shadow-md` suaves (`shadow-black/5`).

### 5. Interactividad
- Todos los botones, links y tarjetas deben tener estados hover con transiciones suaves (`transition-all duration-200`).
- Foco visible por teclado en todos los controles interactivos.
- Prohibidas animaciones constantes, rebotes o transformaciones que llamen la atención sin función.
