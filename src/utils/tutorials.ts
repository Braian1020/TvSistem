import { normalizeSearchText } from './troubleshooting';

export type TutorialCategory =
  | 'Primeros pasos'
  | 'Configuración'
  | 'Aplicaciones'
  | 'Control remoto'
  | 'Solución de problemas';

export interface TutorialVideo {
  id: string;
  order: number;
  driveId: string;
  originalFileName: string;
  title: string;
  description: string;
  category: TutorialCategory;
  fileSizeLabel: string;
  durationLabel?: string;
}

export function getDrivePreviewUrl(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}

export function getDriveThumbnailUrl(driveId: string, width = 800): string {
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w${width}`;
}

export function getAvailableTutorialCategories(
  videos: TutorialVideo[]
): TutorialCategory[] {
  const seen = new Set<TutorialCategory>();
  const categories: TutorialCategory[] = [];
  for (const video of videos) {
    if (!seen.has(video.category)) {
      seen.add(video.category);
      categories.push(video.category);
    }
  }
  return categories;
}

export function filterTutorialVideos(
  videos: TutorialVideo[],
  query: string,
  category: string = 'all'
): TutorialVideo[] {
  const normalizedQuery = normalizeSearchText(query);

  return videos.filter((video) => {
    const matchesCategory = category === 'all' || video.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }

    const searchable = normalizeSearchText(
      [video.title, video.description, video.originalFileName, video.category].join(' ')
    );
    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    return tokens.every((token) => searchable.includes(token));
  });
}
