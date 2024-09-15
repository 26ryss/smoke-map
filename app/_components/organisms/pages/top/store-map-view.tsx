'use client';

import { useState } from 'react';

import ShopCards from "@/app/_components/organisms/pages/top/shop-cards";
import Map from "@/app/_components/organisms/pages/top/map";
import Pagination from "@/app/_components/organisms/pages/top/pagination";

import { Store, ReviewData, VoteData, GeoLocation } from "@/app/lib/definitions";

export default function StoreMapView({
  area,
  stores,
  totalPages,
  reviews,
  votes,
  areaGeoLocation,
} : {
  area: string;
  stores: Store[];
  totalPages: number;
  reviews: { [key: number]: ReviewData };
  votes: { [key: number]: VoteData };
  areaGeoLocation: GeoLocation;
}) {
  const [hoverStoreId, setHoverStoreId] = useState<number | null>(null);

  return(
    <div className="flex flex-row my-8 z-0 justify-center">
      <div className="w-full md:w-[400px]">
        <ShopCards setHoverStoreId={setHoverStoreId} stores={stores} reviews={reviews} votes={votes}/>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <div className="grow z-0 hidden md:block">
        <Map stores={stores} hoverStoreId={hoverStoreId} areaGeoLocation={areaGeoLocation} />
      </div>
  </div>
  )
}