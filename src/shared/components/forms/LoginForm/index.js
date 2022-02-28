// Dependencies
import React from 'react';

// Styled Components
import {
  Layout,
  Field
} from './styles';

// Components
import TextInput from '../../inputs/TextInput';
import Button from '../../buttons/Button';
import Selector from '../../selectors/Selector';

function LoginForm() {
  return (
    <Layout>
      <Field>
        <Selector
          label={'Aplicación'}
        />
      </Field>
      <Field>
        <TextInput
          label={'Dirección de correo electrónico'}
          placeholder={'tu@ejemplo.com'}
          type={'email'}
          name={'email'}
        />
      </Field>
      <Field>
        <TextInput
          label={'Contraseña'}
          placeholder={'·······················'}
          type={'password'}
          name={'password'}
        />
      </Field>
      <Field>
        <Button
          caption={'Entrar'}
          disabled={true}
        />
      </Field>
    </Layout>
  );
}

export default LoginForm;
