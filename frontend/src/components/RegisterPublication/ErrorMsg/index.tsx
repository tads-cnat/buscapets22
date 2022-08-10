import React from "react";
import { Container } from "./styles";
import { Msg } from "./styles";

interface IErrorMsg {
  error: string;
}

const ErrorMsg: React.FC<IErrorMsg> = ({ error }) => {
  return (
    <Container>
      <Msg>{error}</Msg>
    </Container>
  );
};

export default ErrorMsg;
