'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ShopCards from "@/app/ui/top/shop-cards";
import Map from "@/app/ui/top/map";
import Pagination from "@/app/ui/top/pagination";

export default function StoreMapView() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const area = params.get('area') || '渋谷';
  const page = Number(params.get('page')) || 1;

  const [hoverStoreId, setHoverStoreId] = useState<number | null>(null);
  const [stores, setStores] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const points = [{lat: 35.662725, lng: 139.700355}];

  useEffect(() => {
    const fetchStores = async () => {
      try{
      const response = await fetch(`/api/stores?area=${area}&page=${page}`);
      const stores = await response.json();
      setStores(stores);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    const fetchTotalPages = async () => {
      try{
        const response = await fetch(`/api/total-pages?area=${area}`);
        const totalPages = await response.json();
        setTotalPages(totalPages);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchStores();
    fetchTotalPages();
  }, [area, page]);

  return(
    <div className="flex flex-row mx-14 my-8">
      <div className="w-[50rem]">
        <ShopCards setHoverStoreId={setHoverStoreId} stores={stores}/>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <Map points={points} hoverStoreId={hoverStoreId} />
  </div>
  )
}