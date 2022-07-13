import { NextComponentType } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const onSubmit: SubmitHandler<IFormValues> = ({ email, password }) => {
    console.log(email, password);
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
