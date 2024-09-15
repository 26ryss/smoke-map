'use client';

import ReviewScore from "@/app/_components/organisms/pages/top/review-score";
import { FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "@/styles/colors";
import ActionPanel from "@/app/_components/organisms/pages/stores/action-panel";
import { useState } from 'react';
import { type User } from '@supabase/supabase-js';
import ReviewModal from "@/app/_components/organisms/pages/stores/review-modal";
import SmokeVoteModal from "@/app/_components/organisms/pages/stores/smoke-vote-modal";
import { Store, ReviewData, Review } from "@/app/lib/definitions";
import { Search } from "lucide-react";

export default function Template({ 
  user,
  store,
  review,
  pastVote,
  pastReview,
}: {
    user: User | null;
    store: Store;
    review: ReviewData;
    pastVote: boolean | undefined;
    pastReview: Review | undefined;
  }){
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSmokeVoteModalOpen, setIsSmokeVoteModalOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="mb-4 md:flex flex-row justify-between md:mb-0">
        <h1 className="text-lg md:text-3xl font-bold leading-6 text-gray-900 pb-3">{store.name}</h1>
        <div className="h-full">
          <ActionPanel setIsReviewModalOpen={setIsReviewModalOpen} setIsSmokeVoteModalOpen={setIsSmokeVoteModalOpen} user={user} />
        </div>
      </div>
      
      <div className="pb-10">
        <ReviewScore reviewScore={review.avg} reviewCount={review.count}/>
        <div className="pt-1 flex flex-row items-center">
          <FaMapMarkerAlt color={colors.gray700}/>
          <p className="text-sm text-gray-600 pl-1">{store.address}</p>
        </div>
      </div>

      <div>
        <h2 className="text-md md:text-xl font-bold leading-6 text-gray-900 pb-3">トップ</h2>
          <p className="text-sm md:text-md">{store.description}</p>
      </div>

      <ReviewModal isOpen={isReviewModalOpen} setIsOpen={setIsReviewModalOpen} user={user} storeId={store.id} pastReview={pastReview}/>
      <SmokeVoteModal isOpen={isSmokeVoteModalOpen} setIsOpen={setIsSmokeVoteModalOpen} user={user} storeId={store.id} pastVote={pastVote}/>
    </div>
  )
}