# Scribd a PDF

Guarda como PDF las páginas que el visor público de Scribd muestra para un documento. Tiene una app de escritorio para Windows (con instalador) y una versión de línea de comandos.

## App de Windows

### Descargar el instalador

1. En GitHub, abre **Actions → Instalador Windows (Scribd a PDF)** y entra a la última ejecución en verde.
2. Descarga el artefacto **Scribd-a-PDF-Setup** (es un `.zip` con el `.exe`).
3. Ejecuta `Scribd-a-PDF-Setup-<versión>.exe`. Como el instalador no está firmado, Windows SmartScreen puede avisar: **Más información → Ejecutar de todas formas**.

Para publicar una versión como *Release* descargable, crea y sube un tag `scribd-dl-v1.0.0`:

```bash
git tag scribd-dl-v1.0.0
```

```bash
git push origin scribd-dl-v1.0.0
```

### Uso

Pega uno o varios enlaces (uno por línea), elige la carpeta y pulsa **Descargar**. Cada documento muestra su avance; al terminar, **Mostrar archivo** lo abre en el Explorador. La carpeta por defecto es `Descargas\Scribd`.

### Compilar el instalador en tu PC (Windows)

```bash
npm install
```

```bash
npm run dist:win
```

El `.exe` queda en `dist/`. Para abrir la app sin instalar: `npm run gui`.

## Línea de comandos

```bash
npm install
```

```bash
npx playwright install chromium
```

```bash
node scribd-dl.mjs "https://es.scribd.com/document/463859555/25-Carpeta-Minima-Odun-de-Ifa" --out descargas
```

`--headful` abre el navegador visible para depurar.

## Límites

- Solo captura lo que Scribd muestra en su visor embebido público. Las páginas reservadas para suscriptores salen vacías o borrosas (se avisa).
- Si Scribd cambia el HTML de su visor, habrá que ajustar el selector `.outer_page` y el CSS de `lib/scribd-url.mjs`.
- Úsalo solo con documentos que tengas derecho a guardar.
