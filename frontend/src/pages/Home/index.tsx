import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../components/Logo";
import RegisterPublication from "../../components/RegisterPublication";
import SignIn from "../../components/SignIn";
import { attCoordinates } from "../../redux/mapSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Container, Divv } from "./styles";
import { getPublications } from "../../redux/publicationSlice";
import PreviewPublication from "../../components/PreviewPublication";

interface IViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Home: React.FC = () => {
  const publications = useSelector(
    (state: RootState) => state.publication.publications
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const cursorIcon = useSelector((state: RootState) => state.map.cursorIcon);
  const coordinates = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch<AppDispatch>();
  const [viewport, setViewport] = React.useState<IViewport>({
    latitude: -5.812846584566398,
    longitude: -35.20470354406224,
    zoom: 16,
  });

  React.useEffect(() => {
    dispatch(getPublications());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container icon={cursorIcon}>
      <Logo />
      {!isLogged ? <SignIn /> : <RegisterPublication />}
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        onMove={(move) => setViewport(move.viewState)}
        style={{ width: "100%", height: "100%" }}
        {...viewport}
        mapStyle="mapbox://styles/nicholas-tavares/cl5iiphub001815pes7qdna09"
        onClick={({ lngLat }) =>
          dispatch(attCoordinates({ lat: lngLat.lat, lng: lngLat.lng }))
        }
      >
        {cursorIcon && (
          <Marker
            longitude={coordinates.lng}
            latitude={coordinates.lat}
            children={<Divv />}
            anchor="top-left"
            pitchAlignment="map"
            rotationAlignment="map"
          />
        )}

        {publications.count > 0 &&
          publications.publications.map((publication) => (
            <Marker
              key={publication.id}
              longitude={publication.last_location.coordinates[1]}
              latitude={publication.last_location.coordinates[0]}
              children={
                <PreviewPublication
                  id={publication.id}
                  image_url={publication.image_url[0].image_url}
                />
              }
              anchor="top-left"
              pitchAlignment="map"
              rotationAlignment="map"
            />
          ))}
      </Map>
    </Container>
  );
};

export default Home;
