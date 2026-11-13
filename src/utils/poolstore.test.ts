import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, getPageTitle } from './routes';
import {
  POOLSTORE_WHATSAPP_NUMBER,
  PURCHASE_WHATSAPP_MESSAGE,
  SUPPORT_WHATSAPP_MESSAGE,
  buildWhatsAppUrl,
  getPurchaseWhatsAppUrl,
  getSupportWhatsAppUrl,
  getCodeUpdateWhatsAppUrl,
} from './whatsapp';
import { filterTroubleshootingItems, normalizeSearchText } from './troubleshooting';
import { filterPreinstalledApps } from './downloader';
import {
  getDrivePreviewUrl,
  getDriveThumbnailUrl,
  getAvailableTutorialCategories,
  filterTutorialVideos,
} from './tutorials';
import { TROUBLESHOOTING_ITEMS, PREINSTALLED_APPS, getRemoteButtonById } from '../data/helpData';
import { TUTORIAL_VIDEOS } from '../data/tutorialsData';

test('normalizeRoute maps valid routes and defaults unknown paths to /', () => {
  assert.equal(normalizeRoute('/'), '/');
  assert.equal(normalizeRoute('/comprar'), '/comprar');
  assert.equal(normalizeRoute('/comprar/'), '/comprar');
  assert.equal(normalizeRoute('/SOY-CLIENTE'), '/soy-cliente');
  assert.equal(normalizeRoute('/ropa-vieja'), '/');
  assert.equal(normalizeRoute('/carrito'), '/');
});

test('getPageTitle returns Spanish titles for each route', () => {
  assert.equal(getPageTitle('/'), 'POOLSTORE – Sistema Android TV Box');
  assert.equal(getPageTitle('/comprar'), 'Comprar TV Box – POOLSTORE');
  assert.equal(getPageTitle('/soy-cliente'), 'Centro de Ayuda – POOLSTORE');
});

test('WhatsApp URLs contain exact phone number and encoded messages', () => {
  const purchaseUrl = getPurchaseWhatsAppUrl();
  assert.ok(purchaseUrl.startsWith(`https://wa.me/${POOLSTORE_WHATSAPP_NUMBER}?text=`));
  assert.equal(
    decodeURIComponent(purchaseUrl.split('?text=')[1]),
    PURCHASE_WHATSAPP_MESSAGE
  );

  const supportUrl = getSupportWhatsAppUrl();
  assert.ok(supportUrl.startsWith(`https://wa.me/${POOLSTORE_WHATSAPP_NUMBER}?text=`));
  assert.equal(
    decodeURIComponent(supportUrl.split('?text=')[1]),
    SUPPORT_WHATSAPP_MESSAGE
  );

  const codeUrl = getCodeUpdateWhatsAppUrl('Xuper TV');
  assert.ok(codeUrl.startsWith(`https://wa.me/${POOLSTORE_WHATSAPP_NUMBER}?text=`));
  assert.ok(decodeURIComponent(codeUrl.split('?text=')[1]).includes('Xuper TV'));

  assert.equal(
    buildWhatsAppUrl('+51 903 566 655', 'Prueba'),
    'https://wa.me/51903566655?text=Prueba'
  );
});

test('troubleshooting search is accent-insensitive and filters accurately', () => {
  assert.equal(normalizeSearchText('Conexión Wi-Fi'), 'conexion wi-fi');

  const all = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, '');
  assert.equal(all.length, 9);

  const wifiResults = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, 'wifi');
  assert.ok(wifiResults.some((item) => item.id === 'no-wifi'));

  const accentedSearch = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, 'conexion');
  assert.ok(accentedSearch.length >= 1);

  const youtubeResults = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, 'YouTube');
  assert.equal(youtubeResults.length, 1);
  assert.equal(youtubeResults[0].id, 'youtube-error');

  const downloaderResults = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, 'downloader');
  assert.equal(downloaderResults.length, 1);
  assert.equal(downloaderResults[0].id, 'install-error');

  const emptyResults = filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, 'impresora laser');
  assert.equal(emptyResults.length, 0);
});

test('filterPreinstalledApps separates temporal and permanent apps accurately', () => {
  const all = filterPreinstalledApps(PREINSTALLED_APPS, 'all');
  assert.equal(all.length, 4);

  const temporal = filterPreinstalledApps(PREINSTALLED_APPS, 'temporal');
  assert.equal(temporal.length, 2);
  const xuper = temporal.find((app) => app.id === 'xuper-tv');
  assert.ok(xuper);
  assert.equal(xuper.downloaderCode, '5975927');
  assert.equal(xuper.status, 'Activo');
  assert.ok(temporal.some((app) => app.id === 'youtube-sin-anuncios'));

  const permanent = filterPreinstalledApps(PREINSTALLED_APPS, 'permanente');
  assert.equal(permanent.length, 2);
});

test('tutorial library helpers build valid Drive URLs, non-empty categories, and accurate filters', () => {
  assert.equal(TUTORIAL_VIDEOS.length, 5);
  assert.equal(
    getDrivePreviewUrl('1rOVmeg4VWk9qNptMV1r5UkBaV2w-5gqd'),
    'https://drive.google.com/file/d/1rOVmeg4VWk9qNptMV1r5UkBaV2w-5gqd/preview'
  );
  assert.equal(
    getDriveThumbnailUrl('1rOVmeg4VWk9qNptMV1r5UkBaV2w-5gqd', 640),
    'https://drive.google.com/thumbnail?id=1rOVmeg4VWk9qNptMV1r5UkBaV2w-5gqd&sz=w640'
  );

  const categories = getAvailableTutorialCategories(TUTORIAL_VIDEOS);
  assert.deepEqual(categories, ['Solución de problemas', 'Configuración', 'Aplicaciones']);

  const xuperMatches = filterTutorialVideos(TUTORIAL_VIDEOS, 'xuper');
  assert.equal(xuperMatches.length, 5);

  const codeMatches = filterTutorialVideos(TUTORIAL_VIDEOS, '5975927');
  assert.equal(codeMatches.length, 1);

  const categoryMatches = filterTutorialVideos(TUTORIAL_VIDEOS, '', 'Configuración');
  assert.equal(categoryMatches.length, 2);

  const emptyMatches = filterTutorialVideos(TUTORIAL_VIDEOS, 'video inexistente');
  assert.equal(emptyMatches.length, 0);
});

test('getRemoteButtonById returns exact button or safe fallback', () => {
  assert.equal(getRemoteButtonById('home').label, 'Inicio (Home)');
  assert.equal(getRemoteButtonById('ok').shortLabel, 'OK');
  assert.equal(getRemoteButtonById('unknown-btn').id, 'power');
});
