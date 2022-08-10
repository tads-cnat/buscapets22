import styled from "styled-components";

interface IImageUrl {
  image_url: string
}

export const Container = styled.div<IImageUrl>`
  width: 7rem;
  height: 6rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  background: url(${({image_url}) => image_url});
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  
`
