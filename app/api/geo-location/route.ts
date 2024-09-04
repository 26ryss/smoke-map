import { fetchGeoLocation } from '@/app/lib/data';
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  try{
    const area = searchParams.get('area') || '';
    const data = await fetchGeoLocation(area);
    return new Response(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}