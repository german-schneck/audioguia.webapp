// Dependencies
import React from 'react';

// Components
import Button from '../../buttons/Button';

import {
  Field,
  Data,
  Title,
  Description,
  Right
} from './styles';

function FeatureCard({
  title,
  description = null,
  children
}) {
  return (
    <Field>
      <Data>
        <Title>{title}</Title>
        {typeof description === 'string' ? (
          <Description>{description}</Description>
        ) : (
          (description || []).map((paragraph, index) => (
            <Description
              key={`--description-paragraph-${index.toString()}`}>
              {paragraph}
            </Description>
          ))
        )}
      </Data>
      {children && (
        <Right>
          {children}
        </Right>
      )}
    </Field>
  );
}

export default FeatureCard;
