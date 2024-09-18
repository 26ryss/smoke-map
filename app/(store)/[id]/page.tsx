import { createClient } from "@/utils/supabase/server";
import { fetchStoreById, fetchReviewScoreAndCount, fetchVoteByUserId, fetchReviewByUserId } from "@/app/lib/data";
import Template from "../../_components/templates/stores/template";

export default async function Page({ params }: { params: { id: string }}){
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const storeId = parseInt(params.id, 10);
  
  const store = await fetchStoreById(storeId);
  const review = await fetchReviewScoreAndCount(storeId);
  const pastVote = user ? await fetchVoteByUserId(user.id, storeId) : undefined;
  const pastReview = user ? await fetchReviewByUserId(user.id, storeId) : undefined;

  return (
    <Template user={user} store={store} review={review} pastVote={pastVote} pastReview={pastReview} />
  )
}