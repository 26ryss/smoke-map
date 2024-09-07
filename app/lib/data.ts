"use server";

import { createClient } from '@/utils/supabase/server';

const ITEMS_PER_PAGE = 4;
export async function fetchFilteredStores (
  area: string,
  currentPage: number,
) {
  const supabase = createClient();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const { data, error } = await supabase
    .from('stores')
    .select(
      `
      id,
      name,
      address,
      area_id,
      description,
      url,
      eye_catch_url,
      latitude,
      longitude,
      areas!inner(name)
      `
    )
    .eq('areas.name', area)
    .range(offset, offset + ITEMS_PER_PAGE - 1);
  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to fetch stores');
  } else {
    return data;
  }
}

export async function fetchStoresPages(area: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('stores')
    .select(`
      *,
      areas (name)
    `, { count: 'exact' })
    .eq('areas.name', area)

  if (error) {
    console.error('Supabase Error:', error);
    throw new Error('Failed to fetch store pages');
  }

  const totalStores = Math.ceil(data.length / ITEMS_PER_PAGE);
  return totalStores;
}

export async function fetchGeoLocation(area: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('areas')
    .select('latitude, longitude')
    .eq('name', area);
  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to fetch area');
  } else {
    return data;
  }
}

export async function fetchStoreById(id: number){
  const supabase = createClient();
  const { data, error } = await supabase
    .from('stores')
    .select(`
      id,
      name,
      address,
      area_id,
      description,
      url,
      eye_catch_url,
      latitude,
      longitude
    `)
    .eq('id', id);
  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to fetch store');
  } else {
    return data[0];
  }
}

export async function fetchReviewScoreAndCount(id: number) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      score.avg(),
      score.count()
    `)
      .eq('store_id', id);
  if (error) {
    // console.error('Supabase error:', error);
    console.log('Supabase error:', error);
    throw new Error('Failed to fetch reviews');
  } else {
    return data;
  }
}

export async function fetchSmokeVote(id: number) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('votes')
    .select(`
      is_able_to_smoke,
      id.count()
      `)
    .eq('store_id', id);
  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to fetch smoke votes')
  } else {
    const len = data.length;
    let smokeVote = {
      isAbleToSmoke: 0,
      isNotAbleToSmoke: 0,
    };
    
    for (let i = 0; i < len; i++) {
      if (data[i].is_able_to_smoke) {
        smokeVote.isAbleToSmoke = data[i].count;
      } else {
        smokeVote.isNotAbleToSmoke = data[i].count;
      }
    }
    return smokeVote;
  }
}