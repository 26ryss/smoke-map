import StoreMapView from "@/app/ui/top/store-map-view";
import { Suspense } from "react";
import { fetchFilteredStores, fetchStoresPages, fetchReviewScoreAndCount, fetchSmokeVote } from "@/app/lib/data";
import { Store, VoteData, ReviewData } from "@/app/lib/definitions";

export default async function Home({
  searchParams,
}: {
  searchParams?:{
    area: string;
    page: string;
  };
}) {
  const area = searchParams?.area || '渋谷';
  const page = Number(searchParams?.page) || 1;
  const stores = await fetchFilteredStores(area, page);
  const totalPages = await fetchStoresPages(area);

  const reviews = await fetchReviews(stores);
  const votes = await fetchVotes(stores);

  return (
    <div>
      <Suspense>
        <StoreMapView area={area} stores={stores} totalPages={totalPages} reviews={reviews} votes={votes} />
      </Suspense>
    </div>
  );
}

async function fetchReviews(stores:Store[]){
  const reviews: { [key: number]: ReviewData } = {};

  for (const store of stores) {
    const data = await fetchReviewScoreAndCount(store.id);
    const { avg, count } = data[0];
    reviews[store.id] = { avg, count };
  }
  return reviews;
}

async function fetchVotes(stores:Store[]){
  const votes: { [key: number]: VoteData} = {};

  for (const store of stores) {
    const data = await fetchSmokeVote(store.id);
    const { isAbleToSmoke, isNotAbleToSmoke } = data;
    votes[store.id] = { isAbleToSmoke, isNotAbleToSmoke };
  }
  return votes;
}