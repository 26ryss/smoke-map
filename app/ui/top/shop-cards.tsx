'use client';

import clsx from 'clsx';
import Image from 'next/image';
import ReviewScore from "@/app/ui/top/review-score";
import SmokeVote from "@/app/ui/top/smoke-vote";
import Link from 'next/link';
import { ScrollArea } from '@mantine/core';
import { Store } from '@/app/lib/definitions'

export default function ShopCards({
  setHoverStoreId,
  stores
}:{
  setHoverStoreId: (id:number | null) => void
  stores: Store[]
}) {
  const reviewScore = 4.5;
  const commentCount = 121;
  const smokeCount = 30;
  const nonSmokeCount = 0;

  return (
      <div className="flex grow flex-col justify-between border">
        <div className="bg-white">
          <ScrollArea h={480}>
          {stores.map((store, i) =>{
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
                        <ReviewScore reviewScore={reviewScore} reviewCount={commentCount} />
                      </div>
                      <SmokeVote smokeCount={smokeCount} nonSmokeCount={nonSmokeCount} />
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