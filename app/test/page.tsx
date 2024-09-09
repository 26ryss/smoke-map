import { fetchVoteByUserId } from "../lib/data"

export default async function Page() {
  const vote = await fetchVoteByUserId("02095747-266a-489a-8d24-54bdbe23a428",1)
  console.log(vote);
  return (
    <div>
      <p>test</p>
    </div>
  )
}