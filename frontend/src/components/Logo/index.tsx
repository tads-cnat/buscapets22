import React from "react";
import { ContainerLogo, LogoImg } from "./styles";
import logo_black from "../../assets/buscapets_black.png";

const Logo: React.FC = () => {
  return (
    <ContainerLogo>
      <LogoImg src={logo_black} alt="Logotipo Buscapets" />
    </ContainerLogo>
  );
};

export default Logo;
