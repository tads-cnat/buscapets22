import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup, NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../components/Logo";
import RegisterPublication from "../../components/RegisterPublication";
import SignIn from "../../components/SignIn";
import { attCoordinates } from "../../redux/mapSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Container, Divv } from "./styles";
import { getPublications } from "../../redux/publicationSlice";
import PreviewPublication from "../../components/PreviewPublication";
import Publication from '../../components/Publication'

interface IAllPublication {
  id: string;
}

const Home: React.FC = () => {
  const publications = useSelector(
    (state: RootState) => state.publication.publications
  );
  const [allPublication, setAllPublication] = React.useState<IAllPublication | null>(null);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const cursorIcon = useSelector((state: RootState) => state.map.cursorIcon);
  const coordinates = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getPublications());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(allPublication)

  return (
    <Container icon={cursorIcon}>
      <Logo />
      {!isLogged ? <SignIn /> : <RegisterPublication />}
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        initialViewState={{
          latitude: -5.812846584566398,
          longitude: -35.20470354406224,
          zoom: 16,
          bearing: 0,
          pitch: 0
        }}
        style={{ width: "100%", height: "100%" }}
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
              anchor="center"
              pitchAlignment="map"
              rotationAlignment="map"
              onClick={() => setAllPublication({id: publication.id})}
            >
              <PreviewPublication 
                  image_url={publication.image_url[0].image_url}
                />
            </Marker>
          ))}
      </Map>
      <Publication id={allPublication?.id} setAllPublication={setAllPublication} />
    </Container>
  );
};

export default Home;
