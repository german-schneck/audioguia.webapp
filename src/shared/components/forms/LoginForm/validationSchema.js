// Dependencies
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Este campo es necesario')
    .email('Debes introducir un email válido'),
  password: yup.string()
    .required('Este campo es necesario')
});

export default validationSchema;
