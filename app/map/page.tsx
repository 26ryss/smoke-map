import StoreMapView from "@/app/_components/organisms/pages/top/store-map-view";
import { Suspense } from "react";
import { fetchFilteredStores, fetchStoresPages, fetchReviewScoreAndCount, fetchSmokeVote, fetchGeoLocation } from "@/app/lib/data";
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
  const areaGeoLocation = await fetchGeoLocation(area);

  return (
    <div>
      <Suspense>
        <StoreMapView area={area} stores={stores} totalPages={totalPages} reviews={reviews} votes={votes} areaGeoLocation={areaGeoLocation} />
      </Suspense>
    </div>
  );
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