import { supabase } from './supabaseClient';
import type { Insight } from '../types';

/** Raw shape of a row as it comes back from the `insights` table */
interface InsightRow {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  published_at: string;
  read_time: string;
  image_url: string;
  image_alt: string;
  content: Insight['content'];
  author: string;
  source_url: string | null;
  views: number;
}

/** Formats a stored date (e.g. "2024-12-01") into the display string used across the UI (e.g. "December 2024") */
function formatDisplayDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/** Maps a raw Supabase row into the `Insight` shape the UI components expect */
function mapRow(row: InsightRow): Insight {
  return {
    id: row.id,
    category: row.category,
    title: row.title,
    excerpt: row.excerpt,
    date: formatDisplayDate(row.published_at),
    publishedAt: row.published_at,
    readTime: row.read_time,
    image: row.image_url,
    alt: row.image_alt,
    content: row.content,
    author: row.author,
    sourceUrl: row.source_url ?? undefined,
    views: row.views,
  };
}

/** Fetches all insights, most recently published first */
export async function fetchInsights(): Promise<Insight[]> {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching insights:', error);
    throw error;
  }

  return (data as InsightRow[]).map(mapRow);
}

/** Fetches a single insight by its slug id */
export async function fetchInsightById(id: string): Promise<Insight | null> {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching insight:', error);
    throw error;
  }

  return data ? mapRow(data as InsightRow) : null;
}