import { createClient } from "@/utils/supabase/server";
import { fetchStoreById, fetchReviewScoreAndCount } from "@/app/lib/data";
import StorePage from "./store-page";

export default async function Page({ params }: { params: { id: string }}){
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const storeId = parseInt(params.id, 10);
  
  const store = await fetchStoreById(storeId);
  const review = await fetchReviewScoreAndCount(storeId);

  return <StorePage user={user} store={store} review={review} />
}