'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ShopCards from "@/app/ui/top/shop-cards";
import Map from "@/app/ui/top/map";
import Pagination from "@/app/ui/top/pagination";

import { Store } from "@/app/lib/definitions";

export default function StoreMapView({
  area,
  stores,
  totalPages,
} : {
  area: string;
  stores: Store[];
  totalPages: number;
}) {
  const [hoverStoreId, setHoverStoreId] = useState<number | null>(null);


  return(
    <div className="flex flex-row mx-14 my-8">
      <div className="w-[50rem]">
        <ShopCards setHoverStoreId={setHoverStoreId} stores={stores}/>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <Map stores={stores} hoverStoreId={hoverStoreId} area={area}/>
  </div>
  )
}