export interface TroubleshootingItem {
  id: string;
  title: string;
  category: 'Encendido y video' | 'Red y aplicaciones' | 'Control y sistema';
  summary: string;
  keywords: string[];
  steps: string[];
}

export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function filterTroubleshootingItems(
  items: TroubleshootingItem[],
  query: string,
  category: string = 'all'
): TroubleshootingItem[] {
  const normalizedQuery = normalizeSearchText(query);

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }

    const searchableText = normalizeSearchText(
      [item.title, item.summary, item.category, ...item.keywords, ...item.steps].join(' ')
    );
    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    return tokens.every((token) => searchableText.includes(token));
  });
}
