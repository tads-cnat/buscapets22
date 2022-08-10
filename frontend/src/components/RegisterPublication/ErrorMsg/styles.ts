import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: left;
`

export const Msg = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.error_msg};
`