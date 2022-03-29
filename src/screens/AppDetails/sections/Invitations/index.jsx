// Dependencies
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import {
  Layout,
  Field,
  Container
} from './styles';

// Components
import FeatureCard from '../../../../shared/components/misc/FeatureCard';
import Button from '../../../../shared/components/buttons/Button';
import InvitationForm from '../../../../shared/components/forms/InvitationForm';

// Selectors
import { getMe } from '../../../../redux/flows/auth/selectors';

// Types
import { userRolesId } from '../../../../shared/types/users';

function Invitation() {
  // Hooks
  const me = useSelector(getMe);
  const history = useHistory();

  /**
   * @var isResellerOrAdmin
   * @description Memorized var to determine if the user as a reseller or admin.
   * @type {boolean} is admin or reseller?
   */
  const isResellerOrAdmin = useMemo(() =>
    !!(me.role === userRolesId.RESELLER || me.role === userRolesId.ADMIN),
  [me.role]);

  return (
    <Layout>
      <Field>
        <FeatureCard
          title={'Compartir esta app a un amigo'}
          description={[
            'Escribe mas abajo el correo eléctornico de un amigo para invitarlo a usar la Audioguia Alhambra',
            <b key={'b'}>Tu amigo recibirá un email con las instrucciónes para acceder.</b>
          ]}
        >
          <Container>
            <InvitationForm />
          </Container>
        </FeatureCard>
      </Field>
      <Field>
        {isResellerOrAdmin ? (
          <FeatureCard
            title={'Panel de Gestión'}
            description={[
              'Tu cuenta es miembro del canal de revendedores autorizados, por lo cual tienes acceso a nuestra herramienta de ventas.'
            ]}
            >
            <Button
              variant={'primary'}
              caption={'Usar a la herramienta de ventas'}
              onClick={() => history.push('./sales')}
            />
          </FeatureCard>
        ) : (
          <FeatureCard
            title={'Conviertete en un revendedor'}
            description={[
              'Si tienes una agencia de turismo o es de tu interés el poder revender esta aplicación, puedes enviarnos una solicitud para que podamos contactar contigo.'
            ]}
          >
            <Button
              variant={'primary'}
              caption={'Hacer solicitud para revender'}
              onClick={() => null}
            />
          </FeatureCard>
        )}
      </Field>
    </Layout>
  );
}

export default Invitation;
