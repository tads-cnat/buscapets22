import React from "react";
import { Container } from "./styles";

interface IPreviewPublication {
  id: string;
  image_url: string;
}

const PreviewPublication: React.FC<IPreviewPublication> = ({
  id,
  image_url,
}) => {
  return <Container image_url={image_url}></Container>;
};

export default PreviewPublication;
