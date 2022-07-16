import { NextComponentType } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../api/base";
import Router from "next/router";
import {
  ButtonDescription,
  ContainerLogin,
  Field,
  Form,
  FormButton,
} from "./styles";
import { FiLogIn } from "react-icons/fi";

interface IFormValues {
  email: string;
  password: string;
}

const SignIn: NextComponentType = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (form) => {
    async function login() {
      await api.post("/users/session", form).then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.user.id);
        Router.push("/home");
      });
    }

    login();
  };
  return (
    <ContainerLogin>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
        />
        <Field {...register("password")} type="password" placeholder="senha" />

        <FormButton type="submit">
          <FiLogIn />
          <ButtonDescription>Entrar</ButtonDescription>
        </FormButton>
      </Form>
    </ContainerLogin>
  );
};

export default SignIn;
