import styled, { css } from "styled-components";

interface ICursor {
  icon?: boolean
}


export const Container = styled.div<ICursor>`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  & .mapboxgl-control-container {
    display: none;
  }

  & .mapboxgl-canvas-container {
    ${ props => props.icon && css`
    cursor: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='2em' width='2em' xmlns='http://www.w3.org/2000/svg' style=''%3E%3Cpath d='M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z'%3E%3C/path%3E%3C/svg%3E"), pointer;
  `};
  }
`

export const Divv = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='2em' width='2em' xmlns='http://www.w3.org/2000/svg' style=''%3E%3Cpath d='M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z'%3E%3C/path%3E%3C/svg%3E");
  width: 3rem;
  height: 3rem;
  filter: invert(26%) sepia(35%) saturate(5602%) hue-rotate(343deg) brightness(88%) contrast(110%);
`