import { fetchFilteredStores } from '@/app/lib/data';
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  try{
    const area = searchParams.get('area') || '';
    const currentPage = Number(searchParams.get('page')) || 1;
    const stores = await fetchFilteredStores(area, currentPage);
    return new Response(JSON.stringify(stores), {
      status: 200,
    })
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}