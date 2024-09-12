'use client';

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Store, GeoLocation } from '@/app/lib/definitions';

type GeoLocationForGoogleMap = {
  lat: number;
  lng: number;
}

export default function MapArea({
  stores,
  areaGeoLocation,
  hoverStoreId
} : {
  stores: Store[], 
  areaGeoLocation: GeoLocation,
  hoverStoreId: number | null
}) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{width: '100%', height: '480px'}}
        center={{ lat: areaGeoLocation.latitude, lng: areaGeoLocation.longitude }}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        reuseMaps={true}
        mapId={"390c039512144ac"}
      >
        {stores && stores.length > 0 &&
          stores.map((store, i) => (
            <Marker 
              key={i} 
              point={{lat: Number(store.latitude), lng: Number(store.longitude)}} 
              isHover={hoverStoreId === store.id} 
            />
          ))
        }
      </Map>
    </APIProvider>
  );
}

function Marker ({
  point,
  isHover
} : {
  point: GeoLocationForGoogleMap,
  isHover: boolean
}) {
  return(
    <AdvancedMarker position={point}>
      <Pin 
        background={isHover ? '#FFF' : '#78350f'}
        glyphColor={isHover ? '#78350f' : '#FFF'}
        borderColor={'#78350f'} 
      />
    </AdvancedMarker>
  )
}
