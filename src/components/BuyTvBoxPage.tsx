import { useState } from 'react';
import {
  Tv,
  Sliders,
  Zap,
  ShieldCheck,
  Check,
  ChevronDown,
  MessageCircle,
  Wifi,
  Package,
  Monitor,
  Truck,
} from 'lucide-react';
import {
  PRODUCT_PRICE,
  PURCHASE_HIGHLIGHTS,
  PRODUCT_BENEFITS,
  COMPATIBLE_APPS,
  HOW_IT_WORKS_STEPS,
  INCLUDED_ITEMS,
  TV_COMPATIBILITY,
  CONNECTION_REQUIREMENTS,
  DELIVERY_CONDITIONS,
  PRODUCT_FAQS,
} from '../data/productData';
import { getPurchaseWhatsAppUrl } from '../utils/whatsapp';
import { MediaImage } from './MediaImage';

const benefitIconMap = {
  tv: Tv,
  sliders: Sliders,
  zap: Zap,
  shield: ShieldCheck,
  wifi: Wifi,
  truck: Truck,
};

export function BuyTvBoxPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(PRODUCT_FAQS[0].id);
  const whatsappUrl = getPurchaseWhatsAppUrl();

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="fade-slide-in">
      {/* 1. Portada comercial con fotografía del TV Box y precio */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
                  Sistema Android TV Box · POOLSTORE
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-neutral-950 leading-[1.12] [text-wrap:balance]">
                  TRANSFORMA TU TELEVISOR SIN COMPRAR UNO NUEVO
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Actualiza tu experiencia de entretenimiento con nuestro Sistema Android TV Box. Accede a aplicaciones compatibles de películas, series, música, videos y televisión por internet desde un solo dispositivo.
                </p>
              </div>

              <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-4">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-600">
                    Precio del equipo
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tabular-nums">
                    {PRODUCT_PRICE}
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PURCHASE_HIGHLIGHTS.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-neutral-950 text-white text-sm sm:text-base font-bold tracking-wide hover:bg-neutral-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>COMPRAR AHORA – S/ 250.00</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <MediaImage
                  src="/src/assets/images/tvbox_device_closeup_1794531372493.jpg"
                  alt="Equipo Sistema Android TV Box de POOLSTORE junto a su control remoto"
                  className="w-full h-full object-cover"
                  fallbackLabel="Sistema Android TV Box – S/ 250.00"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Beneficios del dispositivo */}
      <section className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Beneficios del dispositivo
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Una solución práctica para modernizar tu televisor sin gastar en una pantalla nueva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCT_BENEFITS.map((benefit) => {
              const Icon = benefitIconMap[benefit.iconName];
              return (
                <article
                  key={benefit.id}
                  className="bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Aplicaciones y funciones compatibles */}
      <section className="bg-white py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Aplicaciones y funciones compatibles
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Utiliza aplicaciones Android compatibles conectando tu televisor a internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMPATIBLE_APPS.map((app) => (
              <article
                key={app.id}
                className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-neutral-950">{app.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700">{app.examples}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{app.description}</p>
              </article>
            ))}
          </div>

          <p className="text-xs text-neutral-500 mt-5">
            Nota: El equipo no incluye cuentas ni suscripciones pagadas de terceros; para plataformas por suscripción debes iniciar sesión con tu propia cuenta.
          </p>
        </div>
      </section>

      {/* 4. Qué es un TV Box y cómo funciona */}
      <section className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              ¿Qué es un TV Box y cómo funciona?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
              Un TV Box es un equipo compacto con sistema operativo Android que se conecta por HDMI a tu televisor y le permite ejecutar aplicaciones por internet manejándolas desde un control remoto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <article
                key={item.step}
                className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-2.5"
              >
                <span className="text-xs font-extrabold text-emerald-700 tabular-nums">
                  Paso {item.step}
                </span>
                <h3 className="text-base font-bold text-neutral-950">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Qué incluye la compra */}
      <section className="bg-white py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <MediaImage
                  src="/src/assets/images/tvbox_unboxing_kit_1794531372514.jpg"
                  alt="Contenido completo de la caja del TV Box: equipo, control remoto, cable HDMI, adaptador de corriente y guía"
                  className="w-full h-full object-cover"
                  fallbackLabel="Kit completo Sistema Android TV Box"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
                <Package className="w-4 h-4" />
                <span>Contenido completo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-5">
                Qué incluye la compra
              </h2>

              <ul className="divide-y divide-neutral-200 border border-neutral-200 rounded-2xl bg-[#F5F6FA]">
                {INCLUDED_ITEMS.map((item) => (
                  <li key={item.id} className="p-4 flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-neutral-950">{item.name}</p>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Compatibilidad con diferentes televisores & 7. Requisitos de conexión */}
      <section className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <Monitor className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
                Compatibilidad con televisores
              </h2>
            </div>
            <ul className="space-y-4">
              {TV_COMPATIBILITY.map((item) => (
                <li key={item.title} className="border-b border-neutral-100 last:border-b-0 pb-3 last:pb-0">
                  <p className="text-sm font-bold text-neutral-950">{item.title}</p>
                  <p className="text-sm text-neutral-600 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <Wifi className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
                Requisitos de conexión
              </h2>
            </div>
            <ul className="space-y-4">
              {CONNECTION_REQUIREMENTS.map((item) => (
                <li key={item.title} className="border-b border-neutral-100 last:border-b-0 pb-3 last:pb-0">
                  <p className="text-sm font-bold text-neutral-950">{item.title}</p>
                  <p className="text-sm text-neutral-600 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Entrega y condiciones de compra */}
      <section className="bg-white py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Entrega y condiciones de compra
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Condiciones claras y sin sorpresas antes de realizar tu pedido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DELIVERY_CONDITIONS.map((item) => (
              <article
                key={item.title}
                className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-neutral-950">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Preguntas frecuentes */}
      <section className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {PRODUCT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-600"
                  >
                    <span className="text-sm sm:text-base font-bold text-neutral-950">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Botón final para comprar por WhatsApp */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            ¿Listo para transformar tu televisor?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Confirma disponibilidad y coordina tu entrega gratuita en Chiclayo directamente por WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-neutral-950 text-white text-sm sm:text-base font-bold tracking-wide hover:bg-neutral-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>COMPRAR AHORA – S/ 250.00</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
