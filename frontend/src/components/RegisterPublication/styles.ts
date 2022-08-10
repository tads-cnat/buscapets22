import styled, { css } from "styled-components";

interface IShowRegisterPublicationForm {
  show: boolean
}

interface INextStep {
  next: boolean
}

interface IDisable {
  isDirty: boolean
  isValid: boolean
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

export const RegisterPublicationButton = styled.div`
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

export const RegisterPublicationButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.dark};
  margin: 0 auto;
`

export const RegisterPublicationForm = styled.form<IShowRegisterPublicationForm>`
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
  ${ props => props.show && css`
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

export const ContainerImgField = styled.label`
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 14rem;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 1rem;
    margin-bottom: 1rem;

    & > input {
      display: none;
    }

    & > svg {
      font-size: 3rem;
      color: ${({theme}) => theme.colors.dark};
    }
`

export const PreviewImgField = styled.img`
  ${ props => props.src ? css`
    width: 100%;
    height: 100%;
  `: css`
    display: none;
  `};
`

export const ContainerImgTextField = styled.div`
    width: 10rem;
    height: 8rem;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 1rem;
    margin-bottom: 1rem;
`

export const StepOne = styled.div<INextStep>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${ props => props.next && css`
    display: none;
  `};
`
export const StepTwo = styled.div<INextStep>`
  flex-direction: column;
  width: 100%;
  display: none;

  ${ props => props.next && css`
    display: flex;
  `};
`

export const LabelField = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
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

export const ContainerRadioButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LabelRadioField = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CheckRadio = styled.div`
  content: '';
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`

export const CustomRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.dark_gray};

  ${CheckRadio} {
    transition: 0.5s ease;
    color: cornflowerblue;
  }
`

export const RadioButtonDescription = styled.span`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.dark_light};
  font-weight: bold;
`

export const RadioInput = styled.input`
  display: none;

  &:checked + ${CustomRadio} ${CheckRadio} {
    background-color: #1073E8;
  }
`

export const TextField = styled.textarea`
  text-decoration: none;
  width: 100%;
  outline: none;
  border: 1px solid ${({theme}) => theme.colors.gray};
  padding: 0.6rem 0.4rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  height: 10rem;
`

export const ContainerButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TitleLocation = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const ContainerLocationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #bbb;
  background-color: #ccc;

  & > svg {
    font-size: 3rem;
    color: #000;
  }
`

export const UploadIcon = styled.img`
  width: 8rem;
  color: #000;
`

export const BackButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  height: 2.5rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  background-color: ${({theme}) => theme.colors.dark};
  border: 1px solid ${({theme}) => theme.colors.gray};
  font-weight: bold;
  color: ${({theme}) => theme.colors.light};

  &:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.15);
  }
`

export const NextButton = styled.input`
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
  transition: all 500ms;

  &:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.15);
  }
`

export const RegisterButton = styled.input<IDisable>`
  padding: 0.5rem 1rem;
  height: 2.5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  background-color: ${({theme}) => theme.colors.dark_light};
  opacity: 0.3;
  border: 1px solid ${({theme}) => theme.colors.gray};
  font-weight: bold;
  outline: none;
  color: ${({theme}) => theme.colors.light};

  transition: all 500ms;

  ${ ({isDirty, isValid}) => (isDirty && isValid) && css`
    cursor: pointer;
    opacity: 1;
    background-color: ${({theme}) => theme.colors.green};
  `};

  &:active{
    transform: scale(0.95);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.15);
  }
`