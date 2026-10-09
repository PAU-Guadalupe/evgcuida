# Lanzador de EVGCuida en GitHub Pages

Página web que sirve para **entrar en EVGCuida** y para **instalarla en el móvil** (Android y iPhone) como una app, con su icono. Funciona igual que el lanzador de HorariosEVG: se aloja gratis en GitHub Pages y, al abrir el icono instalado, entra directamente en la aplicación de Apps Script.

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La portada: botón «Entrar en EVGCuida» e instrucciones de instalación según el móvil (Android, iPhone u ordenador). |
| `manifest.webmanifest` | Nombre, colores e iconos de la app instalada. |
| `sw.js` | Permite instalarla en Android y que el icono abra al instante. La aplicación de Google nunca se guarda en caché. |
| `icon-192.png`, `icon-512.png`, `maskable-512.png`, `apple-touch-icon.png`, `favicon-32.png` | Iconos de la app (en la raíz, junto a `index.html`). |
| `logo-evgcuida.png`, `logo-escuela.png` | Logos de la portada. |
| `.nojekyll` | Archivo vacío que GitHub Pages necesita para publicar los archivos tal cual. |

## 1. Publicarlo en GitHub (una vez, 5 minutos)

1. Entra en <https://github.com> con la cuenta que usasteis para HorariosEVG (o crea una).
2. Pulsa **New repository**:
   - *Repository name:* `evgcuida`
   - **Public** (GitHub Pages gratuito necesita repositorio público; no contiene datos, solo esta portada).
   - Pulsa **Create repository**.
3. En el repositorio nuevo, pulsa **uploading an existing file** (o *Add file → Upload files*).
   Arrastra **todo el contenido** de esta carpeta (`index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `LEEME.md` y todos los `.png`), **no la carpeta en sí**. Pulsa **Commit changes**.
   > Si el archivo `.nojekyll` no aparece al arrastrar (está oculto), créalo con *Add file → Create new file*, nombre `.nojekyll`, vacío, y *Commit*.
4. **Settings → Pages** → *Build and deployment* → *Source:* **Deploy from a branch** → *Branch:* **main** y **/(root)** → **Save**.
5. En 1–2 minutos aparece arriba: **Your site is live at** `https://USUARIO.github.io/evgcuida/`. Esa es la dirección para el claustro.

## 2. Repartirlo

- Envía la dirección `https://USUARIO.github.io/evgcuida/` al claustro (correo, Classroom, QR en la sala de profesores…).
- Cada persona la abre en el móvil y sigue lo que indica la página:
  - **Android (Chrome):** botón **Instalar EVGCuida**, o menú ⋮ → **Instalar aplicación**.
  - **iPhone/iPad (Safari):** **Compartir** → **Añadir a pantalla de inicio** → **Añadir**.
- Al tocar el icono, aparece un momento la pantalla azul de EVGCuida y se abre la aplicación con la sesión de Google @fundacionloyola.es.

## 3. Mantenimiento

- **Cambios en EVGCuida** (nuevas funciones, diseño…): no hay que tocar nada aquí; el icono abre siempre la última versión.
- **Si cambia la URL de la aplicación** (solo pasa si se crea una implementación *nueva* en lugar de una *nueva versión*): en GitHub abre `index.html` → ✏️ → cambia la línea `var APP_URL = '…'` → *Commit changes*. Los móviles que ya la tienen instalada lo recogen solos al abrirla.
- Los enlaces de los correos (`?inc=…` / `?mej=…`) también funcionan a través del lanzador: `https://USUARIO.github.io/evgcuida/?inc=INC-2026-0005`.

## Relación con las otras formas de instalarla

Este lanzador sustituye, con menos trabajo, a la app de Android (APK) y al perfil de iPhone (`.mobileconfig`) del paquete *EVGCuida-Apps*: no hay que compilar nada ni instalar perfiles. Ambas opciones pueden convivir.
