import { NextComponentType } from "next";
import dynamic from "next/dynamic";
import LoginOptions from "../../components/LoginOptions";
import Logo from "../../components/Logo";
const Map = dynamic(() => import("../../components/Map"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const Home: NextComponentType = () => {
  return (
    <>
      <Map />
      <Logo />
      <LoginOptions />
    </>
  );
};

export default Home;
