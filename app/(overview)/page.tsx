import StoreMapView from "@/app/ui/top/store-map-view";
import { Suspense } from "react";
import { fetchFilteredStores, fetchStoresPages } from "@/app/lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?:{
    area: string;
    page: string;
  };
}) {
  const area = searchParams?.area || '渋谷';
  const page = Number(searchParams?.page) || 1;
  const stores = await fetchFilteredStores(area, page);
  const totalPages = await fetchStoresPages(area);

  return (
    <div>
      <Suspense>
        <StoreMapView area={area} stores={stores} totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
