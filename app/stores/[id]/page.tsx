import shops from "@/app/lib/shop-data";
import ReviewScore from "@/app/ui/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { fetchStoreById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string }}){
  const id = parseInt(params.id, 10);
  const store = await fetchStoreById(id);
  
  const reviewScore = 4.5;
  const reviewCount = 121;

  return (
    <div className="py-10 px-36">
      <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-6">{store.name}</h1>
      <div className="pb-10">
        <ReviewScore reviewScore={reviewScore} reviewCount={reviewCount}/>
        <div className="pt-1 flex flex-row items-center">
          <FaMapMarkerAlt color={colors.gray700}/>
          <p className="text-sm text-gray-600 pl-1">{store.address}</p>
        </div>
      </div>
      
      <p>{store.description}</p>
    </div>
  )
}