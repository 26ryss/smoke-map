'use client';

import ReviewScore from "@/app/ui/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";
import ActionPanel from "@/app/ui/stores/action-panel";
import { useState } from 'react';
import { type User } from '@supabase/supabase-js';
import ReviewModal from "@/app/ui/stores/review-modal";
import SmokeVoteModal from "@/app/ui/stores/smoke-vote-modal";
import { Store, ReviewData } from "@/app/lib/definitions";

export default function StorePage({ 
  user,
  store,
  review,
}: {
    user: User | null;
    store: Store;
    review: ReviewData;
  }){
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSmokeVoteModalOpen, setIsSmokeVoteModalOpen] = useState(false);

  return (
    <div className="py-10 px-36">
      <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-3">{store.name}</h1>
        <ActionPanel setIsReviewModalOpen={setIsReviewModalOpen} setIsSmokeVoteModalOpen={setIsSmokeVoteModalOpen} user={user} />
      </div>
      
      <div className="pb-10">
        <ReviewScore reviewScore={review.avg} reviewCount={review.count}/>
        <div className="pt-1 flex flex-row items-center">
          <FaMapMarkerAlt color={colors.gray700}/>
          <p className="text-sm text-gray-600 pl-1">{store.address}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 pb-3">トップ</h2>
          <p>{store.description}</p>
      </div>

      <ReviewModal isOpen={isReviewModalOpen} setIsOpen={setIsReviewModalOpen} user={user} storeId={store.id}/>
      <SmokeVoteModal isOpen={isSmokeVoteModalOpen} setIsOpen={setIsSmokeVoteModalOpen} user={user} storeId={store.id} />
    </div>
  )
}