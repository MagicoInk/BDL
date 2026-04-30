/**
 * Medios de ejemplo: bulldog francés / cachorros.
 * Unsplash (IDs verificados) + Pexels (serie 45879xx — mascotas en interior).
 * Vídeos: Pexels CDN (HD 1280×720, 25fps).
 */

const unsplash = (id: string, w: number, extra = '') =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop${extra}`;

const pexelsJpg = (photoId: number, w: number) =>
  `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Unsplash que responden OK (bulldogs / cachorros del repositorio original). */
const US = [
  '1583511655857-d19b40a7a54e',
  '1583337130417-3346a1be7dee',
  '1583512603806-077998240c7a',
  '1614027164847-1b28cfe1df60',
  '1583511666407-5f06533f2113',
  '1583511655826-05700d52f4d9',
] as const;

/** Más variedad visual — misma sesión estilo “premium pet” en Pexels. */
const PX = [
  4588047, 4587976, 4587998, 4588001, 4588002, 4588003, 4588004, 4588005, 4588006, 4588007, 4588008,
  4588009, 4588010,
] as const;

function unsByIndex(i: number, w: number): string {
  const id = US[i % US.length];
  return unsplash(id, w);
}

function pxByIndex(i: number, w: number): string {
  const id = PX[i % PX.length];
  return pexelsJpg(id, w);
}

/** Alterna Unsplash y Pexels para que no se repita tanto el mismo encuadre. */
export function frenchieByIndex(i: number, w: number): string {
  return i % 2 === 0 ? unsByIndex(Math.floor(i / 2), w) : pxByIndex(Math.floor(i / 2), w);
}

export const frenchieGallery: string[] = [
  ...US.map((id) => unsplash(id, 1600)),
  ...PX.map((id) => pexelsJpg(id, 1600)),
];

export const frenchie = {
  hero: unsplash(US[0], 2400),
  heroCard: pexelsJpg(PX[0], 900),
  studioWide: unsplash(US[1], 2200),
  signatureBg: unsplash(US[2], 2400),
  face1: unsplash(US[0], 220, '&h=220'),
  face2: unsplash(US[3], 220, '&h=220'),
  face3: unsplash(US[1], 220, '&h=220'),
  face4: pexelsJpg(PX[2], 220),
  face5: pexelsJpg(PX[4], 220),
  face6: unsplash(US[4], 220, '&h=220'),
} as const;

export const frenchieVideos = {
  portrait: 'https://videos.pexels.com/video-files/855282/855282-hd_1280_720_25fps.mp4',
  playful: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_25fps.mp4',
} as const;
