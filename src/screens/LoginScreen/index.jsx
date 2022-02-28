// Dependencies
import React from 'react';

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

// Components
import LoginForm from '../../shared/components/forms/LoginForm';

function LoginScreen() {
  return (
    <Layout>
      <Container>
        <Side className={'withBackground'}>
          <Logotype src={AudioguiaAlhambraIcon} />
        </Side>
        <Side className={'withForm'}>
          <Title>Iniciar sesión</Title>
          <Paragraph>Bienvenido al panel de control de <span className={'app-target'}>Audioguia Alhambra</span>, ingresa tus datos de acceso para ingresar.</Paragraph>
          <LoginForm />
        </Side>
      </Container>
    </Layout>
  );
}

export default LoginScreen;
