import { NextComponentType } from "next";
import { LoginContainer, FieldOption, FieldDescription } from "./styles";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { ReactElement } from "react";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

const LoginOptions: NextComponentType = () => {
  const { asPath } = useRouter();
  return (
    <LoginContainer>
      <ActiveLink href="/signIn">
        <FieldOption>
          <FiLogIn fontSize={20} />
          <FieldDescription>Entrar</FieldDescription>
        </FieldOption>
      </ActiveLink>
      <ActiveLink href="/signUp">
        <FieldOption>
          <AiOutlineUser fontSize={20} />
          <FieldDescription>Cadastrar-se</FieldDescription>
        </FieldOption>
      </ActiveLink>
    </LoginContainer>
  );
};

export default LoginOptions;
