import React, { useState } from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';
import Pin from '../images/logo.jpg';
import Style from '../data/style.json';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 41.8938438,
    longitude: -74.8329746,
    zoom: 15.5,
    pitch:30,
    bearing: 0,
  });
  const marker = {
    latitude: 41.8938438,
    longitude: -74.8329746,
  }
  return (
    <>
      <ReactMapGl
        {...viewport}
        width="50vw"
        height="350px"
        onViewportChange={(port) => setViewport(port)}
        mapStyle={Style}
        attributionControl={false}
      >
      <Marker
        latitude={marker.latitude}
        longitude={marker.longitude}
        offsetLeft={0}
        offsetTop={0}
      >
      <img className="h-8" src={Pin}/>
      </Marker>
      </ReactMapGl>
    </>
  )
}

