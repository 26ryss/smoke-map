'use client';

import { useState } from 'react';

import ShopCards from "@/app/ui/top/shop-cards";
import Map from "@/app/ui/top/map";
import Pagination from "@/app/ui/top/pagination";

export default function StoreMapView() {
  const [hoverStoreId, setHoverStoreId] = useState<number | null>(null);
  const totalPages = 3;
  const points = [{lat: 35.662725, lng: 139.700355}];
  console.log(hoverStoreId);

  return(
    <div className="flex flex-row mx-14 my-8">
      <div className="w-[50rem]">
        <ShopCards setHoverStoreId={setHoverStoreId} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <Map points={points} hoverStoreId={hoverStoreId} />
  </div>
  )
}