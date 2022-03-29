// Dependencies
import React, { useMemo } from 'react';

// Styled Components
import {
  Layout,
  Container,
  Data,
  Title,
  State
} from './styles';

// Icons
import { ArrowForwardCircleOutline } from 'react-ionicons';

// Types
import { appStateTypesId } from '../../../types/apps';

function AppCard({
  as = 'div',
  title,
  image,
  state = appStateTypesId.ALREADY_BUYED,
  onClick = () => {}
}) {
  const renderAppState = useMemo(() => {
    switch (state) {
      case appStateTypesId.READY_TO_BUY:
        return 'Disponible';

      case appStateTypesId.UNAVAILABLE:
        return 'Próximamente';

      case appStateTypesId.ALREADY_PURCHASED:
        return 'Conseguído';
      default:
        return null;
    }
  }, [state]);

  return (
    <Layout
      as={as}
      onClick={onClick}
      disabled={state === appStateTypesId.UNAVAILABLE}
      backgroundImage={image}>
      <Container>
        <Data>
          <Title>{title}</Title>
          <State state={state}>
            {renderAppState}
          </State>
        </Data>
        <ArrowForwardCircleOutline
          width={'30px'}
          height={'30px'}
        />
      </Container>
    </Layout>
  );
}

export default AppCard;
