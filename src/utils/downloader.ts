export type AppCategoryType = 'temporal' | 'permanente';

export type AppCodeStatus = 'Activo' | 'Consultar actualización' | 'Play Store';

export interface PreinstalledApp {
  id: string;
  name: string;
  purpose: string;
  category: AppCategoryType;
  categoryLabel: string;
  status: AppCodeStatus;
  downloaderCode: string | null;
  lastChecked: string;
  notes: string;
}

export interface DownloaderStep {
  stepNumber: string;
  title: string;
  description: string;
}

export function filterPreinstalledApps(
  apps: PreinstalledApp[],
  filter: 'all' | AppCategoryType
): PreinstalledApp[] {
  if (filter === 'all') {
    return apps;
  }
  return apps.filter((app) => app.category === filter);
}
