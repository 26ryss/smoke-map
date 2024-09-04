import { fetchGeoLocation } from '@/app/lib/data';

export default async function Page() {
  const data = await fetchGeoLocation('渋谷');
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}