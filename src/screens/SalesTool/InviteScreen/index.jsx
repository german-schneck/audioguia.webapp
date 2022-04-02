// Dependencies
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import AddMembersForm from '../../../shared/components/forms/AddMembersForm';
import { Field, Layout } from '../styles';
import { MarginContainer } from '../../../shared/components';

// Services
import AppService from '../../../shared/services/apps';

// Actions
import { openModal } from '../../../redux/flows/ui/actions';

// Types
import { modalTypesId } from '../../../shared/types/ui';
import Title from '../../../shared/components/misc/Title';

function InviteScreen() {
  // Hooks
  const dispatch = useDispatch();
  const params = useParams();

  /**
   * @function handleAddMembers
   * @description Call the API to create members
   * @type {(function())|*}
   */
  const handleAddMembers = useCallback(async(values, formikHelpers) => {
    try {
      formikHelpers.setSubmitting(true);

      const response = await AppService.inviteToMembership(params.id, values.emails);
      if (response && response.statusCode === 200) {
        const { created, error } = response.data;
        dispatch(openModal(modalTypesId.USERS_INVITATIONS, {
          created,
          error
        }));
      }
    } catch (err) {
      console.error(err);
      formikHelpers.setSubmitting(false);
    }
  }, [params]);

  return (
    <Layout>
      <MarginContainer>
        <Field>
          <Title
            text={'Herramienta de ventas'}
            description={'Gestiona tus ventas desde aqui. Podrás crear hasta una cierta cantidad asignada de códigos de acceso a la app'}
          />
        </Field>
        <Field>
          <AddMembersForm
            onSubmit={handleAddMembers}
          />
        </Field>
      </MarginContainer>
    </Layout>
  );
}

export default InviteScreen;
