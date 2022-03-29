// Dependencies
import React from 'react';
import { useFormik } from 'formik';

// Styled Components
import {
  Layout,
  Field
} from './styles';

// Components
import TextInput from '../../inputs/TextInput';
import Button from '../../buttons/Button';

// ValidationSchema
import validationSchema from './validationSchema';

// Hooks
import useForm from '../../../hooks/useForm';

function InvitationForm({ onSubmit }) {
  // Hooks
  const formik = useFormik({
    initialValues: {
      email: '',
      code: ''
    },

    onSubmit,
    validationSchema
  });

  // State
  const { isFormValid, handleChangeField, getErrorFromField } = useForm(formik);

  return (
    <Layout onSubmit={formik.handleSubmit}>
      <Field>
        <TextInput
          label={'Dirección de correo electrónico'}
          placeholder={'tu-amigo@ejemplo.com'}
          type={'email'}
          name={'email'}
          autoComplete={'email'}
          value={formik.values.email}
          onChange={(email) => handleChangeField('email', email)}
          error={getErrorFromField('email')}
        />
      </Field>
      <Field>
        <Button
          type={'submit'}
          caption={'Invitar amigo'}
          disabled={!isFormValid}
          isLoading={formik.isSubmitting}
        />
      </Field>
    </Layout>
  );
}

export default InvitationForm;
