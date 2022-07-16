import { SubmitHandler, useForm } from "react-hook-form";
import {
  ButtonDescription,
  Container,
  Field,
  FieldDescription,
  FieldForm,
  Form,
  FormButton,
  RegisterContainer,
  RegisterFormContainer,
} from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { api } from "../../pages/api/base";

interface IFormValues {
  title: string;
  description: string;
  pet_name: string;
  gender: string;
  disappearance_date: Date;
  last_location: [number, number];
}

interface IProps {
  coordinates: number[];
}

const RegisterPet = ({ coordinates }: IProps) => {
  const [showFom, setShowForm] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = ({
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
  }) => {
    async function registerPet() {
      await api
        .post("/publications", {
          title,
          description,
          pet_name,
          gender,
          disappearance_date,
          last_location: [-35.20174229812656, -5.812239186205528],
        })
        .then((response) => console.log(response))
        .catch((response) => console.log(response));
    }

    registerPet();
  };

  return (
    <Container>
      <RegisterContainer onClick={() => setShowForm(!showFom)}>
        <Field>
          <AiOutlinePlus fontSize={20} />
          <FieldDescription>Registrar</FieldDescription>
        </Field>
      </RegisterContainer>

      {showFom && (
        <RegisterFormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldForm {...register("title")} type="text" placeholder="Title" />
            <FieldForm
              {...register("description")}
              type="text"
              placeholder="Descrição"
            />
            <FieldForm
              {...register("pet_name")}
              type="text"
              placeholder="Nome do pet"
            />
            <FieldForm
              {...register("gender")}
              type="text"
              placeholder="Macho ou Fêmea"
            />
            <FieldForm {...register("disappearance_date")} type="date" />

            <FormButton type="submit">
              <ButtonDescription>Registrar</ButtonDescription>
            </FormButton>
          </Form>
        </RegisterFormContainer>
      )}
    </Container>
  );
};

export default RegisterPet;
