// Dependencies
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import {
  ModalContainer,
  Title,
  Body,
  Actions
} from '../../styles';
import {
  SubTitle,
  List,
  Item,
  Email,
  Description,
  Container
} from './styles';
import Button, { ButtonVariants } from '../../../buttons/Button';

// Actions
import { closeModal } from '../../../../../redux/flows/ui/actions';

function UsersInvitationModal({
  created,
  error
}) {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();

  const renderCreatedMessage = useMemo(() => {
    if (created.length === 1) {
      return `Se ha enviado una invitacion a ${created.length} persona`;
    } else {
      return `Se ha enviado una invitacion a ${created.length} personas`;
    }
  }, [created]);

  const renderErrorMessage = useMemo(() => {
    const errors = Object.keys(error).length;

    if (errors === 1) {
      return `No fue posible invitar a ${errors} persona`;
    } else {
      return `No fue posible invitar a ${errors} personas`;
    }
  }, [error]);

  return (
    <ModalContainer maxWidth={'520px'} alignItems={'flex-start'}>
      <Title>
        Invitacion de usuarios
      </Title>
      <Body textAlign={'left'}>
        {created.length > 0 && (
          <Container>
            <SubTitle type={'created'}>{renderCreatedMessage}</SubTitle>
            <List>
              {created.map((email, index) => (
                <Item key={`--item-success-${index.toString()}`}>
                  <Email>{email}</Email>
                </Item>
              ))}
            </List>
          </Container>
        )}

        {Object.keys(error).length > 0 && (
          <Container>
            <SubTitle type={'error'}>{renderErrorMessage}</SubTitle>
            <List>
              {Object.keys(error).map((email, index) => (
                <Item key={`--item-error-${index.toString()}`}>
                  <Email>{email}</Email>
                  <Description>{error[email]}</Description>
                </Item>
              ))}
            </List>
          </Container>
        )}
      </Body>
      <Actions columns={1}>
        <Button
          variant={ButtonVariants.PRIMARY}
          onClick={() => {
            dispatch(closeModal());
            history.push('/apps/1/sales');
          }}
          caption={'Continuar'}
        />
      </Actions>
    </ModalContainer>
  );
}

export default UsersInvitationModal;
