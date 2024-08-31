import StoreMapView from "@/app/ui/top/store-map-view";

export default function Home() {
  const totalPages = 3;
  const points = [{lat: 35.662725, lng: 139.700355}];
  
  return (
    <StoreMapView />
  );
}
