import type { MouseEvent } from 'react';
import { AppRoute } from '../utils/routes';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-8">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-sm sm:text-lg font-extrabold tracking-tight text-neutral-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 rounded"
        >
          POOLSTORE
        </a>

        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-3 sm:gap-8 h-full"
        >
          <a
            href="/comprar"
            onClick={(e) => handleLinkClick(e, '/comprar')}
            aria-current={currentRoute === '/comprar' ? 'page' : undefined}
            className={`relative h-full inline-flex items-center text-[11px] sm:text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
              currentRoute === '/comprar'
                ? 'text-emerald-700'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            COMPRAR TV BOX
            {currentRoute === '/comprar' && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
              />
            )}
          </a>

          <span aria-hidden="true" className="text-neutral-300 text-xs select-none">
            |
          </span>

          <a
            href="/soy-cliente"
            onClick={(e) => handleLinkClick(e, '/soy-cliente')}
            aria-current={currentRoute === '/soy-cliente' ? 'page' : undefined}
            className={`relative h-full inline-flex items-center text-[11px] sm:text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
              currentRoute === '/soy-cliente'
                ? 'text-emerald-700'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            SOY CLIENTE
            {currentRoute === '/soy-cliente' && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
              />
            )}
          </a>
        </nav>
      </div>
    </header>
  );
}
