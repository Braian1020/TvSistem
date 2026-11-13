import { TroubleshootingItem } from '../utils/troubleshooting';
import { DownloaderStep, PreinstalledApp } from '../utils/downloader';

export interface FirstStepItem {
  id: string;
  stepNumber: string;
  title: string;
  summary: string;
  instructions: string[];
  tip: string;
}

export interface RemoteButtonInfo {
  id: string;
  label: string;
  shortLabel: string;
  group: 'Energía y Control' | 'Navegación' | 'Sistema y Audio' | 'Teclado Numérico';
  functionTitle: string;
  description: string;
  usageTip: string;
}

export interface AppGuideItem {
  id: string;
  title: string;
  summary: string;
  steps: string[];
}

export const FIRST_STEPS: FirstStepItem[] = [
  {
    id: 'step-hdmi',
    stepNumber: '01',
    title: 'Cómo conectar el TV Box al televisor',
    summary: 'Establece la conexión de video y audio entre el equipo y tu pantalla.',
    instructions: [
      'Ubica el puerto HDMI en la parte posterior del TV Box.',
      'Conecta un extremo del cable HDMI incluido en el TV Box.',
      'Conecta el otro extremo del cable en un puerto HDMI disponible de tu televisor (por ejemplo, HDMI 1 o HDMI 2).',
    ],
    tip: 'Anota el número de puerto HDMI (HDMI 1, HDMI 2) para seleccionarlo fácilmente en el siguiente paso.',
  },
  {
    id: 'step-power',
    stepNumber: '02',
    title: 'Cómo conectar el equipo a la corriente',
    summary: 'Alimenta correctamente el TV Box para iniciar el sistema.',
    instructions: [
      'Conecta la punta redonda del adaptador de corriente en la entrada DC 5V / Power del TV Box.',
      'Enchufa el adaptador a un tomacorriente en buen estado (de preferencia usando un estabilizador o supresor de picos).',
      'Verifica que se encienda la luz indicadora frontal del equipo.',
    ],
    tip: 'Coloca dos pilas AAA nuevas en el control remoto antes de empezar a navegar.',
  },
  {
    id: 'step-source',
    stepNumber: '03',
    title: 'Cómo seleccionar la entrada HDMI',
    summary: 'Cambia la señal de tu televisor hacia el puerto donde conectaste el TV Box.',
    instructions: [
      'Enciende tu televisor con su control remoto original.',
      'Presiona el botón SOURCE, INPUT o HDMI en el control de tu televisor.',
      'Elige el puerto exacto donde conectaste el cable (por ejemplo, HDMI 1) y espera entre 15 y 30 segundos a que cargue la pantalla principal.',
    ],
    tip: 'Si ves la pantalla de inicio de Android, la conexión física es correcta.',
  },
  {
    id: 'step-wifi',
    stepNumber: '04',
    title: 'Cómo conectarlo al Wi-Fi',
    summary: 'Conecta el dispositivo a internet para usar tus aplicaciones.',
    instructions: [
      'En la pantalla principal del TV Box, abre el ícono de Ajustes (engranaje).',
      'Ingresa a la sección Red e Internet o Wi-Fi y asegúrate de que esté activado.',
      'Selecciona el nombre de tu red Wi-Fi, escribe la contraseña usando el teclado en pantalla y presiona Conectar.',
    ],
    tip: 'Si tu router está cerca, también puedes conectar un cable de red Ethernet directamente al TV Box para mayor estabilidad.',
  },
  {
    id: 'step-system',
    stepNumber: '05',
    title: 'Cómo configurar el sistema',
    summary: 'Ajusta detalles básicos para una experiencia cómoda desde el primer día.',
    instructions: [
      'Revisa en Ajustes > Preferencias del dispositivo > Fecha y hora que la zona horaria corresponda a Perú (GMT-5) para evitar errores en aplicaciones.',
      'En Ajustes > Pantalla, ajusta el tamaño de pantalla si los bordes se ven ligeramente cortados.',
      'Opcionalmente, inicia sesión con tu cuenta de Google en Play Store para descargar o actualizar aplicaciones compatibles.',
    ],
    tip: 'Una fecha u hora incorrecta suele ser la causa principal por la que YouTube o el navegador no cargan.',
  },
];

export const REMOTE_BUTTONS: RemoteButtonInfo[] = [
  {
    id: 'power',
    label: 'Encendido / Apagado',
    shortLabel: 'PWR',
    group: 'Energía y Control',
    functionTitle: 'Encender o poner en reposo el TV Box',
    description:
      'Presiónalo una vez para encender el dispositivo o ponerlo en modo de espera (reposo).',
    usageTip:
      'Mantén presionado durante unos segundos si deseas ver las opciones de apagado o reinicio completo del sistema.',
  },
  {
    id: 'mute',
    label: 'Silenciar (Mute)',
    shortLabel: 'MUTE',
    group: 'Sistema y Audio',
    functionTitle: 'Silencia el audio temporalmente',
    description:
      'Activa o desactiva el sonido del TV Box de forma inmediata sin alterar el volumen de tu televisor.',
    usageTip: 'Útil cuando necesitas atender una llamada sin pausar la reproducción.',
  },
  {
    id: 'mouse',
    label: 'Modo Ratón / Cursor',
    shortLabel: 'MOUSE',
    group: 'Energía y Control',
    functionTitle: 'Activa un puntero en pantalla',
    description:
      'Muestra una flecha tipo mouse en el televisor que puedes mover con las flechas direccionales y confirmar con OK.',
    usageTip:
      'Ideal para aplicaciones diseñadas para celular o tablet donde los botones normales no responden a las flechas. Vuelve a presionarlo para desactivar el puntero.',
  },
  {
    id: 'vol_up',
    label: 'Subir Volumen (VOL +)',
    shortLabel: 'VOL+',
    group: 'Sistema y Audio',
    functionTitle: 'Aumenta el volumen del sistema Android',
    description: 'Sube el nivel de salida de audio del TV Box.',
    usageTip:
      'Si el volumen del TV Box está al máximo y aún suena bajo, sube el volumen también con el control original de tu televisor.',
  },
  {
    id: 'vol_down',
    label: 'Bajar Volumen (VOL -)',
    shortLabel: 'VOL-',
    group: 'Sistema y Audio',
    functionTitle: 'Disminuye el volumen del sistema Android',
    description: 'Reduce progresivamente el volumen de salida de audio del TV Box.',
    usageTip: 'Puedes mantenerlo presionado para bajar el volumen rápidamente.',
  },
  {
    id: 'up',
    label: 'Flecha Arriba',
    shortLabel: '▲',
    group: 'Navegación',
    functionTitle: 'Desplazamiento hacia arriba',
    description: 'Mueve el selector o el cursor hacia la fila o elemento superior en pantalla.',
    usageTip: 'En reproductores de video, permite acceder a los controles superiores o buscar.',
  },
  {
    id: 'down',
    label: 'Flecha Abajo',
    shortLabel: '▼',
    group: 'Navegación',
    functionTitle: 'Desplazamiento hacia abajo',
    description: 'Mueve el selector o el cursor hacia los elementos inferiores de la pantalla.',
    usageTip: 'Úsalo para recorrer listas de episodios, ajustes o resultados.',
  },
  {
    id: 'left',
    label: 'Flecha Izquierda',
    shortLabel: '◀',
    group: 'Navegación',
    functionTitle: 'Desplazamiento a la izquierda / Retroceder video',
    description: 'Mueve la selección hacia la izquierda o retrocede unos segundos durante un video.',
    usageTip: 'Útil para desplazarte por menús laterales.',
  },
  {
    id: 'right',
    label: 'Flecha Derecha',
    shortLabel: '▶',
    group: 'Navegación',
    functionTitle: 'Desplazamiento a la derecha / Adelantar video',
    description: 'Mueve la selección hacia la derecha o adelanta unos segundos en la reproducción.',
    usageTip: 'Permite moverte por las tarjetas horizontales de películas o aplicaciones.',
  },
  {
    id: 'ok',
    label: 'Botón OK / Confirmar',
    shortLabel: 'OK',
    group: 'Navegación',
    functionTitle: 'Selecciona, abre o pausa',
    description:
      'Confirma la opción resaltada, abre aplicaciones, escribe letras en el teclado en pantalla o pausa/reanuda un video.',
    usageTip: 'Es el botón principal de confirmación en todo el sistema.',
  },
  {
    id: 'home',
    label: 'Inicio (Home)',
    shortLabel: 'INICIO',
    group: 'Sistema y Audio',
    functionTitle: 'Regresa a la pantalla principal',
    description:
      'Te lleva directamente al menú de inicio del TV Box desde cualquier aplicación o pantalla.',
    usageTip:
      'Presiónalo si te sientes perdido dentro de un menú o si deseas cambiar rápidamente de aplicación.',
  },
  {
    id: 'back',
    label: 'Atrás (Back)',
    shortLabel: 'ATRÁS',
    group: 'Sistema y Audio',
    functionTitle: 'Vuelve al paso o pantalla anterior',
    description:
      'Regresa un nivel atrás dentro de las aplicaciones, cierra el teclado en pantalla o sale de un video.',
    usageTip: 'Si una ventana emergente cubre la pantalla, presiona Atrás para cerrarla.',
  },
  {
    id: 'menu',
    label: 'Menú / Opciones',
    shortLabel: 'MENÚ',
    group: 'Sistema y Audio',
    functionTitle: 'Abre opciones adicionales o selector de aplicaciones',
    description:
      'Despliega menús contextuales en ciertas aplicaciones o muestra opciones rápidas del lanzador.',
    usageTip: 'En la pantalla de inicio permite administrar accesos directos según la app.',
  },
  {
    id: 'numbers',
    label: 'Teclado Numérico (0–9) y Borrar',
    shortLabel: '0–9 / DEL',
    group: 'Teclado Numérico',
    functionTitle: 'Ingreso rápido de números y borrado',
    description:
      'Permite escribir contraseñas numéricas, códigos PIN o cambiar canales en aplicaciones de televisión compatibles. El botón DEL borra el último carácter.',
    usageTip: 'Ahorra tiempo al escribir tu clave de Wi-Fi si contiene números.',
  },
];

export const LAST_CODES_REVIEW = '12 de noviembre de 2026';

export const DOWNLOADER_TUTORIAL_STEPS: DownloaderStep[] = [
  {
    stepNumber: '01',
    title: 'Abre la aplicación Downloader',
    description:
      'En tu TV Box, ingresa al menú de aplicaciones y abre Downloader (ícono naranja). Si aún no la tienes instalada, búscala gratis en Google Play Store como "Downloader by AFTVnews".',
  },
  {
    stepNumber: '02',
    title: 'Activa el permiso de instalación',
    description:
      'La primera vez que instales una aplicación desde Downloader, el sistema te pedirá activar "Instalar aplicaciones desconocidas". Selecciona Ajustes y activa el interruptor para Downloader.',
  },
  {
    stepNumber: '03',
    title: 'Ingresa el código numérico y presiona Go',
    description:
      'En la pantalla principal (Home), haz clic en la barra blanca de dirección, escribe el código actualizado de la aplicación que deseas instalar o actualizar y presiona el botón "Go".',
  },
  {
    stepNumber: '04',
    title: 'Instala y borra el archivo temporal',
    description:
      'Espera unos segundos a que descargue el archivo, selecciona "Instalar" y luego "Listo" (o Abrir). Al volver a Downloader, elige "Delete" para borrar el instalador y ahorrar espacio.',
  },
];

export const PREINSTALLED_APPS: PreinstalledApp[] = [
  {
    id: 'xuper-tv',
    name: 'Xuper TV',
    purpose: 'Televisión en vivo, películas y series (solución cuando deja de funcionar)',
    category: 'temporal',
    categoryLabel: 'Temporal · Cortesía',
    status: 'Activo',
    downloaderCode: '5975927',
    lastChecked: '12/11/2026',
    notes:
      'Si Xuper TV deja de cargar, desinstala la versión anterior e ingresa el código 5975927 en Downloader. Este código se irá cambiando y actualizando constantemente aquí si ocurre un problema.',
  },
  {
    id: 'youtube-sin-anuncios',
    name: 'YouTube sin anuncios (SmartTube)',
    purpose: 'Reproducción de videos de YouTube sin publicidad en pantalla',
    category: 'temporal',
    categoryLabel: 'Temporal · Cortesía',
    status: 'Activo',
    downloaderCode: '28544',
    lastChecked: '12/11/2026',
    notes:
      'Código oficial de descarga directa en Downloader. Si en algún momento deja de cargar videos, actualiza la app usando el mismo código o desde su menú interno de actualizaciones.',
  },
  {
    id: 'downloader-app',
    name: 'Downloader (AFTVnews)',
    purpose: 'Herramienta para descargar e instalar aplicaciones mediante códigos numéricos',
    category: 'permanente',
    categoryLabel: 'Herramienta base',
    status: 'Play Store',
    downloaderCode: null,
    lastChecked: '12/11/2026',
    notes:
      'Viene instalada en tu equipo o puedes volver a descargarla gratuitamente desde Google Play Store si llegas a restaurar el TV Box.',
  },
  {
    id: 'plataformas-oficiales',
    name: 'YouTube Oficial / Netflix / Prime Video / Disney+',
    purpose: 'Aplicaciones oficiales compatibles mediante Play Store',
    category: 'permanente',
    categoryLabel: 'Oficial · Cuenta propia',
    status: 'Play Store',
    downloaderCode: null,
    lastChecked: '12/11/2026',
    notes:
      'Se descargan y actualizan directamente desde Google Play Store. Las plataformas de pago requieren iniciar sesión con tu propia suscripción.',
  },
];

export const APP_GUIDES: AppGuideItem[] = [
  {
    id: 'install-apps',
    title: 'Cómo instalar aplicaciones compatibles',
    summary: 'Descarga nuevas herramientas de entretenimiento de forma segura.',
    steps: [
      'Asegúrate de estar conectado a tu red Wi-Fi.',
      'Abre Google Play Store desde la pantalla principal o el cajón de aplicaciones.',
      'Inicia sesión con una cuenta de Google si aún no lo has hecho.',
      'Usa la lupa de búsqueda, escribe el nombre de la aplicación y selecciona Instalar.',
    ],
  },
  {
    id: 'update-apps',
    title: 'Cómo actualizar aplicaciones',
    summary: 'Mantén tus plataformas al día para evitar errores de reproducción.',
    steps: [
      'Ingresa a Google Play Store.',
      'Dirígete a tu ícono de perfil o sección Administrar aplicaciones.',
      'Selecciona Actualizar todo o busca la aplicación específica y presiona Actualizar.',
    ],
  },
  {
    id: 'login-apps',
    title: 'Cómo iniciar sesión',
    summary: 'Vincula tus cuentas personales de streaming y video.',
    steps: [
      'Abre la aplicación deseada (por ejemplo, YouTube, Netflix o Spotify).',
      'Selecciona Iniciar sesión.',
      'Puedes escribir tu correo y contraseña con el teclado en pantalla o escanear el código QR / código de vinculación desde tu celular para mayor comodidad.',
    ],
  },
  {
    id: 'close-apps',
    title: 'Cómo cerrar aplicaciones',
    summary: 'Libera memoria cuando cambies entre varias aplicaciones.',
    steps: [
      'Presiona el botón Atrás repetidamente hasta salir de la aplicación, o presiona Inicio.',
      'Si deseas cerrarla por completo, ve a Ajustes > Aplicaciones.',
      'Elige la aplicación abierta y selecciona Forzar detención.',
    ],
  },
  {
    id: 'fix-app-crash',
    title: 'Qué hacer cuando una aplicación falla',
    summary: 'Pasos rápidos si una app se congela, cierra sola o no carga.',
    steps: [
      'Ve a Ajustes > Aplicaciones > selecciona la aplicación con fallas.',
      'Presiona Forzar detención y luego entra a Almacenamiento > Borrar caché (evita borrar datos si no quieres perder tu sesión).',
      'Vuelve a abrir la aplicación. Si el problema persiste, verifica si hay una actualización pendiente en Play Store.',
    ],
  },
];

export const TROUBLESHOOTING_ITEMS: TroubleshootingItem[] = [
  {
    id: 'no-power',
    title: 'El TV Box no enciende',
    category: 'Encendido y video',
    summary: 'No enciende la luz indicadora ni muestra señal al conectar la corriente.',
    keywords: ['corriente', 'enchufe', 'adaptador', 'luz', 'led', 'apagado', 'no prende'],
    steps: [
      'Verifica que el tomacorriente donde conectaste el equipo tenga energía probándolo con otro aparato o cargador.',
      'Asegúrate de que el conector del adaptador esté insertado firmemente en la entrada DC 5V / Power del TV Box (no en la entrada AV).',
      'Presiona el botón de encendido (PWR) del control remoto apuntando hacia el frente del TV Box.',
      'Si utilizas una regleta o extensión, prueba conectar el adaptador directamente al tomacorriente de la pared.',
    ],
  },
  {
    id: 'no-image',
    title: 'No aparece imagen',
    category: 'Encendido y video',
    summary: 'El TV Box tiene la luz encendida pero la pantalla del televisor se ve negra o dice "Sin señal".',
    keywords: ['hdmi', 'sin señal', 'pantalla negra', 'video', 'no se ve', 'televisor'],
    steps: [
      'Presiona el botón SOURCE / INPUT / HDMI en el control de tu televisor y verifica que hayas elegido el mismo puerto HDMI donde conectaste el cable.',
      'Desconecta ambos extremos del cable HDMI y vuélvelos a presionar firmemente hasta que hagan tope.',
      'Prueba conectar el cable en otro puerto HDMI distinto del televisor (por ejemplo, HDMI 2).',
      'Desenchufa el TV Box de la corriente por 10 segundos y vuelve a conectarlo para que negocie la resolución automáticamente.',
    ],
  },
  {
    id: 'no-wifi',
    title: 'No funciona el Wi-Fi',
    category: 'Red y aplicaciones',
    summary: 'No conecta a la red inalámbrica, se desconecta o aparece "Sin conexión a internet".',
    keywords: ['internet', 'red', 'contraseña', 'clave', 'router', 'desconectado', 'wifi'],
    steps: [
      'Ve a Ajustes > Red e Internet, selecciona tu red Wi-Fi, elige Olvidar red y vuelve a ingresar la contraseña con cuidado (respetando mayúsculas y minúsculas).',
      'Verifica que tu fecha y hora en Ajustes > Preferencias del dispositivo estén correctas; una fecha desactualizada bloquea la conexión segura.',
      'Reinicia tu router de internet desconectándolo 30 segundos si otros equipos tampoco navegan.',
      'Si la señal es débil por distancia o paredes, acerca el router o conecta un cable de red Ethernet directo al TV Box.',
    ],
  },
  {
    id: 'youtube-error',
    title: 'YouTube no abre',
    category: 'Red y aplicaciones',
    summary: 'La aplicación de YouTube se queda cargando, muestra error de red o se cierra al iniciar.',
    keywords: ['youtube', 'videos', 'error red', 'no carga', 'actualizar', 'smarttube', 'anuncios'],
    steps: [
      'Confirma primero que el TV Box esté conectado a internet Wi-Fi o por cable.',
      'Revisa en Ajustes > Fecha y hora que la fecha actual y la zona horaria (GMT-5 Perú) sean correctas.',
      'Ve a Ajustes > Aplicaciones > YouTube y presiona Forzar detención y Borrar caché.',
      'Abre Play Store, busca YouTube y verifica si aparece el botón Actualizar.',
    ],
  },
  {
    id: 'slow-device',
    title: 'El equipo está lento',
    category: 'Control y sistema',
    summary: 'El menú demora en responder o los videos tardan en desplazarse.',
    keywords: ['lento', 'pegado', 'trabado', 'memoria', 'rapido', 'optimizar'],
    steps: [
      'Cierra las aplicaciones que dejaste abiertas en segundo plano desde Ajustes > Aplicaciones > Forzar detención.',
      'Borra el caché de las aplicaciones de video que más utilizas para liberar espacio temporal.',
      'Verifica que la conexión a internet no esté saturada por múltiples descargas en otros dispositivos de la casa.',
      'Reinicia el TV Box desconectándolo de la corriente unos segundos si lleva varios días encendido de forma continua.',
    ],
  },
  {
    id: 'remote-not-working',
    title: 'El control no responde',
    category: 'Control y sistema',
    summary: 'Al presionar los botones del control remoto no ocurre ninguna acción en pantalla.',
    keywords: ['control remoto', 'pilas', 'baterias', 'no mueve', 'botones', 'raton', 'mouse'],
    steps: [
      'Cambia las 2 pilas AAA por unas nuevas y confirma que estén colocadas respetando los polos (+) y (-).',
      'Apunta directamente hacia el sensor frontal del TV Box sin objetos que tapen la vista (distancia recomendada menor a 4 metros).',
      'Si las flechas mueven una pequeña flecha tipo mouse en lugar de saltar entre íconos, presiona una vez el botón Mouse (puntero) del control para volver al modo normal.',
      'Puedes conectar temporalmente un mouse USB de computadora en el puerto USB del TV Box para navegar mientras reemplazas las pilas.',
    ],
  },
  {
    id: 'no-sound',
    title: 'No hay sonido',
    category: 'Encendido y video',
    summary: 'Se ve la imagen con normalidad pero no se escucha audio en el televisor.',
    keywords: ['audio', 'silencio', 'mute', 'volumen', 'parlantes', 'no se escucha'],
    steps: [
      'Presiona el botón VOL+ en el control remoto del TV Box y asegúrate de que no esté activado el botón Silencio (MUTE).',
      'Sube también el volumen usando el control remoto original de tu televisor.',
      'Revisa que el cable HDMI esté bien presionado en ambos extremos, ya que un cable flojo puede afectar el audio.',
      'Prueba reiniciar la reproducción del video o cambiar de aplicación para descartar que el archivo específico esté en silencio.',
    ],
  },
  {
    id: 'install-error',
    title: 'Error al instalar aplicaciones',
    category: 'Red y aplicaciones',
    summary: 'Las descargas desde Play Store no avanzan o muestran un mensaje de error.',
    keywords: ['play store', 'descargar', 'instalar', 'espacio', 'almacenamiento', 'cuenta google', 'downloader', 'codigo', 'xuper', 'apk'],
    steps: [
      'Verifica que tengas espacio libre suficiente ingresando a Ajustes > Almacenamiento.',
      'Si el espacio está casi lleno, desinstala aplicaciones que no utilices y borra el caché.',
      'Confirma que la fecha y hora del equipo estén sincronizadas correctamente y que hayas iniciado sesión con tu cuenta de Google en Play Store.',
      'Ve a Ajustes > Aplicaciones > Google Play Store > Borrar caché y vuelve a intentar la descarga.',
    ],
  },
  {
    id: 'how-to-restart',
    title: 'Cómo reiniciar el dispositivo',
    category: 'Control y sistema',
    summary: 'Procedimiento seguro para reiniciar el TV Box ante bloqueos o cambios de configuración.',
    keywords: ['reiniciar', 'reset', 'apagar', 'volver a prender', 'bloqueado'],
    steps: [
      'Opción 1 (desde el control): Mantén presionado el botón de Encendido (PWR) durante 3 segundos hasta que aparezca el menú en pantalla y elige Reiniciar.',
      'Opción 2 (si la pantalla está congelada): Desenchufa el cable de corriente de la parte trasera del TV Box.',
      'Espera entre 10 y 15 segundos antes de volver a conectarlo.',
      'Al conectarlo nuevamente, el equipo iniciará de forma automática y limpia.',
    ],
  },
];

export function getRemoteButtonById(id: string): RemoteButtonInfo {
  return REMOTE_BUTTONS.find((button) => button.id === id) ?? REMOTE_BUTTONS[0];
}
