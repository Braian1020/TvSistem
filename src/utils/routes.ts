export type AppRoute = '/' | '/comprar' | '/soy-cliente';

export function normalizeRoute(pathname: string): AppRoute {
  const cleaned = pathname.trim().replace(/\/+$/, '').toLowerCase();
  if (cleaned === '/comprar') {
    return '/comprar';
  }
  if (cleaned === '/soy-cliente') {
    return '/soy-cliente';
  }
  return '/';
}

export function getPageTitle(route: AppRoute): string {
  switch (route) {
    case '/comprar':
      return 'Comprar TV Box – POOLSTORE';
    case '/soy-cliente':
      return 'Centro de Ayuda – POOLSTORE';
    default:
      return 'POOLSTORE – Sistema Android TV Box';
  }
}
