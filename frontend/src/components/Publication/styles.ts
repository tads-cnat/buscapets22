import styled, {css} from "styled-components";

interface ISlide {
  slide: boolean;
}

interface IImageUrl {
  image_url: string;
}

export const Container = styled.div<ISlide>`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 1.5rem;
  top: 8%;
  right: -28%;
  transition: 1s all ease-in-out;
  ${ props => props.slide && css`
    right: 0;
  `};
  z-index: 1;
  width: 34rem;
  background-color: ${({ theme }) => theme.colors.background_login};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  padding: 1.2rem;
  padding-top: 0.5rem;
`;

export const ContainerClosePublication = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ContainerCloseIcon = styled.div`
  cursor: pointer;
  & > svg {
    font-size: 2.5rem;
    transition: 500ms all;
    &:hover {
      color: ${({ theme }) => theme.colors.error_msg};
    }
  }
`;

export const ContainerHeadPublication = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const PetImage = styled.div<IImageUrl>`
  width: 12rem;
  height: 12rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  background: url(${({ image_url }) => image_url});
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.publication_font};
  margin-bottom: 1rem;
`;

export const TagStatus = styled.span`
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  background-color: #CCCCCC;
  color: white;
  width: fit-content;
  border-radius: 1rem;
`;

export const ContainerDateAuthorPublication = styled.div`
  display: flex;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.publication_font};
  margin-bottom: 1rem;
`

export const ContainerPublicationDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const ContainerPublicationDetail = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.publication_detail};

  &:not(:last-child){
    margin-bottom: 0.4rem;
  }
`

export const PublicationDetail = styled.span`
  margin-left: 0.4rem;
  font-weight: 400;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.publication_font};
`

export const ContainerDescription = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.publication_font};
  margin-bottom: 2rem;
`

export const ContainerLostTime = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.publication_font};
  margin-bottom: 2rem;
`

export const LostTimeDays = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.publication_lost_time};
`

export const ContainerComentariesCount = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.publication_lost_time};
`
