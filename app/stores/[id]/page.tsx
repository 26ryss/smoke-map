import { createClient } from "@/utils/supabase/server";
import { fetchSmokeVote } from "@/app/lib/data";
import StorePage from "./store-page";

export default async function Page({ params }: { params: { id: string }}){
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  const smokeVoteData = await fetchSmokeVote(Number(params.id));

  return <StorePage storeId={params.id} user={user} smokeVoteData={smokeVoteData} />
}