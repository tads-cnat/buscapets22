import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapContainer } from "./styles";
import { api } from "../../pages/api/base";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmljaG9sYXMtdGF2YXJlcyIsImEiOiJjbDVpZ2xmYjcwN3gyM3BucWZjMW5pc3RyIn0._ZKdLYoeo3T2b8hPLmokpg";

type setCoordinatesProp = (coordinates: [number, number]) => void;
interface IProps {
  setCoordinates: setCoordinatesProp;
}

const Map = ({ setCoordinates }: IProps) => {
  const [pubs, setPubs] = useState<IPub[]>([]);
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(-35.204901905685254);
  const [lat, setLat] = useState(-5.8122023280837825);
  const [zoom, setZoom] = useState(15);

  interface IPub {
    last_location: {
      coordinates: [number, number];
    };
  }

  const el = document.createElement("div");
  el.className = "";
  el.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH84IeuItON7TJbAVjo7n3ZUwlPH2ZGqsd8w&usqp=CAU)`;
  (el.style.backgroundSize = "cover"), (el.style.width = `70px`);
  el.style.backgroundPositionY = "45%";
  el.style.height = `50px`;
  el.style.borderRadius = "10px";
  el.style.cursor = "pointer";
  el.style.border = "1px solid #ccc";

  function populateMap() {
    new mapboxgl.Marker(el)
      .setLngLat([
        pubs[pubs.length - 1].last_location.coordinates[0],
        pubs[pubs.length - 1].last_location.coordinates[1],
      ])
      .addTo(map.current);
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [lng, lat],
      zoom: zoom,
    });
    async function getPubs() {
      await api.get("/publications").then((response) => {
        console.log(response);
        setPubs(response.data.publications);
      });
    }

    getPubs();
  }, []);

  map.current?.on("click", (e: any) => {
    setCoordinates(e.lngLat);
    console.log(e.lngLat);
  });

  pubs.length > 0 && populateMap();

  return (
    <div>
      <MapContainer ref={mapContainer} />
    </div>
  );
};

export default Map;
