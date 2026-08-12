# Love Surprise

Proyecto de experiencia interactiva en HTML/CSS/JS con animaciones modernas y lógica escalable.

## Estructura actual

- `public/` - archivos estáticos como música, imágenes, sonidos, íconos y fuentes.
- `src/` - código fuente del proyecto.
  - `src/assets/` - recursos del proyecto.
  - `src/styles/` - estilos globales, animaciones y responsive.
  - `src/js/` - lógica de aplicación y efectos.
  - `src/components/` - componentes de UI.
  - `src/main.js` - entrada principal.
- `vite.config.js` - configuración de Vite.
- `package.json` - scripts y dependencias.

## Scripts

- `npm run dev` - iniciar servidor de desarrollo Vite.
- `npm run build` - generar build de producción.
- `npm run preview` - vista previa local de la versión de producción.

## Estado del Sprint 1

- Se creó la arquitectura base para Vite.
- Se migró la página de bienvenida a `src/components/Welcome.js`.
- Se añadió `src/styles/` con variables, animaciones, layout, componentes y responsive.
- Se agregó lógica de inicio y partículas en `src/js/app.js` y `src/js/particles.js`.
- Se ajustó `index.html` para cargar `src/main.js` como módulo.

## Siguientes pasos

1. Implementar las cuatro cajas 3D y la selección interactiva.
2. Añadir animaciones de juego y cuenta regresiva.
3. Continuar con apertura de caja y sobre en Sprint 3.
4. Completar la experiencia con carta animada, foto, música y premio.

> Nota: el entorno actual no tiene `npm` disponible, por lo que la instalación de dependencias debe realizarse cuando Node.js esté presente.
