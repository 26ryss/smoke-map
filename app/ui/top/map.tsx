'use client';

import React, { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Store } from '@/app/lib/definitions';

type Point = {
  lat: number;
  lng: number;
}

export default function MapArea({
  stores,
  area,
  hoverStoreId
} : {
  stores: Store[], 
  area: string,
  hoverStoreId: number | null
}) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const [center, setCenter] = useState<Point>({ lat: 0, lng: 0 });
  const [mapComponent, setMapComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await fetch(`/api/geo-location?area=${area}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const locations = await response.json();
        const newCenter = {lat: Number(locations[0].latitude), lng: Number(locations[0].longitude)};
        setCenter(newCenter);
        
        // Update map component when center changes
        setMapComponent(
          <Map
            style={{width: '100%', height: '480px'}}
            center={newCenter}
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
        );
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetchGeoLocation();
  }, [area, stores, hoverStoreId]);

  return (
    <APIProvider apiKey={API_KEY}>
      {mapComponent}
    </APIProvider>
  );
}

function Marker ({
  point,
  isHover
} : {
  point: Point,
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
