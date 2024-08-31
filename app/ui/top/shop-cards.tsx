import shops from "@/app/lib/shop-data";
import clsx from 'clsx';
import Image from 'next/image';
import ReviewScore from "@/app/ui/top/review-score";
import SmokeVote from "@/app/ui/top/smoke-vote";
import Link from 'next/link';
import { ScrollArea } from '@mantine/core';

export default function ShopCards({setHoverStoreId}:{setHoverStoreId: (id:number | null) => void}) {
  const reviewScore = 4.5;
  const commentCount = 121;
  const smokeCount = 30;
  const nonSmokeCount = 0;

  return (
      <div className="flex grow flex-col justify-between border">
        <div className="bg-white">
          <ScrollArea h={480}>
          {shops.map((shop, i) =>{
            const fullAddress = shop.prefecture + shop.city + shop.address;
            return (
              <Link href={`/shops/${shop.id}`} key={shop.id}>
                <div
                  className={clsx(
                    'flex flex-row items-center justify-between pl-4 py-4 hover:bg-gray-100',
                    {
                      'border-t border-gray-200': i !== 0,
                    }
                  )}
                  onMouseEnter={() => setHoverStoreId(shop.id)}
                  onMouseLeave={() => setHoverStoreId(null)}
                >
                  <div className="flex items-center">
                    <Image
                      src="/coffee.png"
                      alt={`${shop.name}'s profile picture`}
                      className="mr-4"
                      width={70}
                      height={70}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-md font-semibold md:text-base hover:text-blue-500">
                        {shop.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {fullAddress}
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