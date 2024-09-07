'use client';

import { useState } from 'react';

import ShopCards from "@/app/ui/top/shop-cards";
import Map from "@/app/ui/top/map";
import Pagination from "@/app/ui/top/pagination";

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
    <div className="flex flex-row mx-14 my-8">
      <div className="w-[400px]">
        <ShopCards setHoverStoreId={setHoverStoreId} stores={stores} reviews={reviews} votes={votes}/>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <div className="grow">
        <Map stores={stores} hoverStoreId={hoverStoreId} areaGeoLocation={areaGeoLocation} />
      </div>
  </div>
  )
}