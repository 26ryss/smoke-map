import clsx from 'clsx';
import Link from 'next/link';
import { Store, VoteData, ReviewData } from '@/app/lib/definitions';
import Card from './card';

export default function ShopCards({
  stores,
  reviews,
  votes,
}:{
  stores: Store[],
  reviews: { [key: number]: ReviewData },
  votes: { [key: number]: VoteData },
}) {
  return (
      <div className="flex grow flex-col justify-between w-full border-t border-b">
        <div className="bg-white">
          {stores.map((store, i) =>{
            const review = reviews[store.id];
            const smokeVote = votes[store.id];
            return (
              <Link href={`/stores/${store.id}`} key={store.id}>
                <div
                  className={clsx(
                    'flex flex-row items-center justify-between px-4 py-4 hover:bg-gray-100',
                    {
                      'border-t border-gray-100': i !== 0,
                    }
                  )}
                >
                  <Card store={store} review={review} smokeVote={smokeVote} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
  )
}