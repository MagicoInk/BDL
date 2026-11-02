import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseScribdUrl, safeFilename } from './scribd-dl.mjs';

test('extrae id y slug del enlace de documento', () => {
  assert.deepEqual(
    parseScribdUrl('https://es.scribd.com/document/463859555/25-Carpeta-Minima-Odun-de-Ifa'),
    { id: '463859555', slug: '25-Carpeta-Minima-Odun-de-Ifa' },
  );
});

test('acepta /doc/ y /embeds/ sin slug', () => {
  assert.equal(parseScribdUrl('https://www.scribd.com/doc/123/x?y=1').id, '123');
  assert.deepEqual(parseScribdUrl('https://www.scribd.com/embeds/99/content'), { id: '99', slug: 'scribd-99' });
});

test('rechaza enlaces que no son de Scribd', () => {
  assert.throws(() => parseScribdUrl('https://example.com/document/1/a'));
});

test('nombre de archivo seguro', () => {
  assert.equal(safeFilename('Año: Odù/de Ifá'), 'Ano-Odu-de-Ifa.pdf');
  assert.equal(safeFilename('25-Carpeta-Minima-Odun-de-Ifa'), '25-Carpeta-Minima-Odun-de-Ifa.pdf');
});
