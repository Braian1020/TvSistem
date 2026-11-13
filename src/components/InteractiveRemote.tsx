import { useState } from 'react';
import {
  Power,
  VolumeX,
  MousePointer,
  Home,
  CornerUpLeft,
  Menu,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Volume1,
  Hash,
} from 'lucide-react';
import { REMOTE_BUTTONS, getRemoteButtonById } from '../data/helpData';

export function InteractiveRemote() {
  const [selectedId, setSelectedId] = useState<string>('power');
  const activeButton = getRemoteButtonById(selectedId);

  const btnStyle = (id: string, extra = '') => {
    const isActive = selectedId === id;
    return `transition-colors duration-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
      isActive
        ? 'bg-emerald-500 text-neutral-950 font-bold border-emerald-300 ring-2 ring-emerald-400/70 shadow-sm'
        : 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-neutral-700 hover:text-white'
    } ${extra}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 flex flex-col items-center">
        <div
          className="w-60 bg-neutral-950 rounded-[2.25rem] p-5 border border-neutral-800 shadow-lg select-none"
          aria-label="Ilustración interactiva del control remoto"
        >
          {/* Emisor infrarrojo */}
          <div className="flex justify-center mb-3">
            <span className="w-8 h-1 rounded-full bg-neutral-800" aria-hidden="true" />
          </div>

          {/* Fila superior: Power, Mouse, Mute */}
          <div className="flex items-center justify-between gap-2 mb-5">
            <button
              type="button"
              onClick={() => setSelectedId('power')}
              aria-label="Botón Encendido"
              aria-pressed={selectedId === 'power'}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                selectedId === 'power'
                  ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400/60'
                  : 'bg-red-950/80 text-red-400 border-red-900 hover:bg-red-900 hover:text-white'
              }`}
            >
              <Power className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId('mouse')}
              aria-label="Botón Modo Ratón"
              aria-pressed={selectedId === 'mouse'}
              className={btnStyle('mouse', 'w-11 h-11 rounded-full border flex items-center justify-center')}
            >
              <MousePointer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId('mute')}
              aria-label="Botón Silenciar"
              aria-pressed={selectedId === 'mute'}
              className={btnStyle('mute', 'w-11 h-11 rounded-full border flex items-center justify-center')}
            >
              <VolumeX className="w-4 h-4" />
            </button>
          </div>

          {/* Control direccional (D-Pad) + OK */}
          <div className="bg-neutral-900 rounded-3xl p-3 border border-neutral-800 mb-5">
            <div className="grid grid-cols-3 gap-2 items-center justify-items-center">
              <div />
              <button
                type="button"
                onClick={() => setSelectedId('up')}
                aria-label="Flecha Arriba"
                aria-pressed={selectedId === 'up'}
                className={btnStyle('up', 'w-12 h-10 rounded-xl border flex items-center justify-center')}
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <div />

              <button
                type="button"
                onClick={() => setSelectedId('left')}
                aria-label="Flecha Izquierda"
                aria-pressed={selectedId === 'left'}
                className={btnStyle('left', 'w-10 h-12 rounded-xl border flex items-center justify-center')}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setSelectedId('ok')}
                aria-label="Botón OK"
                aria-pressed={selectedId === 'ok'}
                className={btnStyle(
                  'ok',
                  'w-12 h-12 rounded-full border text-xs font-extrabold tracking-wide flex items-center justify-center'
                )}
              >
                OK
              </button>

              <button
                type="button"
                onClick={() => setSelectedId('right')}
                aria-label="Flecha Derecha"
                aria-pressed={selectedId === 'right'}
                className={btnStyle('right', 'w-10 h-12 rounded-xl border flex items-center justify-center')}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div />
              <button
                type="button"
                onClick={() => setSelectedId('down')}
                aria-label="Flecha Abajo"
                aria-pressed={selectedId === 'down'}
                className={btnStyle('down', 'w-12 h-10 rounded-xl border flex items-center justify-center')}
              >
                <ChevronDown className="w-5 h-5" />
              </button>
              <div />
            </div>
          </div>

          {/* Fila navegación del sistema: Atrás, Inicio, Menú */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              type="button"
              onClick={() => setSelectedId('back')}
              aria-label="Botón Atrás"
              aria-pressed={selectedId === 'back'}
              className={btnStyle('back', 'h-10 rounded-xl border flex flex-col items-center justify-center gap-0.5')}
            >
              <CornerUpLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId('home')}
              aria-label="Botón Inicio"
              aria-pressed={selectedId === 'home'}
              className={btnStyle('home', 'h-10 rounded-xl border flex flex-col items-center justify-center gap-0.5')}
            >
              <Home className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId('menu')}
              aria-label="Botón Menú"
              aria-pressed={selectedId === 'menu'}
              className={btnStyle('menu', 'h-10 rounded-xl border flex flex-col items-center justify-center gap-0.5')}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* Volumen + y - */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              type="button"
              onClick={() => setSelectedId('vol_down')}
              aria-label="Bajar Volumen"
              aria-pressed={selectedId === 'vol_down'}
              className={btnStyle('vol_down', 'h-10 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-semibold')}
            >
              <Volume1 className="w-4 h-4" />
              <span>VOL -</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedId('vol_up')}
              aria-label="Subir Volumen"
              aria-pressed={selectedId === 'vol_up'}
              className={btnStyle('vol_up', 'h-10 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-semibold')}
            >
              <Volume2 className="w-4 h-4" />
              <span>VOL +</span>
            </button>
          </div>

          {/* Teclado numérico */}
          <button
            type="button"
            onClick={() => setSelectedId('numbers')}
            aria-label="Teclado Numérico 0 a 9 y DEL"
            aria-pressed={selectedId === 'numbers'}
            className={btnStyle('numbers', 'w-full rounded-2xl border p-3')}
          >
            <div className="grid grid-cols-3 gap-1.5 text-[11px] font-semibold tabular-nums">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span className="text-neutral-400">·</span>
              <span>0</span>
              <span className="text-[10px]">DEL</span>
            </div>
          </button>

          <p className="text-center text-[10px] tracking-widest text-neutral-500 font-semibold mt-4">
            TV BOX REMOTE
          </p>
        </div>

        <p className="text-xs text-neutral-500 mt-3 text-center">
          Haz clic o toca cualquier botón del control para consultar su función.
        </p>
      </div>

      {/* Panel de detalle del botón seleccionado */}
      <div className="lg:col-span-7 space-y-6">
        <div
          className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8"
          aria-live="polite"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-700 mb-2">
            <span>{activeButton.group}</span>
            <span aria-hidden="true">·</span>
            <span>Botón {activeButton.shortLabel}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
            {activeButton.label}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-neutral-800 mt-2">
            {activeButton.functionTitle}
          </p>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-3">
            {activeButton.description}
          </p>

          <div className="mt-5 pt-5 border-t border-neutral-100">
            <p className="text-xs font-semibold text-neutral-500 mb-1">
              Consejo práctico de uso
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {activeButton.usageTip}
            </p>
          </div>
        </div>

        {/* Índice rápido de botones */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-950 mb-3">
            <Hash className="w-4 h-4 text-emerald-600" />
            <span>Todos los botones del control</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {REMOTE_BUTTONS.map((btn) => {
              const isSelected = btn.id === selectedId;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedId(btn.id)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-neutral-950 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950'
                  }`}
                >
                  {btn.shortLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
