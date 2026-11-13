/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AppRoute, normalizeRoute, getPageTitle } from './utils/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';

const BuyTvBoxPage = lazy(() =>
  import('./components/BuyTvBoxPage').then((module) => ({
    default: module.BuyTvBoxPage,
  }))
);

const HelpCenterPage = lazy(() =>
  import('./components/HelpCenterPage').then((module) => ({
    default: module.HelpCenterPage,
  }))
);

function RouteLoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-sm font-medium text-neutral-500"
    >
      Cargando sección...
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() =>
    normalizeRoute(window.location.pathname)
  );

  useEffect(() => {
    document.title = getPageTitle(route);
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((nextRoute: AppRoute) => {
    const normalized = normalizeRoute(nextRoute);
    if (window.location.pathname !== normalized) {
      window.history.pushState(null, '', normalized);
    }
    setRoute(normalized);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header currentRoute={route} onNavigate={navigate} />

      <div className="flex-1">
        <Suspense fallback={<RouteLoadingFallback />}>
          {route === '/' && <HomePage onNavigate={navigate} />}
          {route === '/comprar' && <BuyTvBoxPage />}
          {route === '/soy-cliente' && <HelpCenterPage />}
        </Suspense>
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}
