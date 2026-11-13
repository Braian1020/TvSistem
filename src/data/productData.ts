export interface ProductBenefit {
  id: string;
  title: string;
  description: string;
  iconName: 'tv' | 'sliders' | 'zap' | 'shield' | 'wifi' | 'truck';
}

export interface CompatibleAppCategory {
  id: string;
  title: string;
  examples: string;
  description: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface IncludedItem {
  id: string;
  name: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PRODUCT_PRICE = 'S/ 250.00';

export const PURCHASE_HIGHLIGHTS = [
  'Un solo pago por el equipo.',
  'Delivery gratis en Chiclayo.',
  'Sistema configurado.',
  'Garantía de 3 meses.',
];

export const PRODUCT_BENEFITS: ProductBenefit[] = [
  {
    id: 'no-new-tv',
    title: 'Aprovecha tu televisor actual',
    description:
      'Convierte cualquier televisor convencional o Smart TV desactualizado en un centro de entretenimiento con sistema Android.',
    iconName: 'tv',
  },
  {
    id: 'ready-to-use',
    title: 'Entrega lista para usar',
    description:
      'Recibes el equipo previamente configurado y probado por POOLSTORE para que solo tengas que conectarlo.',
    iconName: 'sliders',
  },
  {
    id: 'single-payment',
    title: 'Un solo pago sin mensualidades ocultas',
    description:
      'Pagas S/ 250.00 una única vez por el dispositivo físico. Las plataformas de suscripción son opcionales según tu cuenta.',
    iconName: 'zap',
  },
  {
    id: 'warranty',
    title: 'Garantía y respaldo directo',
    description:
      'Incluye 3 meses de garantía por defectos de fábrica y acceso permanente a nuestro Centro de Ayuda para clientes.',
    iconName: 'shield',
  },
];

export const COMPATIBLE_APPS: CompatibleAppCategory[] = [
  {
    id: 'movies-series',
    title: 'Películas y series',
    examples: 'Netflix, Prime Video, Disney+, Max y plataformas similares',
    description:
      'Instala tus aplicaciones oficiales favoritas e inicia sesión con tu propia cuenta de suscripción.',
  },
  {
    id: 'videos',
    title: 'Videos y contenido en línea',
    examples: 'YouTube y plataformas educativas o de entretenimiento',
    description:
      'Reproduce videos musicales, tutoriales, transmisiones en vivo y canales abiertos disponibles en la web.',
  },
  {
    id: 'music',
    title: 'Música y audio en pantalla grande',
    examples: 'Spotify, YouTube Music y radios por internet',
    description:
      'Escucha tus listas de reproducción favoritas usando los parlantes de tu televisor o equipo de sonido.',
  },
  {
    id: 'live-tv',
    title: 'Televisión por internet y multimedia',
    examples: 'Aplicaciones compatibles de TV en vivo y reproductores locales',
    description:
      'Accede a canales digitales por internet y reproduce fotos o videos propios desde puertos USB.',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Conecta el cable HDMI al televisor',
    description:
      'Une el TV Box a cualquier puerto HDMI disponible de tu televisor y enchufa el adaptador de corriente.',
  },
  {
    step: '02',
    title: 'Selecciona la entrada HDMI',
    description:
      'Con el control de tu televisor, elige el canal o fuente HDMI donde conectaste el dispositivo.',
  },
  {
    step: '03',
    title: 'Conéctalo a tu red Wi-Fi',
    description:
      'Ingresa la clave de tu internet Wi-Fi (o conecta un cable de red Ethernet) desde el menú de Ajustes.',
  },
  {
    step: '04',
    title: 'Disfruta con el control remoto',
    description:
      'Navega por la pantalla principal, abre tus aplicaciones compatibles e inicia sesión con tus cuentas.',
  },
];

export const INCLUDED_ITEMS: IncludedItem[] = [
  {
    id: 'box',
    name: 'Equipo Sistema Android TV Box',
    detail: 'Configurado y verificado por POOLSTORE antes de la entrega.',
  },
  {
    id: 'remote',
    name: 'Control remoto incluido',
    detail: 'Práctico, liviano y listo para navegar por todos los menús (usa 2 pilas AAA).',
  },
  {
    id: 'hdmi',
    name: 'Cable HDMI',
    detail: 'Para conectar audio y video digital directamente a tu televisor.',
  },
  {
    id: 'power',
    name: 'Adaptador de corriente',
    detail: 'Fuente de alimentación compatible con tomacorrientes estándar.',
  },
  {
    id: 'guide',
    name: 'Acceso al Centro de Ayuda',
    detail: 'Guía de primeros pasos, mapa interactivo del control y soporte por WhatsApp.',
  },
];

export const TV_COMPATIBILITY = [
  {
    title: 'Televisores LED y LCD con HDMI',
    detail: 'Compatibilidad directa usando el cable HDMI incluido en la caja.',
  },
  {
    title: 'Smart TV antiguos o lentos',
    detail: 'Renueva el sistema de televisores Smart cuyas aplicaciones dejaron de actualizarse.',
  },
  {
    title: 'Televisores Plasma o monitores HDMI',
    detail: 'Funciona sin inconvenientes mientras cuenten con entrada HDMI para imagen y sonido.',
  },
  {
    title: 'Televisores antiguos sin HDMI (solo AV/RCA)',
    detail: 'Requieren un cable o convertidor AV compatible adicional (consúltanos antes de comprar).',
  },
];

export const CONNECTION_REQUIREMENTS = [
  {
    title: 'Conexión a internet estable',
    detail: 'Red Wi-Fi en casa o cable de red Ethernet conectado directamente al router.',
  },
  {
    title: 'Televisor con entrada HDMI',
    detail: 'Puerto HDMI libre en la parte trasera o lateral del televisor.',
  },
  {
    title: 'Tomacorriente cercano',
    detail: 'Para conectar el adaptador de energía del TV Box junto al televisor.',
  },
];

export const DELIVERY_CONDITIONS = [
  {
    title: 'Delivery gratis en Chiclayo',
    detail: 'Coordinamos la entrega a domicilio en Chiclayo sin costo adicional de envío.',
  },
  {
    title: 'Pago único de S/ 250.00',
    detail: 'Cancelas al momento de confirmar o recibir tu equipo, sin suscripciones obligatorias con POOLSTORE.',
  },
  {
    title: 'Garantía de 3 meses',
    detail: 'Cobertura de 3 meses por defectos de fabricación del equipo (no cubre daños por golpes, humedad o variación eléctrica).',
  },
];

export const PRODUCT_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿El precio de S/ 250.00 incluye suscripciones de pago como Netflix o Disney+?',
    answer:
      'No. Los S/ 250.00 corresponden únicamente a la compra del equipo Sistema Android TV Box ya configurado. Las plataformas de streaming de pago requieren que inicies sesión con tu propia cuenta o suscripción activa.',
  },
  {
    id: 'faq-2',
    question: '¿Funciona en un televisor que no es Smart TV?',
    answer:
      'Sí. Esa es precisamente su función principal: si tu televisor tiene un puerto HDMI, el TV Box le agrega sistema Android para acceder a aplicaciones compatibles por internet.',
  },
  {
    id: 'faq-3',
    question: '¿Se paga alguna mensualidad a POOLSTORE por usar el TV Box?',
    answer:
      'No. Es un único pago de S/ 250.00 por el equipo. No cobramos mensualidades por el dispositivo.',
  },
  {
    id: 'faq-4',
    question: '¿Cómo se realiza la entrega en Chiclayo?',
    answer:
      'Presionando el botón de compra por WhatsApp coordinamos directamente el punto y horario de entrega gratuita dentro de Chiclayo.',
  },
  {
    id: 'faq-5',
    question: '¿Qué cubre la garantía de 3 meses?',
    answer:
      'Cubre fallas técnicas de fabricación en el funcionamiento normal del TV Box durante los primeros 3 meses desde la entrega. Además, cuentas con nuestro Centro de Ayuda para resolver dudas de uso.',
  },
];
