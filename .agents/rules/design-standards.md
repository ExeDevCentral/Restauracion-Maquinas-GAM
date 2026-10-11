# Reglas de Diseño de la Workspace (.agents/rules)

1. **Paleta y contraste**: Usar paleta neutra (zinc/slate) con un único color de acento. Nada de degradados saturados ni sombras pesadas de CSS antiguo. Contraste mínimo 4.5:1 (WCAG AA).
2. **Espaciado y jerarquía**: Escala de espaciado amplia (py-16 a py-24 en secciones, gap-6 o gap-8 en grids). Mucho aire entre bloques de contenido.
3. **Tipografía**: Usar Inter o Plus Jakarta Sans. Títulos con tracking ajustado (tracking-tight) y contraste claro de pesos (font-semibold / font-bold vs font-normal con text-muted-foreground).
4. **Bordes y elevación**: Bordes sutiles (border border-border/40), esquinas redondeadas modernas (rounded-xl / rounded-2xl) y sombras difusas (shadow-sm o shadow-md suaves).
5. **Interactividad**: Todos los botones, links y tarjetas deben tener estados hover con transiciones suaves (transition-all duration-200).
