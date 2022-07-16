import styled from "styled-components";

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
  background-color:  #fff;
  border: 1px solid #ccc;
  color: #202020;
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
  color: #202020;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0 auto;
  text-align: center;
`