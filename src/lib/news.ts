import { getCollection, type CollectionEntry } from 'astro:content';

/** Published (non-draft) news, newest first. */
export async function getPublishedNews(): Promise<CollectionEntry<'news'>[]> {
  const all = await getCollection('news', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id));
}

const pad = (n: number) => String(n).padStart(2, '0');

/** 2026.09.26 */
export function formatDate(d: Date): string {
  return `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(d.getUTCDate())}`;
}

/** 2026年9月26日 */
export function formatDateJa(d: Date): string {
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

export function isoDate(d: Date): string {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}
