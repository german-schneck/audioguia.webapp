// Dependencies
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Assets
import AudioguiaAlhambraIcon from '../../shared/assets/icons/audioguia-alhambra.icon.svg';

// Styled Components
import {
  Layout,
  Container,
  Side,
  Title,
  Paragraph,
  Logotype
} from './styles';

// Actions
import { loginUser } from '../../redux/flows/auth/actions';

// Components
import LoginForm from '../../shared/components/forms/LoginForm';

function LoginScreen() {
  // Hooks
  const dispatch = useDispatch();

  const onSubmitLogin = useCallback(({ email, password }, formikHelpers) => {
    dispatch(loginUser({
      email,
      password,
      formikHelpers
    }));
  }, []);

  return (
    <Layout>
      <Container>
        <Side className={'withBackground'}>
          <Logotype src={AudioguiaAlhambraIcon} />
        </Side>
        <Side className={'withForm'}>
          <Title>Iniciar sesión</Title>
          <Paragraph>Bienvenido al panel de control de <span className={'app-target'}>Audioguia Alhambra</span>, ingresa tus datos de acceso para ingresar.</Paragraph>
          <LoginForm
            onSubmit={onSubmitLogin}
          />
        </Side>
      </Container>
    </Layout>
  );
}

export default LoginScreen;
