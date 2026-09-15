import { supabase } from './supabaseClient';
import type { Opportunity } from '../types';

/** Raw shape of a row as it comes back from the `opportunities` table */
interface OpportunityRow {
  id: string;
  type: string;
  title: string;
  location: string;
  city: string;
  price: string;
  price_value: number;
  tag: string;
  status: string;
  description: string;
  image_url: string;
  image_alt: string;
  display_order?: number;
  updated_at?: string;
}

function mapRow(row: OpportunityRow): Opportunity {
  return {
    id: row.id,
    type: row.type,
    title: row.title,
    location: row.location,
    city: row.city,
    price: row.price,
    priceValue: row.price_value,
    tag: row.tag,
    status: row.status,
    description: row.description,
    image: row.image_url,
    alt: row.image_alt,
    displayOrder: row.display_order,
    updatedAt: row.updated_at,
  };
}

/** Fetches every opportunity, ordered by custom admin order (display_order) then newest first */
export async function fetchOpportunities(): Promise<Opportunity[]> {
  let data: OpportunityRow[] | null = null;

  const res1 = await supabase
    .from('opportunities')
    .select('*')
    .order('display_order', { ascending: true })
    .order('updated_at', { ascending: false });

  if (!res1.error) {
    data = res1.data as OpportunityRow[];
  } else {
    const res2 = await supabase
      .from('opportunities')
      .select('*')
      .order('updated_at', { ascending: false });

    if (res2.error) {
      console.error('Error fetching opportunities:', res2.error);
      throw res2.error;
    }
    data = res2.data as OpportunityRow[];
  }

  const mapped = (data || []).map(mapRow);
  mapped.sort((a, b) => {
    const hasOrderA = a.displayOrder !== undefined && a.displayOrder !== null;
    const hasOrderB = b.displayOrder !== undefined && b.displayOrder !== null;

    if (hasOrderA && hasOrderB) {
      if (a.displayOrder! !== b.displayOrder!) {
        return a.displayOrder! - b.displayOrder!;
      }
    } else if (hasOrderA) {
      return -1;
    } else if (hasOrderB) {
      return 1;
    }

    const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
    const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
    return timeB - timeA;
  });

  return mapped;
}

/** Fetches a single opportunity by its slug id */
export async function fetchOpportunityById(id: string): Promise<Opportunity | null> {
  const { data, error } = await supabase
    .from('opportunities')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching opportunity:', error);
    throw error;
  }

  return data ? mapRow(data as OpportunityRow) : null;
}