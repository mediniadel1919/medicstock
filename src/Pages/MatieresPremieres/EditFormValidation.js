import * as yup from "yup";

const schema = yup.object().shape({
  matiereName: yup.string().required(),
  quantité: yup.number().positive().integer().required(),
});

export default schema;
