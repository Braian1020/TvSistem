import { useState, useMemo, useRef } from 'react';
import {
  Play,
  Search,
  Tv,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  Wrench,
} from 'lucide-react';
import { TUTORIAL_VIDEOS } from '../data/tutorialsData';
import {
  TutorialVideo,
  getDrivePreviewUrl,
  getDriveThumbnailUrl,
  getAvailableTutorialCategories,
  filterTutorialVideos,
} from '../utils/tutorials';
import { MediaImage } from './MediaImage';

export function VideoLibrarySection() {
  const [selectedVideo, setSelectedVideo] = useState<TutorialVideo>(TUTORIAL_VIDEOS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedFeaturedCode, setCopiedFeaturedCode] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const handleCopyFeaturedCode = async () => {
    try {
      await navigator.clipboard.writeText('5975927');
      setCopiedFeaturedCode(true);
      window.setTimeout(() => setCopiedFeaturedCode(false), 2000);
    } catch {
      setCopiedFeaturedCode(false);
    }
  };

  const availableCategories = useMemo(
    () => getAvailableTutorialCategories(TUTORIAL_VIDEOS),
    []
  );

  const filteredVideos = useMemo(
    () => filterTutorialVideos(TUTORIAL_VIDEOS, searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  );

  const currentIndex = TUTORIAL_VIDEOS.findIndex((v) => v.id === selectedVideo.id);
  const previousVideo = currentIndex > 0 ? TUTORIAL_VIDEOS[currentIndex - 1] : null;
  const nextVideo =
    currentIndex >= 0 && currentIndex < TUTORIAL_VIDEOS.length - 1
      ? TUTORIAL_VIDEOS[currentIndex + 1]
      : null;

  const handleSelectVideo = (video: TutorialVideo) => {
    setSelectedVideo(video);
    playerContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="tutoriales" className="bg-white border-b border-neutral-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
        {/* Encabezado principal de SOY CLIENTE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide">
              <Tv className="w-4 h-4 shrink-0" />
              <span>Centro de Ayuda POOLSTORE · Solución Xuper TV y Tutoriales</span>
            </p>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 [text-wrap:balance]">
              APRENDE A UTILIZAR TU TV BOX
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Encuentra nuestros tutoriales paso a paso para solucionar cuando deja de funcionar Xuper TV, usar Downloader y mantener tu equipo actualizado.
            </p>
          </div>

          {/* Tarjeta rápida del código vigente + aviso en construcción */}
          <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-4 sm:p-5 lg:max-w-md w-full space-y-3 shrink-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                  Código vigente Xuper TV
                </p>
                <p className="text-2xl font-extrabold text-neutral-950 tabular-nums tracking-wider">
                  5975927
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyFeaturedCode}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copiedFeaturedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copiar código</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed flex items-start gap-2 pt-2 border-t border-neutral-200">
              <Wrench className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                Los códigos se cambiarán o actualizarán aquí si ocurre un problema. Próximamente agregaremos más códigos gratis y más tutoriales (en construcción).
              </span>
            </p>
          </div>
        </div>

        {/* Reproductor integrado dentro de POOLSTORE */}
        <div
          ref={playerContainerRef}
          className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-4 sm:p-6 space-y-5 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-medium">
                <span className="font-semibold text-emerald-700">
                  Reproduciendo dentro de POOLSTORE
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedVideo.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  Tutorial {selectedVideo.order} de {TUTORIAL_VIDEOS.length}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-neutral-950">
                {selectedVideo.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                disabled={!previousVideo}
                onClick={() => previousVideo && setSelectedVideo(previousVideo)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 hover:border-neutral-400 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
              <button
                type="button"
                disabled={!nextVideo}
                onClick={() => nextVideo && setSelectedVideo(nextVideo)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-300">
            <iframe
              key={selectedVideo.driveId}
              src={getDrivePreviewUrl(selectedVideo.driveId)}
              title={selectedVideo.title}
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full border-0"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-neutral-600">
            <p className="leading-relaxed">{selectedVideo.description}</p>
            <span className="text-xs font-medium text-neutral-500 whitespace-nowrap shrink-0 tabular-nums">
              {selectedVideo.originalFileName} · {selectedVideo.fileSizeLabel}
            </span>
          </div>
        </div>

        {/* Buscador y categorías de tutoriales */}
        <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-4 sm:p-5 space-y-4">
          <div className="relative">
            <label htmlFor="tutorial-search" className="sr-only">
              Buscar tutorial de TV Box
            </label>
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="tutorial-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tutorial (ej. desinstalar, Downloader, código, instalar...)"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Filtrar tutoriales por categoría"
            >
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                aria-pressed={selectedCategory === 'all'}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-neutral-950 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                Todos ({TUTORIAL_VIDEOS.length})
              </button>
              {availableCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={isActive}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-neutral-950 text-white'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-medium text-neutral-500 tabular-nums">
              {filteredVideos.length}{' '}
              {filteredVideos.length === 1 ? 'tutorial' : 'tutoriales'}
            </span>
          </div>
        </div>

        {/* Galería de tarjetas de videos */}
        {filteredVideos.length === 0 ? (
          <div className="bg-[#F5F6FA] rounded-2xl border border-neutral-200 p-8 text-center space-y-3">
            <p className="text-base font-bold text-neutral-950">
              No encontramos tutoriales para "{searchQuery}"
            </p>
            <p className="text-sm text-neutral-600">
              Prueba buscando otra palabra o restablece el filtro para ver los 5 tutoriales disponibles.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-xs font-semibold text-neutral-800 hover:bg-neutral-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver todos los tutoriales</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const isPlaying = video.id === selectedVideo.id;
              return (
                <article
                  key={video.id}
                  className={`rounded-2xl border bg-white overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5 ${
                    isPlaying
                      ? 'border-emerald-600 ring-2 ring-emerald-600/20'
                      : 'border-neutral-200'
                  }`}
                >
                  <div>
                    <div className="relative aspect-video bg-neutral-900 border-b border-neutral-200 overflow-hidden">
                      <MediaImage
                        src={getDriveThumbnailUrl(video.driveId, 640)}
                        alt={`Miniatura de ${video.title}`}
                        className="w-full h-full object-cover"
                        fallbackLabel={video.title}
                      />
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-medium">
                        <span className="font-semibold text-emerald-700">
                          {video.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{video.fileSizeLabel}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                        {video.title}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <button
                      type="button"
                      onClick={() => handleSelectVideo(video)}
                      aria-pressed={isPlaying}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                        isPlaying
                          ? 'bg-emerald-700 text-white'
                          : 'bg-neutral-950 text-white hover:bg-neutral-800'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>REPRODUCIENDO</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>REPRODUCIR</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
