// Dependencies
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Este campo es necesario')
    .email('El email es inválido.'),
  code: yup.string()
});

export default validationSchema;
