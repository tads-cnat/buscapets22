import styled from "styled-components";

interface IImageUrl {
  image_url: string
}

export const Container = styled.div<IImageUrl>`
  width: 8.6rem;
  height: 8.6rem;
  border-radius: 50%;
  position: relative;
  bottom: 35px;
  left: 5px;
  border: 0.75rem solid #000;
  background: url(${({image_url}) => image_url});
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  
  &::before{
    content: "";
    display: block;
    width: 8rem;
    height: 11rem;
    border-radius: 50%;
    position: absolute;
    top: -5%;
    left: -6.75%;
    background-color: #000;
    z-index: -1;
    clip-path: polygon(50% 0, 101% 50%, 50% 101%, 0 50%);
  }
`
