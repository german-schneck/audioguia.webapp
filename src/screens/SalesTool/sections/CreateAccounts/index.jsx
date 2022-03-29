// Dependencies
import React, { useMemo } from 'react';
import { useFormik } from 'formik';

// Styled Components
import {
  Form,
  Field,
  List,
  Email,
  Count
} from './styles';

// Components
import TextInput from '../../../../shared/components/inputs/TextInput';
import Button from '../../../../shared/components/buttons/Button';

// Hooks
import useForm from '../../../../shared/hooks/useForm';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function CreateAccounts() {
  // Hooks
  const formik = useFormik({
    initialValues: {
      emails: ''
    }
  });

  const { handleChangeField } = useForm(formik);

  const emails = useMemo(() => {
    const input = formik.values.emails;
    const items = input.split(',');

    const list = items.reduce((acc, email) => {
      if (validateEmail(email) && !acc.find(e => e === email)) {
        acc = [
          ...acc,
          email
        ];
      }
      return acc;
    }, []);

    return list;
  }, [formik.values.emails]);

  return (
    <Form>
      <Field>
        <TextInput
          label={'Dirección de emails'}
          description={'Ingresa los emails de las personas a las que deseas conceder una membresía.'}
          textarea={true}
          name={'emails'}
          onChange={emails => handleChangeField('emails', emails)}
        />
      </Field>
      {emails.length > 0 && (
        <Field>
          <Count>Emails encontrados: {emails.length}</Count>
          <List>
            {emails.map((email, index) => (
              <Email key={`--email-id-${index.toString()}`}>{email}</Email>
            ))}
          </List>
        </Field>
      )}
      <Field>
        <Button
          caption={'Crear membresías'}
        />
      </Field>
    </Form>
  );
}

export default CreateAccounts;
