// Dependencies
import React from 'react';

// Styled Components
import {
  Layout,
  Label,
  Input,
  Error,
  Description
} from './styles';

function TextInput({
  label,
  name,
  textarea = false,
  error = null,
  onChange = () => null,
  description = null,
  ...inputProps
}) {
  return (
    <>
      <Layout>
        <Label htmlFor={name}>{label}</Label>
        {description && (
          <Description>
            {description}
          </Description>
        )}
        <Input
          as={textarea ? 'textarea' : 'input'}
          {...inputProps}
          onChange={e => onChange(e.target.value)}
        />
      </Layout>
      {error && (
        <Error>{error}</Error>
      )}
    </>
  );
}

export default TextInput;
