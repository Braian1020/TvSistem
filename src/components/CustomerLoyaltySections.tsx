import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Heart, ShieldCheck, HandHeart, Maximize2, X, QrCode } from 'lucide-react';
import { MediaImage } from './MediaImage';

export function CustomerLoyaltySections() {
  const [isQrExpanded, setIsQrExpanded] = useState(false);

  useEffect(() => {
    if (!isQrExpanded) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsQrExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQrExpanded]);

  return (
    <>
      {/* 3. Mensaje de bienvenida & 4. Nuestro compromiso contigo */}
      <section className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mensaje de bienvenida */}
          <article className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Heart className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-emerald-700 tracking-wide">
                Mensaje de bienvenida
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight">
                TU ENTRETENIMIENTO, NUESTRO COMPROMISO
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              <p className="font-semibold text-neutral-800">
                Gracias por confiar en POOLSTORE.
              </p>
              <p>
                Nuestro Sistema Android TV Box fue creado para darle una nueva vida a tu televisor, ofreciéndote nuevas funciones, aplicaciones y opciones de entretenimiento al alcance de tus manos.
              </p>
              <p>
                Esta página está diseñada para que encuentres fácilmente la información que necesitas y aproveches mejor tu dispositivo.
              </p>
            </div>
          </article>

          {/* Nuestro compromiso contigo */}
          <article className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-neutral-500 tracking-wide">
                Nuestro compromiso contigo
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight">
                ¡NO TE DEJAREMOS SOLO!
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              <p>
                Sabemos que mantener y actualizar un sistema tecnológico requiere dedicación y tiempo.
              </p>
              <p>
                Tu compra incluyó <strong className="text-neutral-950">3 meses de soporte técnico gratuito</strong>, pero eso no significa que después de ese periodo dejaremos de ayudarte.
              </p>
              <p>
                Podrás seguir utilizando tu dispositivo y accediendo a nuestros tutoriales. Continuaremos compartiendo orientación e información para que aproveches mejor tu TV Box, siempre según la compatibilidad y disponibilidad de las aplicaciones.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 5. Apoya nuestro proyecto (QR Yape real con animación sutil continua) */}
      <section id="apoya-proyecto" className="bg-white py-12 sm:py-14 border-b border-neutral-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 support-icon-pulse">
                  <HandHeart className="w-4 h-4" />
                </span>
                <span>Apoya nuestro proyecto</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                AYÚDANOS A SEGUIR MEJORANDO
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Mantener esta plataforma, crear nuevos tutoriales y ofrecer orientación requiere tiempo y recursos.
                </p>
                <p>
                  Si nuestros tutoriales te han ayudado y deseas apoyar este proyecto, puedes realizar un aporte voluntario mediante nuestro código QR.
                </p>
                <p>
                  No importa la cantidad. Cada colaboración nos ayuda a continuar mejorando esta experiencia para nuestros clientes.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 p-4 text-xs sm:text-sm font-semibold text-neutral-900">
                Tu apoyo es completamente voluntario. No necesitas donar para seguir utilizando tu equipo ni acceder a los tutoriales.
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[290px]">
                {/* Halo esmeralda suave continuo detrás de la tarjeta QR */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[1.5rem] bg-emerald-500/15 blur-md qr-soft-halo pointer-events-none"
                />

                <div className="relative bg-white rounded-2xl border p-3.5 qr-card-breath">
                  <div className="relative rounded-xl overflow-hidden bg-neutral-100 qr-gentle-float">
                    <MediaImage
                      src="/assets/aistudio/QR_a33adef3.jpeg"
                      alt="Código QR oficial de Yape para apoyo voluntario a POOLSTORE – Brayan Pool Gonzales Callirgos"
                      className="w-full h-auto object-contain"
                      fallbackLabel="QR Yape POOLSTORE"
                    />
                  </div>

                  <div className="mt-3 space-y-2.5 text-center">
                    <p className="text-xs font-bold text-neutral-900 flex items-center justify-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 support-dot-pulse"
                      />
                      <QrCode className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Yape · Brayan Pool Gonzales Callirgos</span>
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsQrExpanded(true)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Ampliar código QR</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vista ampliada del QR para escanear cómodamente (portal a document.body) */}
      {isQrExpanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
            className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsQrExpanded(false)}
          >
            <div
              className="bg-white rounded-2xl border border-neutral-200 max-w-sm w-full p-5 space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 id="qr-modal-title" className="text-sm font-bold text-neutral-950">
                  Escanea con Yape · POOLSTORE
                </h3>
                <button
                  type="button"
                  onClick={() => setIsQrExpanded(false)}
                  aria-label="Cerrar vista ampliada del QR"
                  className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-neutral-200 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <MediaImage
                  src="/assets/aistudio/QR_a33adef3.jpeg"
                  alt="Código QR ampliado de Yape – Brayan Pool Gonzales Callirgos"
                  className="w-full h-auto object-contain"
                  fallbackLabel="QR Yape POOLSTORE"
                />
              </div>

              <p className="text-xs text-center text-neutral-600">
                Titular: <strong className="text-neutral-950">Brayan Pool Gonzales Callirgos</strong>
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
