import { useState, useMemo } from 'react';
import {
  Download,
  Info,
  Copy,
  Check,
  MessageCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import {
  DOWNLOADER_TUTORIAL_STEPS,
  PREINSTALLED_APPS,
  LAST_CODES_REVIEW,
} from '../data/helpData';
import { AppCategoryType, filterPreinstalledApps } from '../utils/downloader';
import { getCodeUpdateWhatsAppUrl } from '../utils/whatsapp';

const APP_FILTERS: { id: 'all' | AppCategoryType; label: string }[] = [
  { id: 'all', label: 'Todas las apps' },
  { id: 'temporal', label: 'Configuración temporal' },
  { id: 'permanente', label: 'Herramientas y Play Store' },
];

export function DownloaderSection() {
  const [filter, setFilter] = useState<'all' | AppCategoryType>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const visibleApps = useMemo(
    () => filterPreinstalledApps(PREINSTALLED_APPS, filter),
    [filter]
  );

  const handleCopyCode = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div id="downloader-codigos" className="mt-12 pt-10 border-t border-neutral-200 space-y-8 scroll-mt-16">
      <div className="max-w-3xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide">
          <Download className="w-4 h-4" />
          <span>Instalación por códigos · Downloader</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
          Cómo instalar o actualizar aplicaciones con Downloader
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Utiliza la aplicación Downloader para instalar o actualizar rápidamente las aplicaciones configuradas mediante un código numérico.
        </p>
      </div>

      {/* Tutorial de 4 pasos para Downloader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DOWNLOADER_TUTORIAL_STEPS.map((step) => (
          <article
            key={step.stepNumber}
            className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-2.5"
          >
            <span className="text-xs font-extrabold text-emerald-700 tabular-nums">
              Paso {step.stepNumber}
            </span>
            <h4 className="text-base font-bold text-neutral-950">{step.title}</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
          </article>
        ))}
      </div>

      {/* Aviso transparente sobre configuración temporal y ampliación en construcción */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h4 className="text-sm sm:text-base font-bold text-neutral-950">
            Actualización constante de códigos y nuevas secciones en construcción
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Aplicaciones como <strong>Xuper TV</strong> (código vigente: <strong className="tabular-nums text-neutral-950">5975927</strong>) o <strong>YouTube sin anuncios</strong> son configuraciones temporales externas. Si ocurre algún problema o dejan de funcionar, <strong>los códigos se irán cambiando y actualizando constantemente en esta misma página</strong>. Además, estamos trabajando para agregar <strong>más códigos gratis y más tutoriales</strong> próximamente (sección en construcción).
          </p>
        </div>
      </div>

      {/* Tabla / Lista de apps preinstaladas y códigos actualizados */}
      <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-neutral-950">
              Aplicaciones preinstaladas y códigos actualizados
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Última revisión de códigos: {LAST_CODES_REVIEW}</span>
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5"
            role="group"
            aria-label="Filtrar aplicaciones preinstaladas"
          >
            {APP_FILTERS.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={isActive}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-neutral-950 text-white'
                      : 'bg-[#F5F6FA] text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {visibleApps.map((app) => {
            const isCopied = copiedId === app.id;
            const requestUrl = getCodeUpdateWhatsAppUrl(app.name);
            return (
              <article
                key={app.id}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span className="font-semibold text-emerald-700">{app.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-neutral-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {app.status}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">Revisado {app.lastChecked}</span>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-neutral-950">
                    {app.name}
                  </h5>
                  <p className="text-sm font-medium text-neutral-700">{app.purpose}</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {app.notes}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {app.downloaderCode ? (
                    <>
                      <div className="px-4 py-2.5 rounded-xl bg-[#F5F6FA] border border-neutral-200 text-center min-w-[120px]">
                        <span className="block text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                          Código Downloader
                        </span>
                        <span className="text-lg font-extrabold text-neutral-950 tabular-nums tracking-wider">
                          {app.downloaderCode}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(app.id, app.downloaderCode!)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-950 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-emerald-400" />
                            <span>Copiar código</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : app.category === 'temporal' ? (
                    <a
                      href={requestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-950 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Solicitar código vigente</span>
                    </a>
                  ) : (
                    <div className="px-4 py-2.5 rounded-xl bg-[#F5F6FA] border border-neutral-200 text-xs font-semibold text-neutral-700 whitespace-nowrap">
                      Disponible en Play Store
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
