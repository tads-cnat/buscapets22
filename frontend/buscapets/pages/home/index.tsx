import { NextComponentType } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import LoginOptions from "../../components/LoginOptions";
import Logo from "../../components/Logo";
import RegisterPet from "../../components/RegisterPet";
const Map = dynamic(() => import("../../components/Map"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const Home: NextComponentType = () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const [coordinates, setCoordinate] = useState([0, 0]);
  return (
    <>
      <Map setCoordinates={setCoordinate} />
      <Logo />
      {!token ? <LoginOptions /> : <RegisterPet coordinates={coordinates} />}
    </>
  );
};

export default Home;
