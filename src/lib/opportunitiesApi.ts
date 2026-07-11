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
  returns: string;
  roi_value: number;
  tag: string;
  status: string;
  description: string;
  image_url: string;
  image_alt: string;
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
    returns: row.returns,
    roiValue: row.roi_value,
    tag: row.tag,
    status: row.status,
    description: row.description,
    image: row.image_url,
    alt: row.image_alt,
  };
}

/** Fetches every opportunity, newest first (insertion order via created_at) */
export async function fetchOpportunities(): Promise<Opportunity[]> {
  const { data, error } = await supabase
    .from('opportunities')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }

  return (data as OpportunityRow[]).map(mapRow);
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