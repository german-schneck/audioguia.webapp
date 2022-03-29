// Dependencies
import React from 'react';

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
import Button from '../../../buttons/Button';

function ErrorModal({ title, description, action = null }) {
  return (
    <ModalContainer maxWidth={'420px'}>
      <WarningOutline
        width={'46px'}
        height={'46px'}
        color={'#ffa135'}
        style={{
          marginBottom: '12px'
        }}
      />
      <Title>
        {title}
      </Title>
      <Body>
        {description}
      </Body>
      {action && typeof action === 'function' && (
        <Actions columns={1}>
          <Button
            onClick={action}
            caption={'Ok'}
          />
        </Actions>
      )}
    </ModalContainer>
  );
}

export default ErrorModal;
