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
    console.log(data)
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

// export async function fetchStoreById(id: number) {
//   try {
//     const data = await sql<Store>`
//       SELECT
//         stores.id,
//         stores.name,
//         stores.address,
//         stores.area_id,
//         stores.description,
//         stores.url,
//         stores.eye_catch_url,
//         stores.latitude,
//         stores.longitude
//       FROM stores
//       WHERE stores.id = ${id};
//     `;
//     const store = data.rows.map((store)=>({
//       ...store,
//     }))
//     return store[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch a store');
//   }
// }