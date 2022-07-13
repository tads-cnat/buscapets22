import styled from "styled-components";

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