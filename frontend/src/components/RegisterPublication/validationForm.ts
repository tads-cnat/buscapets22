import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Preencha o título da publicação"),
  description: yup.string().required("Preencha a descrição da publicação"),
  pet_name: yup.string().required("Preencha o nome do pet"),
  gender: yup.mixed().oneOf(['macho', 'femea']).required("Escolha o sexo do pet"),
  disappearance_date: yup.date().typeError("Preencha a data de desaparecimento do pet")
  .required("Preencha a data de desaparecimento do pet"),
  publication_image: yup.mixed().required("Insira a foto"),
  lng: yup.string().required("Insira a última localização do pet"),
  lat: yup.string().required("Insira a última localização do pet"),
});