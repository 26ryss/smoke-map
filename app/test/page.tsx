import { fetchSmokeVote } from '@/app/lib/data';

export default async function Page() {
  const data = await fetchSmokeVote(1);
  console.log(data);
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}