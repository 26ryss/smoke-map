import { sql } from '@vercel/postgres';
import { createClient } from '@/utils/supabase/server';
import { User, Area, Store } from './definitions';

const supabase = createClient();

const ITEMS_PER_PAGE = 4;
export async function fetchFilteredStores (
  area: string,
  currentPage: number,
) {
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
      areas (name)
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
  try {
    const { data, error } = await supabase
      .from('stores')
      .select(`
        *,
        areas (name)
      `)
      .eq('areas.name', area)
      .join('areas', 'area_id', 'id');

    if (error) {
      console.error('Supabase Error:', error);
      throw new Error('Failed to fetch store pages');
    }

    const totalStores = Math.ceil(data.length / ITEMS_PER_PAGE);
    return totalStores;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch area');
  }
}


// export async function fetchFilteredStores(
//   area: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const stores = await sql<Store[]>`
//       SELECT
//         stores.id,
//         stores.name,
//         stores.address,
//         stores.area_id,
//         stores.description,
//         stores.url,
//         stores.eye_catch_url,
//         stores.latitude,
//         stores.longitude,
//         areas.name as area_name
//       FROM stores JOIN areas ON stores.area_id = areas.id
//       WHERE areas.name = ${area}
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
//     `;
//     return stores.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch area');
//   }
// }

// export async function fetchStoresPages(area:string){
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM stores
//     JOIN areas ON stores.area_id = areas.id
//     WHERE areas.name = ${area};
//     `;

//     const totalStores = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalStores;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch area');
//   }
// }

export async function fetchGeoLocation(area: string){
  try {
    const location = await sql`SELECT latitude, longitude
      FROM areas
      WHERE name = ${area};
    `;
    return location.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch area');
  }
}

export async function fetchStoreById(id: number) {
  try {
    const data = await sql<Store>`
      SELECT
        stores.id,
        stores.name,
        stores.address,
        stores.area_id,
        stores.description,
        stores.url,
        stores.eye_catch_url,
        stores.latitude,
        stores.longitude
      FROM stores
      WHERE stores.id = ${id};
    `;
    const store = data.rows.map((store)=>({
      ...store,
    }))
    return store[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch a store');
  }
}