import { ArrowRight, LifeBuoy, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { AppRoute } from '../utils/routes';
import { MediaImage } from './MediaImage';
import { PRODUCT_PRICE } from '../data/productData';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="fade-slide-in">
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
                POOLSTORE · Sistema Android TV Box
              </p>

              <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-neutral-950 leading-[1.12] [text-wrap:balance]">
                Entretenimiento inteligente para tu televisor actual
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                Plataforma exclusiva de POOLSTORE para nuestro Sistema Android TV Box. Elige si deseas adquirir el equipo o acceder al centro de soporte para clientes.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-neutral-600 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Pago único {PRODUCT_PRICE}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Delivery gratis en Chiclayo
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Garantía de 3 meses
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-48 sm:h-64 lg:h-full lg:min-h-[280px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <MediaImage
                  src="/src/assets/images/tvbox_hero_living_room_1794531370782.jpg"
                  alt="Sistema Android TV Box de POOLSTORE conectado a un televisor en sala moderna"
                  className="w-full h-full object-cover"
                  fallbackLabel="Sistema Android TV Box POOLSTORE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6FA] py-8 sm:py-11">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
              ¿Qué deseas hacer hoy?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Selecciona una de las dos secciones principales de la plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <ShoppingBag className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-emerald-700 tracking-wide">
                    Equipo configurado · {PRODUCT_PRICE}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-950">
                    COMPRAR TV BOX
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Conoce los beneficios, aplicaciones compatibles, qué incluye la caja, compatibilidad con tu televisor y pide tu equipo directo por WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/comprar')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <span>Ir a Comprar TV Box</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                  <LifeBuoy className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-neutral-500 tracking-wide">
                    Guías paso a paso y soporte
                  </p>
                  <h3 className="text-xl font-bold text-neutral-950">
                    SOY CLIENTE
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Accede al Centro de Ayuda exclusivo: primeros pasos de instalación, control remoto interactivo, manejo de aplicaciones y solución de problemas.
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/soy-cliente')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <span>Entrar al Centro de Ayuda</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
