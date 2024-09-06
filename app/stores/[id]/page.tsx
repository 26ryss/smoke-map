import shops from "@/app/lib/shop-data";
import ReviewScore from "@/app/ui/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { fetchStoreById } from "@/app/lib/data";
import { fetchReviewScoreAndCount } from "@/app/lib/data";
import ActionPanel from "@/app/ui/stores/action-panel";

export default async function Page({ params }: { params: { id: string }}){
  const id = parseInt(params.id, 10);
  const store = await fetchStoreById(id);
  const data = await fetchReviewScoreAndCount(id);
  const { avg, count } = data[0];

  return (
    <div className="py-10 px-36">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-6">{store.name}</h1>
        <ActionPanel />
      </div>
      
      <div className="pb-10">
        <ReviewScore reviewScore={avg} reviewCount={count}/>
        <div className="pt-1 flex flex-row items-center">
          <FaMapMarkerAlt color={colors.gray700}/>
          <p className="text-sm text-gray-600 pl-1">{store.address}</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 pb-3">トップ</h2>
        <p>{store.description}</p>
      </div>
    </div>
  )
}