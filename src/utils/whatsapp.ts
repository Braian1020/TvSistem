export const POOLSTORE_WHATSAPP_NUMBER = '51903566655';
export const POOLSTORE_WHATSAPP_DISPLAY = '+51 903 566 655';

export const PURCHASE_WHATSAPP_MESSAGE =
  'Hola, POOLSTORE. Quiero comprar el Sistema Android TV Box de S/ 250. ¿Me confirman disponibilidad y entrega?';

export const SUPPORT_WHATSAPP_MESSAGE =
  'Hola, POOLSTORE. Ya compré un TV Box y necesito ayuda con mi dispositivo.';

export function buildWhatsAppUrl(phone: string, message: string): string {
  const sanitizedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}

export function getPurchaseWhatsAppUrl(): string {
  return buildWhatsAppUrl(POOLSTORE_WHATSAPP_NUMBER, PURCHASE_WHATSAPP_MESSAGE);
}

export function getSupportWhatsAppUrl(): string {
  return buildWhatsAppUrl(POOLSTORE_WHATSAPP_NUMBER, SUPPORT_WHATSAPP_MESSAGE);
}

export function getCodeUpdateWhatsAppUrl(appName: string): string {
  const message = `Hola, POOLSTORE. Necesito el código actualizado de Downloader para ${appName} en mi TV Box.`;
  return buildWhatsAppUrl(POOLSTORE_WHATSAPP_NUMBER, message);
}
