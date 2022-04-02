// Dependencies
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  input: Yup.string().required('Debes introducir al menos un email válido'),
  emails: Yup.array().min(1).required('Debes introducir al menos un email válido')
});

export default validationSchema;
