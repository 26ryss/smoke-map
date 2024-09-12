'use client';

import clsx from 'clsx';
import Image from 'next/image';
import ReviewScore from "@/app/_components/organisms/pages/top/review-score";
import SmokeVote from "@/app/_components/organisms/pages/top/smoke-vote";
import Link from 'next/link';
import { ScrollArea } from '@mantine/core';
import { Store, VoteData, ReviewData } from '@/app/lib/definitions';

export default function ShopCards({
  setHoverStoreId,
  stores,
  reviews,
  votes,
}:{
  setHoverStoreId: (id:number | null) => void
  stores: Store[],
  reviews: { [key: number]: ReviewData },
  votes: { [key: number]: VoteData },
}) {
  return (
      <div className="flex grow flex-col justify-between border w-full">
        <div className="bg-white">
          <ScrollArea h={480}>
          {stores.map((store, i) =>{
            const review = reviews[store.id];
            const smokeVote = votes[store.id];
            return (
              <Link href={`/stores/${store.id}`} key={store.id}>
                <div
                  className={clsx(
                    'flex flex-row items-center justify-between px-4 py-4 hover:bg-gray-100',
                    {
                      'border-t border-gray-200': i !== 0,
                    }
                  )}
                  onMouseEnter={() => setHoverStoreId(store.id)}
                  onMouseLeave={() => setHoverStoreId(null)}
                >
                  <div className="flex items-center">
                    <Image
                      src="/coffee.png"
                      alt={`${store.name}'s profile picture`}
                      className="mr-4"
                      width={70}
                      height={70}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-md font-semibold md:text-base hover:text-blue-500">
                        {store.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {store.address}
                      </p>
                      <div className="mb-1">
                        <ReviewScore reviewScore={review? review.avg: 0} reviewCount={review? review.count: 0} />
                      </div>
                      <SmokeVote smokeCount={smokeVote ? smokeVote.isAbleToSmoke : 0} nonSmokeCount={smokeVote ? smokeVote.isNotAbleToSmoke : 0} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          </ScrollArea>
        </div>
      </div>
  )
}