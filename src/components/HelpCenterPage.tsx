import { useState, useMemo } from 'react';
import {
  Search,
  MessageCircle,
  CheckCircle2,
  AppWindow,
  Wrench,
  Gamepad2,
  ListChecks,
  ChevronDown,
  RotateCcw,
  Download,
} from 'lucide-react';
import {
  FIRST_STEPS,
  APP_GUIDES,
  TROUBLESHOOTING_ITEMS,
} from '../data/helpData';
import { filterTroubleshootingItems } from '../utils/troubleshooting';
import { getSupportWhatsAppUrl, POOLSTORE_WHATSAPP_DISPLAY } from '../utils/whatsapp';
import { InteractiveRemote } from './InteractiveRemote';
import { DownloaderSection } from './DownloaderSection';
import { VideoLibrarySection } from './VideoLibrarySection';
import { CustomerLoyaltySections } from './CustomerLoyaltySections';

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'Encendido y video', label: 'Encendido y video' },
  { id: 'Red y aplicaciones', label: 'Red y aplicaciones' },
  { id: 'Control y sistema', label: 'Control y sistema' },
];

export function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>(
    TROUBLESHOOTING_ITEMS[0].id
  );

  const filteredIssues = useMemo(
    () => filterTroubleshootingItems(TROUBLESHOOTING_ITEMS, searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  );

  const supportWhatsappUrl = getSupportWhatsAppUrl();

  return (
    <main className="fade-slide-in">
      {/* 1 & 2. Biblioteca de tutoriales, reproductor integrado, buscador y categorías */}
      <VideoLibrarySection />

      {/* 3, 4 & 5. Mensaje de bienvenida, Nuestro compromiso y Apoya nuestro proyecto (QR) */}
      <CustomerLoyaltySections />

      {/* Guías rápidas de consulta (Primeros pasos, Control remoto, Aplicaciones/Códigos, Solución de problemas) */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-700 tracking-wide mb-1">
                Guías y herramientas de soporte
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-950">
                CENTRO DE AYUDA – SISTEMA ANDROID TV BOX
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Encuentra instrucciones, soluciones y respuestas para utilizar correctamente tu dispositivo.
              </p>
            </div>

            <nav
              aria-label="Accesos rápidos de soporte"
              className="flex flex-wrap gap-2"
            >
              <a
                href="#primeros-pasos"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                <ListChecks className="w-3.5 h-3.5 text-emerald-600" />
                <span>Primeros pasos</span>
              </a>
              <a
                href="#control-remoto"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Control remoto</span>
              </a>
              <a
                href="#aplicaciones"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                <AppWindow className="w-3.5 h-3.5 text-emerald-600" />
                <span>Aplicaciones</span>
              </a>
              <a
                href="#downloader-codigos"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Códigos Downloader</span>
              </a>
              <a
                href="#solucion-problemas"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
              >
                <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solución de problemas</span>
              </a>
              <a
                href="#soporte-whatsapp"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* A. Primeros pasos */}
      <section id="primeros-pasos" className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide mb-1">
              Sección A
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Primeros pasos
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Sigue estos 5 pasos en orden para instalar y configurar tu TV Box por primera vez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {FIRST_STEPS.map((step, idx) => (
              <article
                key={step.id}
                className={`bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between space-y-4 ${
                  idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-700 tabular-nums">
                      Paso {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500">{step.summary}</p>

                  <ol className="space-y-2 pt-1">
                    {step.instructions.map((line, index) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed"
                      >
                        <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                          {index + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600 leading-relaxed">
                  <span className="font-semibold text-emerald-700">Tip: </span>
                  {step.tip}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* B. Control remoto interactivo */}
      <section id="control-remoto" className="bg-white py-12 sm:py-14 border-b border-neutral-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide mb-1">
              Sección B
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Control remoto interactivo
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Presiona cualquier botón en la ilustración del control incluido para consultar su función exacta.
            </p>
          </div>

          <InteractiveRemote />
        </div>
      </section>

      {/* C. Aplicaciones */}
      <section id="aplicaciones" className="bg-[#F5F6FA] py-12 sm:py-14 border-b border-neutral-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide mb-1">
              Sección C
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Aplicaciones
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Guía práctica para instalar, actualizar, cerrar y administrar tus aplicaciones compatibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {APP_GUIDES.map((guide, idx) => (
              <article
                key={guide.id}
                className={`bg-white rounded-2xl border border-neutral-200 p-6 space-y-3 ${
                  idx < 3 ? 'md:col-span-2' : 'md:col-span-3'
                }`}
              >
                <h3 className="text-lg font-bold text-neutral-950">{guide.title}</h3>
                <p className="text-sm text-neutral-600">{guide.summary}</p>
                <ul className="space-y-2 pt-2">
                  {guide.steps.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <DownloaderSection />
        </div>
      </section>

      {/* D. Solución de problemas (con buscador) */}
      <section id="solucion-problemas" className="bg-white py-12 sm:py-14 border-b border-neutral-200 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-7">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide mb-1">
              Sección D
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Solución de problemas
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Busca tu inconveniente o filtra por categoría para ver los pasos de solución.
            </p>
          </div>

          {/* Buscador y filtros */}
          <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-4 sm:p-5 mb-6 space-y-4">
            <div className="relative">
              <label htmlFor="troubleshooting-search" className="sr-only">
                Buscar solución de problema
              </label>
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="troubleshooting-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar problema (ej. Wi-Fi, YouTube, sonido, control, imagen...)"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar por categoría">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      aria-pressed={isActive}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-neutral-950 text-white'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-medium text-neutral-500 tabular-nums">
                {filteredIssues.length} {filteredIssues.length === 1 ? 'solución' : 'soluciones'}
              </span>
            </div>
          </div>

          {/* Lista de soluciones */}
          {filteredIssues.length === 0 ? (
            <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-8 text-center space-y-4">
              <p className="text-base font-bold text-neutral-950">
                No encontramos resultados para "{searchQuery}"
              </p>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Intenta con otra palabra clave o limpia los filtros. Si tu problema continúa, escríbenos directamente por WhatsApp.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-xs font-semibold text-neutral-800 hover:bg-neutral-100 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ver todos los problemas</span>
                </button>
                <a
                  href={supportWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NECESITO AYUDA</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredIssues.map((issue) => {
                const isOpen =
                  expandedIssueId === issue.id || searchQuery.trim().length > 0;
                return (
                  <article
                    key={issue.id}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIssueId((prev) => (prev === issue.id ? null : issue.id))
                      }
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-600"
                    >
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-emerald-700">
                          {issue.category}
                        </p>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-950">
                          {issue.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-500">{issue.summary}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-emerald-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-3 border-t border-neutral-100 bg-[#F5F6FA]/60">
                        <ol className="space-y-2.5">
                          {issue.steps.map((step, idx) => (
                            <li
                              key={step}
                              className="flex items-start gap-3 text-sm text-neutral-800 leading-relaxed"
                            >
                              <span className="w-6 h-6 rounded-full bg-neutral-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* E. Soporte por WhatsApp */}
      <section id="soporte-whatsapp" className="bg-[#F5F6FA] py-12 sm:py-16 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 text-center space-y-5">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide">
              Sección E · Atención directa por WhatsApp
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
              ¿Aún necesitas asistencia con tu TV Box?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Nuestro equipo de POOLSTORE ({POOLSTORE_WHATSAPP_DISPLAY}) te orienta paso a paso para resolver cualquier duda con tu dispositivo.
            </p>
            <div className="pt-2">
              <a
                href={supportWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-neutral-950 text-white text-sm sm:text-base font-bold tracking-wide hover:bg-neutral-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>NECESITO AYUDA</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
