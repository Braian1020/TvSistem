import type { MouseEvent } from 'react';
import { AppRoute } from '../utils/routes';
import { POOLSTORE_WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <p className="text-sm font-extrabold tracking-tight text-neutral-950">POOLSTORE</p>
          <p className="text-xs sm:text-sm text-neutral-500">
            Sistema Android TV Box · Delivery gratis en Chiclayo · WhatsApp {POOLSTORE_WHATSAPP_DISPLAY}
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-medium">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="text-neutral-600 hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="/comprar"
            onClick={(e) => handleLinkClick(e, '/comprar')}
            className="text-neutral-600 hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0"
          >
            Comprar TV Box
          </a>
          <a
            href="/soy-cliente"
            onClick={(e) => handleLinkClick(e, '/soy-cliente')}
            className="text-neutral-600 hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0"
          >
            Centro de Ayuda
          </a>
        </nav>
      </div>
    </footer>
  );
}
