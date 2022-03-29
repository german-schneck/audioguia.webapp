// Dependencies
import React, { useMemo } from 'react';

// Styles
import {
  ModalContainer,
  Title,
  Body,
  Actions
} from '../../styles';

// Assets
import {
  WarningOutline
} from 'react-ionicons';
import Button, { ButtonVariants } from '../../../buttons/Button';
import alertsTypeId from '../../../../types/alerts';

function AlertModal({
  type,
  title,
  description,
  primaryAction,
  secondaryAction
}) {
  const renderAlertIcon = useMemo(() => {
    switch (type) {
      case alertsTypeId.LOGOUT:
        return (
          <WarningOutline
            width={'46px'}
            height={'46px'}
            color={'#ffa135'}
            style={{
              marginBottom: '12px'
            }}
          />
        );

      default:
        return (
          <WarningOutline
            width={'46px'}
            height={'46px'}
            color={'#ffa135'}
            style={{
              marginBottom: '12px'
            }}
          />
        );
    }
  });

  return (
    <ModalContainer maxWidth={'420px'}>
      {renderAlertIcon}
      <Title>
        {title}
      </Title>
      <Body>
        {description}
      </Body>
      {primaryAction && typeof primaryAction === 'function' && (
        <Actions columns={2}>
          <Button
            variant={ButtonVariants.PRIMARY}
            onClick={primaryAction}
            caption={'Si'}
          />
          <Button
            variant={ButtonVariants.SECONDARY}
            onClick={secondaryAction}
            caption={'No'}
          />
        </Actions>
      )}
    </ModalContainer>
  );
}

export default AlertModal;
