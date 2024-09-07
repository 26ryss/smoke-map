'use client';

import ReviewScore from "@/app/ui/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";
import { fetchStoreById } from "@/app/lib/data";
import { fetchReviewScoreAndCount } from "@/app/lib/data";
import ActionPanel from "@/app/ui/stores/action-panel";
import { useEffect, useState } from 'react';
import { Store } from '@/app/lib/definitions';
import { type User } from '@supabase/supabase-js';
import ReviewModal from "@/app/ui/stores/review-modal";
import SmokeVoteModal from "@/app/ui/stores/smoke-vote-modal";
import { VoteData, ReviewData } from "@/app/lib/definitions";
import { Skeleton } from "@/components/ui/skeleton";

export default function StorePage({ 
  storeId,
  user, 
  smokeVoteData,
}: {
    storeId: string
    user: User | null;
    smokeVoteData: VoteData;
  }){
  const id = parseInt(storeId, 10);
  const [store, setStore] = useState<Store | null>(null);
  const [review, setReview] = useState<ReviewData | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSmokeVoteModalOpen, setIsSmokeVoteModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const store = await fetchStoreById(id);
      const reviewData = await fetchReviewScoreAndCount(id);
      setStore(store);
      setReview(reviewData[0]);
    }
    fetchData();
  }, [id]);

  return (
    <div className="py-10 px-36">
      <div className="flex flex-row justify-between">
        {store ? (
          <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-3">{store.name}</h1>
          ):(
          <Skeleton className="h-[40px] w-[400px] pb-3" />
          )}
        <ActionPanel setIsReviewModalOpen={setIsReviewModalOpen} setIsSmokeVoteModalOpen={setIsSmokeVoteModalOpen} user={user} smokeVoteData={smokeVoteData} />
      </div>
      
      {(store && review) ? (
        <div className="pb-10">
          <ReviewScore reviewScore={review.avg} reviewCount={review.count}/>
          <div className="pt-1 flex flex-row items-center">
            <FaMapMarkerAlt color={colors.gray700}/>
            <p className="text-sm text-gray-600 pl-1">{store.address}</p>
          </div>
        </div>
      ):(
        <div className="pb-10 space-y-2">
          <Skeleton className="h-[10px] w-[250px]" />
          <Skeleton className="h-[10px] w-[250px]" />
        </div>
      )}

      
      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 pb-3">トップ</h2>
        {store ? (
          <p>{store.description}</p>
        ):(
          <div className="space-y-2">
            {Array.from({ length: 5 } , (_, i) => (
              <Skeleton key={i} className="h-[10px] w-[800px]" />
            ))}
          </div>
        )}
      </div>

      <ReviewModal isOpen={isReviewModalOpen} setIsOpen={setIsReviewModalOpen} user={user} storeId={id}/>
      <SmokeVoteModal isOpen={isSmokeVoteModalOpen} setIsOpen={setIsSmokeVoteModalOpen} user={user} storeId={id} />
    </div>
  )
}