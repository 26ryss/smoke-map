import Template from "@/app/_components/templates/search/template"
import { fetchFilteredStores, fetchStoresPages, fetchReviewScoreAndCount, fetchSmokeVote  } from "@/app/lib/data"
import { Store, VoteData, ReviewData } from "@/app/lib/definitions"

export default async function Page({ 
  params,
  searchParams
 }: { 
  params: { area: string };
  searchParams?: {
    page: string;
  };
}) {
  const area = decodeURIComponent(params.area)
  const page = Number(searchParams?.page) || 1
  const stores = await fetchFilteredStores(area, page)
  const reviews = await fetchReviews(stores);
  const votes = await fetchVotes(stores);
  const totalPages = await fetchStoresPages(area);

  return (
    <>
      <Template area={area} stores={stores} reviews={reviews} votes={votes} totalPages={totalPages} />
    </>
  )
}

async function fetchReviews(stores:Store[]){
  const reviews: { [key: number]: ReviewData } = {};

  const promises = stores.map(store => 
    fetchReviewScoreAndCount(store.id)
      .then(data => {
        const { avg, count } = data;
        reviews[store.id] = { avg, count };
      })
  );

  await Promise.all(promises);

  return reviews;
}

async function fetchVotes(stores:Store[]){
  const votes: { [key: number]: VoteData} = {};

  const promises = stores.map(store =>
    fetchSmokeVote(store.id)
      .then(data => {
        const { isAbleToSmoke, isNotAbleToSmoke } = data;
        votes[store.id] = { isAbleToSmoke, isNotAbleToSmoke };
      })
  );

  await Promise.all(promises);
  
  return votes;
}