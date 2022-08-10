import styled, { css } from "styled-components";

interface IShowLoginForm {
  showLoginForm: boolean
} 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 1.5rem;
  top: 0;
  right: 0;
  z-index: 1;
`

export const LogInButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 3rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.background_login};
  border-radius: 1rem;
  padding: 0.5rem;
  transition: all 300ms;
  margin-bottom: 1rem;
  margin-left: auto;

  & > svg {
    font-size: 2rem;
    color: ${({theme}) => theme.colors.dark};
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.background_login_hover};
  }

  &:active{
    transform: scale(0.95);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`

export const LogInButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.dark};
  margin: 0 auto;
`

export const LoginForm = styled.form<IShowLoginForm>`
  transition: all 500ms;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  height: 0;
  width: 25rem;
  padding: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.background_login};
  ${ props => props.showLoginForm && css`
    opacity: 1;
    height: auto;
  `};
`

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const LabelField = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.15rem;
`

export const Field = styled.input`
  text-decoration: none;
  width: 100%;
  outline: none;
  border: 1px solid ${({theme}) => theme.colors.gray};
  padding: 0.6rem 0.4rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
`

export const ContainerFieldPassword = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 0.5rem;
  padding: 0.6rem 0.4rem;
`

export const FieldPassword = styled.input`
  text-decoration: none;
  width: 90%;
  outline: none;
  border: none;
  font-size: 1.2rem;
`

export const FieldError = styled.div`
  color: ${({theme}) => theme.colors.error_msg};
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: left;
`

export const PasswordEyeIcon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.dark};
  }
`

export const ContainerButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

export const LoginButton = styled.input`
  cursor: pointer;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  background-color: ${({theme}) => theme.colors.green};
  border: 1px solid ${({theme}) => theme.colors.gray};
  font-weight: bold;
  outline: none;
  color: ${({theme}) => theme.colors.light};

  &:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.15);
  }
`

export const RefinePassword = styled.span`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({theme}) => theme.colors.blue};

  &:hover {
    text-decoration: underline;
  }
`