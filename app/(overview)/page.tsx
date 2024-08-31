import StoreMapView from "@/app/ui/top/store-map-view";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <StoreMapView />
      </Suspense>
    </div>
  );
}
