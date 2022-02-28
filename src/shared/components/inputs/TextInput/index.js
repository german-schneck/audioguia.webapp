// Dependencies
import React from 'react';

// Styled Components
import {
  Layout,
  Label,
  Input
} from './styles';

function TextInput({
  label,
  name,
  ...inputProps
}) {
  return (
    <Layout>
      <Label for={name}>{label}</Label>
      <Input {...inputProps} />
    </Layout>
  );
}

export default TextInput;
