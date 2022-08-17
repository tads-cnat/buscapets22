import React, { ChangeEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import upload_icon from "../../assets/icon_upload.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { publication } from "../../redux/publicationSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { schema } from "./validationForm";
import { attCursorIcon } from "../../redux/mapSlice";
import ErrorMsg from "./ErrorMsg";
import {
  BackButton,
  CheckRadio,
  Container,
  ContainerButton,
  ContainerField,
  ContainerImgField,
  ContainerLocationIcon,
  ContainerRadioButtons,
  CustomRadio,
  Field,
  LabelField,
  LabelRadioField,
  LocationIcon,
  NextButton,
  PreviewImgField,
  RadioButtonDescription,
  RadioInput,
  RegisterButton,
  RegisterPublicationButton,
  RegisterPublicationButtonText,
  RegisterPublicationForm,
  StepOne,
  StepTwo,
  TextField,
  TitleLocation,
  UploadIcon,
} from "./styles";

interface IFormValues {
  title: string;
  description: string;
  pet_name: string;
  gender: string;
  disappearance_date: string;
  publication_image: any;
  lng: number;
  lat: number;
}

const RegisterPublication: React.FC = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const coordinates = useSelector((state: RootState) => state.map);
  const [nextStep, setNextStep] = React.useState<boolean>(false);
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [imgPreview, setImgPreview] = React.useState<any>(null);
  const dataAtual = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  setValue("lng", coordinates.lng);
  setValue("lat", coordinates.lat);
  const onSubmit: SubmitHandler<any> = async ({
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    publication_image,
    lng,
    lat,
  }: IFormValues) => {
    dispatch(
      publication({
        title,
        description,
        pet_name,
        gender,
        disappearance_date,
        publication_image,
        last_location: [lat, lng],
        token,
      })
    );
    reset();
    setShowForm(false);
    setNextStep(false);
    alert("Publicação efetuada com sucesso!");
  };
  const imageSetPreview = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length > 0) {
      setImgPreview(target.files[0]);
      setValue("publication_image", target.files[0]);
    }
  };
  return (
    <Container>
      <RegisterPublicationButton onClick={() => setShowForm(!showForm)}>
        <AiOutlinePlus />
        <RegisterPublicationButtonText>
          Publicação
        </RegisterPublicationButtonText>
      </RegisterPublicationButton>
      <RegisterPublicationForm
        onSubmit={handleSubmit(onSubmit)}
        show={showForm}
      >
        <StepOne next={showForm && !nextStep}>
          <ContainerImgField>
            {!imgPreview && <UploadIcon src={upload_icon} />}
            <Field
              {...register("publication_image")}
              accept="image/png, image/jpg, image/jpeg"
              size={4000000}
              type="file"
              onChange={(e) => imageSetPreview(e)}
            />
            {imgPreview && (
              <PreviewImgField src={URL.createObjectURL(imgPreview)} />
            )}
          </ContainerImgField>

          <ContainerField>
            <LabelField>Título</LabelField>
            <Field
              {...register("title")}
              type="text"
              placeholder="Cão perdido"
            />
            {errors.title && (
              <ErrorMsg error={errors.title.message as unknown as string} />
            )}
          </ContainerField>

          <ContainerField>
            <LabelField>Nome do Pet</LabelField>
            <Field {...register("pet_name")} placeholder="Caramelo" />
            {errors.pet_name && (
              <ErrorMsg error={errors.pet_name.message as unknown as string} />
            )}
          </ContainerField>

          <ContainerField>
            <LabelField>Sexo</LabelField>
            <ContainerRadioButtons>
              <LabelRadioField htmlFor="macho">
                <RadioInput
                  id="macho"
                  {...register("gender")}
                  type="radio"
                  value="macho"
                />
                <CustomRadio>
                  <CheckRadio />
                </CustomRadio>
                <RadioButtonDescription>Macho</RadioButtonDescription>
              </LabelRadioField>

              <LabelRadioField htmlFor="femea">
                <RadioInput
                  id="femea"
                  {...register("gender")}
                  type="radio"
                  value="femea"
                />
                <CustomRadio>
                  <CheckRadio />
                </CustomRadio>
                <RadioButtonDescription>Fêmea</RadioButtonDescription>
              </LabelRadioField>
            </ContainerRadioButtons>
            {errors.gender && (
              <ErrorMsg error={errors.gender.message as unknown as string} />
            )}
          </ContainerField>

          <ContainerField>
            <LabelField>Descrição</LabelField>
            <TextField
              {...register("description")}
              placeholder="Estava passeando com meu cachorro quando um gato passou, ele o perseguiu e se perdeu próximo ao Arena das Dunas"
            />
            {errors.description && (
              <ErrorMsg
                error={errors.description.message as unknown as string}
              />
            )}
          </ContainerField>

          <ContainerField>
            <LabelField>Data de desaparecimento</LabelField>
            <Field
              {...register("disappearance_date")}
              type="date"
              max={dataAtual}
            />
            {errors.disappearance_date && (
              <ErrorMsg
                error={errors.disappearance_date.message as unknown as string}
              />
            )}
          </ContainerField>

          <ContainerButton>
            <NextButton
              type="button"
              value="Próximo"
              onClick={() => {
                setNextStep(true);
                dispatch(attCursorIcon({ cursorIcon: true }));
              }}
            />
          </ContainerButton>
        </StepOne>
        <StepTwo next={nextStep}>
          <ContainerField>
            <TitleLocation>
              Click no mapa para apontar o último local que seu pet foi visto.
            </TitleLocation>

            <ContainerLocationIcon>
              <LocationIcon>
                <IoLocationSharp />
              </LocationIcon>
            </ContainerLocationIcon>

            <ContainerField>
              <LabelField>Longitude</LabelField>
              <Field {...register("lng")} type="text" readOnly />
            </ContainerField>
            <ContainerField>
              <LabelField>Latitude</LabelField>
              <Field {...register("lat")} type="text" readOnly />
            </ContainerField>
            {errors.lng && (
              <ErrorMsg error={errors.lng.message as unknown as string} />
            )}
          </ContainerField>

          <ContainerButton>
            <BackButton
              onClick={() => {
                dispatch(attCursorIcon({ cursorIcon: false }));
                setNextStep(false);
              }}
            >
              <IoIosArrowBack />
            </BackButton>
            <RegisterButton
              disabled={!isDirty || !isValid}
              isDirty={isDirty}
              isValid={isValid}
              type="submit"
              value="Publicar"
            />
          </ContainerButton>
        </StepTwo>
      </RegisterPublicationForm>
    </Container>
  );
};

export default RegisterPublication;
