'use client';

import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

type Point = {
  lat: number;
  lng: number;
};

type Points = Point[];

export default function MapArea({
  points, 
  hoverStoreId
} : {
  points: Points, 
  hoverStoreId: number | null
}) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{width: '100%', height: '480px'}}
        defaultCenter={{lat: 35.658, lng: 139.7016}}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={"390c039512144ac"}
      >
        {points && points.length > 0 &&
        points.map((point, i) => (
          <Marker 
            key={i} 
            point={point} 
            isHover={hoverStoreId === 1} 
          />
        ))}
      </Map>
    </APIProvider>
  );
}

function Marker ({
  point,
  isHover
} : {
  point:Point,
  isHover: boolean
}) {
  return(
    <AdvancedMarker position={point}>
      <Pin 
        background={isHover? '#FFF' : '#78350f'}
        glyphColor={isHover? '#78350f': '#FFF'}
        borderColor={'#78350f'} 
      />
    </AdvancedMarker>
  )
}