import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5dc;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Field = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 12rem;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`

export const FormButton = styled.button`
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  outline: none;
  border: none;
  border-radius: 0.5rem;

  & > svg {
    transition: all 500ms;
    color: #fff;
    font-size: 1.5rem;
  }
`
export const ButtonDescription = styled.span`
  font-size: 1rem;
  margin: 0 auto;
  color: #fff;
  font-weight: bold;
`