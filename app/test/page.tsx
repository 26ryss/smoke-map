import { fetchReviewByUserId } from "../lib/data"

export default async function Page() {
  const vote = await fetchReviewByUserId("02095747-266a-489a-8d24-54bdbe23a428",3)
  return (
    <div>
      <p>test</p>
    </div>
  )
}