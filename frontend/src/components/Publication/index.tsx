import React from 'react';
import {IoClose} from 'react-icons/io5'
import { Container, ContainerHeadPublication, PetImage, ContainerTitle, Title,
  ImageContainer, TagStatus, ContainerDateAuthorPublication, ContainerPublicationDetails,
  ContainerPublicationDetail, PublicationDetail, ContainerDescription, ContainerLostTime,
  LostTimeDays, ContainerComentariesCount, ContainerClosePublication, ContainerCloseIcon } from './styles';
import {api} from '../../services/base'

type setAllPublication = (any: any) => void;

interface IPublication {
  id: string | undefined
  setAllPublication: setAllPublication
}

const Publication: React.FC<IPublication> = ({ id, setAllPublication }) => {

  // React.useEffect(() => {
  //   api.get('/publications')
  // })

  return (
    <Container slide={Boolean(id)}>
      <ContainerClosePublication>
        <ContainerCloseIcon onClick={() => setAllPublication(null)}>
          <IoClose />
        </ContainerCloseIcon>
      </ContainerClosePublication>

      <ContainerHeadPublication>
        <ImageContainer>
          <PetImage image_url='https://buscapets.s3.amazonaws.com/5bca517db7490f35fa51-cat-5590839_640.jpg' />
        </ImageContainer>
        <ContainerTitle>
          <Title>
            Gato perdido perto do Arena das Dunas
          </Title>
          <TagStatus>
            desaparecido
          </TagStatus>
        </ContainerTitle>
      </ContainerHeadPublication>
      <ContainerDateAuthorPublication>
        Publicado em 25/05/2022 por John Grogan
      </ContainerDateAuthorPublication>
      <ContainerPublicationDetails>
        <ContainerPublicationDetail>
          Nome: <PublicationDetail>Bob</PublicationDetail>
        </ContainerPublicationDetail>
        <ContainerPublicationDetail>
          Sexo: <PublicationDetail>Macho</PublicationDetail>
        </ContainerPublicationDetail>
        <ContainerPublicationDetail>
          Visto por último: <PublicationDetail>11/08/2021 - 12h</PublicationDetail>
        </ContainerPublicationDetail>
        <ContainerPublicationDetail>
          Última localização: <PublicationDetail>Av. Prudente de Morais</PublicationDetail>
        </ContainerPublicationDetail>
      </ContainerPublicationDetails>
      <ContainerDescription>
        Estava passeando com meu cachorro, tirei a coleira por um minuto e ele correu. Não consegui mais escontrá-lo.
        Ele correu em direção a uma parada de ônibus atrás do Arena e não consegui mais achar. O Nome dele é Bob.
      </ContainerDescription>
      <ContainerLostTime>
        Perdido há <LostTimeDays>287 dias</LostTimeDays>
      </ContainerLostTime>

      <ContainerComentariesCount>
        3 comentários
      </ContainerComentariesCount>
    </Container>
  ); 
}

export default Publication;