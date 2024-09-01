import { fetchGeoLocation } from '@/app/lib/data';
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  try{
    const area = searchParams.get('area') || '';
    const stores = await fetchGeoLocation(area);
    return new Response(JSON.stringify(stores), {
      status: 200,
    })
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}