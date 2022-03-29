// Dependencies
import React from 'react';
import { Oval } from 'react-loader-spinner';

// Styled Components
import {
  Layout,
  Caption
} from './styles';

export const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

function Button({
  caption,
  variant = ButtonVariants.PRIMARY,
  isLoading = false,
  disabled = false,
  ...buttonProps
}) {
  return (
    <Layout
      disabled={disabled || isLoading}
      isLoading={isLoading} {...buttonProps}
      variant={variant}>
      {isLoading ? (
        <Oval
          ariaLabel="loading-indicator"
          height={22}
          width={22}
          strokeWidth={3}
          strokeWidthSecondary={3}
          color="#a5a5a5"
          secondaryColor="transparent"
        />
      ) : (
        <Caption>
          {caption}
        </Caption>
      )}
    </Layout>
  );
}

export default Button;
