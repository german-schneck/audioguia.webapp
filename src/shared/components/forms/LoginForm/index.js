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
import useForm from '../../../hooks/useForm';

function LoginForm({ onSubmit }) {
  // Hooks
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
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
          placeholder={'tu@ejemplo.com'}
          type={'email'}
          name={'email'}
          autoComplete={'email'}
          value={formik.values.email}
          onChange={(email) => handleChangeField('email', email)}
          error={getErrorFromField('email')}
        />
      </Field>
      <Field>
        <TextInput
          label={'Contraseña'}
          placeholder={'·······················'}
          autoComplete={'current-password'}
          type={'password'}
          name={'password'}
          value={formik.values.password}
          onChange={(password) => handleChangeField('password', password)}
          error={getErrorFromField('password')}
        />
      </Field>
      <Field>
        <Button
          type={'submit'}
          caption={'Entrar'}
          disabled={!isFormValid}
          isLoading={formik.isSubmitting}
        />
      </Field>
    </Layout>
  );
}

export default LoginForm;
