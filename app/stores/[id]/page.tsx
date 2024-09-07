import { createClient } from "@/utils/supabase/server";
import StorePage from "./store-page";

export default async function Page({ params }: { params: { id: string }}){
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <StorePage storeId={params.id} user={user}/>
}