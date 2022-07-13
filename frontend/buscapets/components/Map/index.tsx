import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapContainer } from "./styles";
import { NextComponentType } from "next";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmljaG9sYXMtdGF2YXJlcyIsImEiOiJjbDVpZ2xmYjcwN3gyM3BucWZjMW5pc3RyIn0._ZKdLYoeo3T2b8hPLmokpg";

const Map: NextComponentType = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(-35.204901905685254);
  const [lat, setLat] = useState(-5.8122023280837825);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <MapContainer ref={mapContainer} />
    </div>
  );
};

export default Map;
