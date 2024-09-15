import Image from 'next/image';
import { Store, ReviewData, VoteData } from "@/app/lib/definitions";
import ReviewScore from "@/app/_components/organisms/pages/top/review-score";
import SmokeVote from "@/app/_components/organisms/pages/top/smoke-vote";

export default function Card({ 
  store,
  review,
  smokeVote,
}: { 
  store: Store;
  review: ReviewData;
  smokeVote: VoteData;
 }) {
  return(
    <div className="flex items-center">
      <Image
        src="/coffee.png"
        alt={`${store.name}'s profile picture`}
        className="mr-4"
        width={80}
        height={80}
      />
      <div className="min-w-0">
        <h2 className="text-lg font-semibold pb-2">
          {store.name}
        </h2>
        <p className="text-sm text-gray-500">
          {store.address}
        </p>
        <div className="mb-1">
        <ReviewScore reviewScore={review? review.avg: 0} reviewCount={review? review.count: 0} />
        </div>
        <SmokeVote smokeCount={smokeVote ? smokeVote.isAbleToSmoke : 0} nonSmokeCount={smokeVote ? smokeVote.isNotAbleToSmoke : 0} />
      </div>
    </div>
  )
}