// Dependencies
import React from 'react';

// Components
import {
  Layout,
  Field
} from './styles';

// Components
import FeatureCard from '../../../../shared/components/misc/FeatureCard';
import Button from '../../../../shared/components/buttons/Button';

function Membership() {
  return (
    <Layout>
      <Field>
        <FeatureCard
          title={'Desbloquear membresía con código'}
          description={'Puedes desbloquear esta aplicación mediante un código brindado por uno de nuestors revendedores autorizados, o si has accedido a un codigo mediante promoción.'}
        >
          <Button
            variant={'primary'}
            caption={'Ingresar código'}
            onClick={() => null}
          />
        </FeatureCard>
      </Field>
      <Field>
        <FeatureCard
          title={'Comprar la app por tu cuenta'}
          description={[
            'Si no tienes código no te preocupes, podrás acceder a la membresía usando tus tarjetas de debito, credito preferidas.',
            <b key={'b'}>El precio de la membresía es de 3 euros en un único pago.</b>
          ]}
      >
          <Button
            variant={'primary'}
            caption={'Comprar membresía'}
            onClick={() => null}
          />
        </FeatureCard>
      </Field>
    </Layout>
  );
}

export default Membership;
