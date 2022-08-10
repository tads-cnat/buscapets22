import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import { AppDispatch, RootState } from "../../redux/store";
import {
  Container,
  ContainerButton,
  ContainerField,
  ContainerFieldPassword,
  Field,
  FieldError,
  FieldPassword,
  LabelField,
  LoginButton,
  LogInButton,
  LogInButtonText,
  LoginForm,
  PasswordEyeIcon,
  RefinePassword,
} from "./styles";
import { FiLogIn } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

interface IFormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignIn: React.FC = () => {
  const status = useSelector((state: RootState) => state.user.status);
  const [showLoginForm, setShowLoginForm] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<any> = async (data: IFormValues) =>
    dispatch(login(data));

  return (
    <Container>
      <LogInButton onClick={() => setShowLoginForm(!showLoginForm)}>
        <FiLogIn />
        <LogInButtonText>Entrar</LogInButtonText>
      </LogInButton>
      <LoginForm
        onSubmit={handleSubmit(onSubmit)}
        showLoginForm={showLoginForm}
      >
        <ContainerField>
          <LabelField>Email</LabelField>
          <Field
            {...register("email")}
            type="text"
            placeholder="maria@email.com"
          />
          {errors.email && <FieldError>Email inválido</FieldError>}
        </ContainerField>
        <ContainerField>
          <LabelField>Senha</LabelField>
          <ContainerFieldPassword>
            <FieldPassword
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="senha"
            />
            <PasswordEyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </PasswordEyeIcon>
          </ContainerFieldPassword>
          {errors.password && <FieldError>Insira senha</FieldError>}
          {status === "failed" && (
            <FieldError>Email ou senha incorreta</FieldError>
          )}
        </ContainerField>
        <ContainerButton>
          <LoginButton
            type="submit"
            value="Entrar"
            disabled={
              status === "loading" ||
              Boolean(errors.email) ||
              Boolean(errors.password)
            }
          />
          <RefinePassword>Esqueceu a senha?</RefinePassword>
        </ContainerButton>
      </LoginForm>
    </Container>
  );
};

export default SignIn;
