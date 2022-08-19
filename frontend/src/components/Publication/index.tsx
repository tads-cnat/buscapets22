import React from "react";
import { IoClose } from "react-icons/io5";
import {
  Container,
  ContainerHeadPublication,
  PetImage,
  ContainerTitle,
  Title,
  ImageContainer,
  TagStatus,
  ContainerDateAuthorPublication,
  ContainerPublicationDetails,
  ContainerPublicationDetail,
  PublicationDetail,
  ContainerDescription,
  ContainerLostTime,
  LostTimeDays,
  ContainerComentariesCount,
  ContainerClosePublication,
  ContainerCloseIcon,
  ContainerContact,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getPublication } from "../../redux/publicationSlice";

type setAllPublication = (any: any) => void;
type setSlide = (any: any) => void;

interface IPublication {
  id: string | undefined;
  setAllPublication: setAllPublication;
  slide: boolean;
  setSlide: setSlide;
}

const Publication: React.FC<IPublication> = ({
  id,
  setAllPublication,
  slide,
  setSlide,
}) => {
  const publication = useSelector(
    (state: RootState) => state.publication.viewPublication
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (id) {
      dispatch(getPublication({ id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const timeElapsed = Date.now();

  return (
    <Container slide={slide}>
      {publication && (
        <>
          <ContainerClosePublication>
            <ContainerCloseIcon onClick={() => setSlide(false)}>
              <IoClose />
            </ContainerCloseIcon>
          </ContainerClosePublication>
          <ContainerHeadPublication>
            <ImageContainer>
              <PetImage image_url={publication?.image_url[0].image_url} />
            </ImageContainer>
            <ContainerTitle>
              <Title>{publication?.title}</Title>
              <TagStatus>desaparecido</TagStatus>
            </ContainerTitle>
          </ContainerHeadPublication>
          <ContainerDateAuthorPublication>
            Publicado em{" "}
            {new Date(publication?.created_at).toLocaleDateString("pt-br")} por{" "}
            <strong>{publication?.user_id.name}</strong>
          </ContainerDateAuthorPublication>
          <ContainerPublicationDetails>
            <ContainerPublicationDetail>
              Nome:
              <PublicationDetail>{publication?.pet_name}</PublicationDetail>
            </ContainerPublicationDetail>
            <ContainerPublicationDetail>
              Sexo: <PublicationDetail>{publication?.gender}</PublicationDetail>
            </ContainerPublicationDetail>
            <ContainerPublicationDetail>
              Visto por último:{" "}
              <PublicationDetail>
                {new Date(publication?.disappearance_date).toLocaleDateString(
                  "pt-br"
                )}
              </PublicationDetail>
            </ContainerPublicationDetail>
          </ContainerPublicationDetails>
          <ContainerDescription>
            {publication?.description}
          </ContainerDescription>
          <ContainerLostTime>
            Perdido há{" "}
            <LostTimeDays>
              {Math.floor(
                (Number(new Date(timeElapsed)) -
                  Number(new Date(publication?.disappearance_date))) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              dias
            </LostTimeDays>
          </ContainerLostTime>
          <ContainerContact>
            <strong>Contato:</strong> {publication?.user_id.phone}
          </ContainerContact>
          <ContainerComentariesCount>
            {publication?.comments.length} comentários
          </ContainerComentariesCount>
        </>
      )}
    </Container>
  );
};

export default Publication;
