import { NextComponentType } from "next";
import { LogoContainer, LogoImg } from "./styles";
import logo from "../../imgs/logo.png";

const Logo: NextComponentType = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo.src} />
    </LogoContainer>
  );
};

export default Logo;
