// Dependencies
import React from 'react';

// Styled Components
import {
  Layout,
  Caption
} from './styles';

function Button({
  caption,
  ...buttonProps
}) {
  return (
    <Layout {...buttonProps}>
      <Caption>
        {caption}
      </Caption>
    </Layout>
  );
}

export default Button;
