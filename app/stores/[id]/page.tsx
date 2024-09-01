import shops from "@/app/lib/shop-data";
import ReviewScore from "@/app/ui/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";

export default function Page({ params }: { params: { id: string }}){
  const id = parseInt(params.id, 10);
  const shop = shops[id-1];
  const reviewScore = 4.5;
  const reviewCount = 121;
  const fullAddress = shop.prefecture+shop.city+shop.address;

  return (
    <div className="py-10 px-36">
      <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-6">{shop.name}</h1>
      <div className="pb-10">
        <ReviewScore reviewScore={reviewScore} reviewCount={reviewCount}/>
        <div className="pt-1 flex flex-row items-center">
          <FaMapMarkerAlt color={colors.gray700}/>
          <p className="text-sm text-gray-600 pl-1">{fullAddress}</p>
        </div>
      </div>
      
      <p>{shop.description}</p>
    </div>
  )
}