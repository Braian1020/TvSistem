/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { AppRoute, normalizeRoute, getPageTitle } from './utils/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { BuyTvBoxPage } from './components/BuyTvBoxPage';
import { HelpCenterPage } from './components/HelpCenterPage';

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
        {route === '/' && <HomePage onNavigate={navigate} />}
        {route === '/comprar' && <BuyTvBoxPage />}
        {route === '/soy-cliente' && <HelpCenterPage />}
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}
