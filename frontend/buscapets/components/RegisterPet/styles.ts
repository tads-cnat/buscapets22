import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 1rem;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s;
`

export const Field = styled.div`
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

export const RegisterFormContainer = styled.div`
  border-radius: 0.5rem;;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FieldForm = styled.input`
transition: all 1s;
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