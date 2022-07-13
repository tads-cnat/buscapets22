import styled from "styled-components";
import Link from "next/link";

export const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

export const FieldOption = styled.a`
  cursor: pointer;
  display: flex;
  background-color: red;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  background-color:  ${({theme}) => theme.colors.light};
  border: 1px solid ${({theme}) => theme.colors.gray};
  color: ${({theme}) => theme.colors.dark};
  outline: none;
  text-decoration: none;

  & > svg {
    margin-right: 0.5rem;
  }

  &:not(:last-child){
    margin-bottom: 0.5rem;
  }
`

export const FieldDescription = styled.span`
  color: ${({theme}) => theme.colors.dark};
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0 auto;
  text-align: center;
`