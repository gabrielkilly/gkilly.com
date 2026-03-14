import readingTime from 'reading-time';

/** Format a Date object to "Mar 14, 2026" */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year:  'numeric',
    month: 'short',
    day:   '2-digit',
  }).format(date);
}

/** Get human-readable reading time from raw content string */
export function getReadingTime(content: string): string {
  return readingTime(content).text;
}

/** Convert a string to a URL-safe slug */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Get the Dracula hex color for a blog category */
export function categoryColor(category: string): string {
  const colors: Record<string, string> = {
    'homelab':              '#50FA7B',
    'music':                '#FF79C6',
    'software-engineering': '#8BE9FD',
    'culture':              '#FFB86C',
  };
  return colors[category] ?? '#BD93F9';
}

/** Get the display label for a blog category */
export function categoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'homelab':              'Homelab',
    'music':                'Music',
    'software-engineering': 'Engineering',
    'culture':              'Culture',
  };
  return labels[category] ?? category;
}
